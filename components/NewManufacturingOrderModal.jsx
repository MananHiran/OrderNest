import React, { useState, useEffect } from 'react';
import { Modal, ModalFooter } from './ui/modal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Plus, Trash2, Calendar, User, Package, AlertTriangle } from 'lucide-react';
import { Badge } from './ui/badge';

export function NewManufacturingOrderModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    product_id: '',
    product_name: '',
    quantity: '',
    unit_of_measure: 'PCS',
    scheduled_start: '',
    scheduled_end: '',
    assigned_to: '',
    bill_of_materials: []
  });

  const [productBOMComponents, setProductBOMComponents] = useState([]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [products, setProducts] = useState([]);
  const [rawMaterials, setRawMaterials] = useState([]);
  const [operatorManagers, setOperatorManagers] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingRawMaterials, setLoadingRawMaterials] = useState(false);
  const [loadingOperatorManagers, setLoadingOperatorManagers] = useState(false);

  // Fetch products when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchProducts();
      fetchRawMaterials();
      fetchOperatorManagers();
      setFormData({
        product_id: '',
        product_name: '',
        quantity: '',
        unit_of_measure: 'PCS',
        scheduled_start: '',
        scheduled_end: '',
        assigned_to: '',
        bill_of_materials: []
      });
      setProductBOMComponents([]);
      setErrors({});
    }
  }, [isOpen]);

  const fetchProducts = async () => {
    try {
      setLoadingProducts(true);
      const response = await fetch('/api/products?type=FINISHED_GOOD');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoadingProducts(false);
    }
  };

  const fetchRawMaterials = async () => {
    try {
      setLoadingRawMaterials(true);
      const response = await fetch('/api/products?type=RAW_MATERIAL');
      if (response.ok) {
        const data = await response.json();
        setRawMaterials(data);
      } else {
        console.error('Failed to fetch raw materials');
      }
    } catch (error) {
      console.error('Error fetching raw materials:', error);
    } finally {
      setLoadingRawMaterials(false);
    }
  };

  const fetchOperatorManagers = async () => {
    try {
      setLoadingOperatorManagers(true);
      const response = await fetch('/api/users?role=OPERATOR_MANAGER');
      if (response.ok) {
        const data = await response.json();
        setOperatorManagers(data);
      } else {
        console.error('Failed to fetch operator managers');
      }
    } catch (error) {
      console.error('Error fetching operator managers:', error);
    } finally {
      setLoadingOperatorManagers(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleProductChange = (productId) => {
    const selectedProduct = products.find(p => p.product_id === productId);
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        product_id: productId,
        product_name: selectedProduct.product_name,
        unit_of_measure: selectedProduct.unit_of_measure
      }));

      // Extract BOM components from the selected product's relational BOM data
      const bomComponents = [];
      
      if (selectedProduct.boms_as_product && selectedProduct.boms_as_product.length > 0) {
        // Use the first BOM (assuming one BOM per product)
        const bom = selectedProduct.boms_as_product[0];
        
        if (bom.components && Array.isArray(bom.components)) {
          bom.components.forEach(bomComponent => {
            // Find the raw material details
            const rawMaterial = rawMaterials.find(rm => rm.product_id === bomComponent.component_id);
            if (rawMaterial) {
              bomComponents.push({
                component_id: bomComponent.component_id,
                component_name: rawMaterial.product_name,
                quantity_required: bomComponent.quantity_required,
                unit: rawMaterial.unit_of_measure,
                current_stock: rawMaterial.current_stock || 0
              });
            }
          });
        }
      }
      setProductBOMComponents(bomComponents);

      // Clear product-related errors
      if (errors.product_id || errors.product_name) {
        setErrors(prev => ({ ...prev, product_id: '', product_name: '' }));
      }
    }
  };

  const addBOMItem = () => {
    setFormData(prev => ({
      ...prev,
      bill_of_materials: [...prev.bill_of_materials, { 
        component_id: '', 
        component_name: '', 
        quantity_required: '', 
        unit: 'PCS' 
      }]
    }));
  };

  const removeBOMItem = (index) => {
    setFormData(prev => ({
      ...prev,
      bill_of_materials: prev.bill_of_materials.filter((_, i) => i !== index)
    }));
  };

  const updateBOMItem = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      bill_of_materials: prev.bill_of_materials.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleBOMComponentChange = (index, componentId) => {
    const selectedComponent = rawMaterials.find(rm => rm.product_id === componentId);
    if (selectedComponent) {
      setFormData(prev => ({
        ...prev,
        bill_of_materials: prev.bill_of_materials.map((item, i) => 
          i === index ? { 
            ...item, 
            component_id: componentId,
            component_name: selectedComponent.product_name,
            unit: selectedComponent.unit_of_measure
          } : item
        )
      }));
    }
  };

  // Calculate total components required with availability checking
  const calculateTotalComponentsRequired = () => {
    const totalComponents = [];
    const productQuantity = parseFloat(formData.quantity) || 0;

    if (productQuantity <= 0) return totalComponents;

    // Add BOM components from the selected product
    productBOMComponents.forEach(component => {
      const consumptionQuantity = component.quantity_required * productQuantity;
      const currentStock = component.current_stock || 0;
      const isAvailable = currentStock >= consumptionQuantity;

      totalComponents.push({
        component_id: component.component_id,
        component_name: component.component_name,
        consumption_quantity: consumptionQuantity,
        current_stock: currentStock,
        unit: component.unit,
        availability: isAvailable ? 'Available' : 'Restock',
        isAvailable: isAvailable
      });
    });

    // Add additional BOM components
    formData.bill_of_materials.forEach(item => {
      if (item.component_id && item.quantity_required) {
        const consumptionQuantity = parseFloat(item.quantity_required) * productQuantity;
        const rawMaterial = rawMaterials.find(rm => rm.product_id === item.component_id);
        const currentStock = rawMaterial?.current_stock || 0;
        const isAvailable = currentStock >= consumptionQuantity;

        // Check if this component is already in the list (from BOM)
        const existingIndex = totalComponents.findIndex(tc => tc.component_id === item.component_id);
        
        if (existingIndex >= 0) {
          // Update existing component with additional quantity
          totalComponents[existingIndex].consumption_quantity += consumptionQuantity;
          totalComponents[existingIndex].isAvailable = totalComponents[existingIndex].current_stock >= totalComponents[existingIndex].consumption_quantity;
          totalComponents[existingIndex].availability = totalComponents[existingIndex].isAvailable ? 'Available' : 'Restock';
        } else {
          // Add new component
          totalComponents.push({
            component_id: item.component_id,
            component_name: item.component_name,
            consumption_quantity: consumptionQuantity,
            current_stock: currentStock,
            unit: item.unit,
            availability: isAvailable ? 'Available' : 'Restock',
            isAvailable: isAvailable
          });
        }
      }
    });

    return totalComponents;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.product_id) {
      newErrors.product_id = 'Please select a product';
    }
    if (!formData.quantity || isNaN(formData.quantity) || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Valid quantity is required';
    }
    if (!formData.scheduled_start) {
      newErrors.scheduled_start = 'Scheduled start date is required';
    }
    if (!formData.scheduled_end) {
      newErrors.scheduled_end = 'Scheduled end date is required';
    }
    if (formData.scheduled_start && formData.scheduled_end && 
        new Date(formData.scheduled_start) >= new Date(formData.scheduled_end)) {
      newErrors.scheduled_end = 'End date must be after start date';
    }

    // Validate BOM items
    formData.bill_of_materials.forEach((item, index) => {
      if (!item.component_id) {
        newErrors[`bom_${index}_component`] = 'Please select a raw material';
      }
      if (!item.quantity_required || isNaN(item.quantity_required) || parseFloat(item.quantity_required) <= 0) {
        newErrors[`bom_${index}_quantity`] = 'Valid quantity is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Calculate component consumption data
      const totalComponents = calculateTotalComponentsRequired();
      
      const componentConsumptions = totalComponents.map(component => ({
        product_id: component.component_id,
        product_name: component.component_name,
        consumption_quantity: component.consumption_quantity,
        flag: component.isAvailable // true if available, false if needs restock
      }));

      // Include component consumption data in form submission
      const orderDataWithComponents = {
        ...formData,
        component_consumptions: componentConsumptions
      };

      await onSubmit(orderDataWithComponents);
      onClose();
    } catch (error) {
      console.error('Error creating manufacturing order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Manufacturing Order" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="w-5 h-5" />
              <span>Product Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="product_id">Product Name *</Label>
              {loadingProducts ? (
                <div className="flex items-center justify-center py-3 border border-gray-300 rounded-md">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-sm text-gray-600">Loading products...</span>
                </div>
              ) : (
                <select
                  id="product_id"
                  value={formData.product_id}
                  onChange={(e) => handleProductChange(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.product_id ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.product_id} value={product.product_id}>
                      {product.product_name} ({product.unit_of_measure})
                    </option>
                  ))}
                </select>
              )}
              {errors.product_id && (
                <p className="text-sm text-red-600 mt-1">{errors.product_id}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  placeholder="Enter quantity"
                  min="1"
                  step="0.01"
                  className={errors.quantity ? 'border-red-500' : ''}
                />
                {errors.quantity && (
                  <p className="text-sm text-red-600 mt-1">{errors.quantity}</p>
                )}
              </div>

              <div>
                <Label htmlFor="unit_of_measure">Unit of Measure</Label>
                <Input
                  id="unit_of_measure"
                  value={formData.unit_of_measure}
                  readOnly
                  className="bg-gray-50 cursor-not-allowed"
                />
                <p className="text-xs text-gray-500 mt-1">Automatically set based on selected product</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="scheduled_start">Start Date *</Label>
                <Input
                  id="scheduled_start"
                  type="date"
                  value={formData.scheduled_start}
                  onChange={(e) => handleInputChange('scheduled_start', e.target.value)}
                  className={errors.scheduled_start ? 'border-red-500' : ''}
                />
                {errors.scheduled_start && (
                  <p className="text-sm text-red-600 mt-1">{errors.scheduled_start}</p>
                )}
              </div>

              <div>
                <Label htmlFor="scheduled_end">End Date *</Label>
                <Input
                  id="scheduled_end"
                  type="date"
                  value={formData.scheduled_end}
                  onChange={(e) => handleInputChange('scheduled_end', e.target.value)}
                  className={errors.scheduled_end ? 'border-red-500' : ''}
                />
                {errors.scheduled_end && (
                  <p className="text-sm text-red-600 mt-1">{errors.scheduled_end}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assignee Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Assignment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="assigned_to">Assigned To</Label>
              <Select
                value={formData.assigned_to}
                onValueChange={(value) => handleInputChange('assigned_to', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={loadingOperatorManagers ? "Loading..." : "Select an operator manager"} />
                </SelectTrigger>
                <SelectContent>
                  {operatorManagers.map((manager) => (
                    <SelectItem key={manager.user_id} value={manager.user_id}>
                      {manager.name} ({manager.email})
                    </SelectItem>
                  ))}
                  {operatorManagers.length === 0 && !loadingOperatorManagers && (
                    <SelectItem value="" disabled>
                      No operator managers found
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* BOM Components from Product */}
        {productBOMComponents.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="w-5 h-5" />
                <span>BOM Components</span>
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Components required for the selected product (from BOM)
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {productBOMComponents.map((component, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg bg-blue-50">
                    <div className="flex-1 grid grid-cols-3 gap-3">
                      <div>
                        <Input
                          value={component.component_name}
                          readOnly
                          className="bg-white cursor-not-allowed"
                          placeholder="Component Name"
                        />
                      </div>
                      <div>
                        <Input
                          value={component.quantity_required}
                          readOnly
                          className="bg-white cursor-not-allowed"
                          placeholder="Quantity"
                        />
                      </div>
                      <Input
                        value={component.unit}
                        readOnly
                        className="bg-white cursor-not-allowed"
                        placeholder="Unit"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Additional Components */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Additional Components</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addBOMItem}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Component</span>
              </Button>
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              Add extra components not included in the standard BOM
            </p>
          </CardHeader>
          <CardContent>
            {formData.bill_of_materials.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No additional components added yet. Click "Add Component" to add extra BOM items.
              </p>
            ) : (
              <div className="space-y-3">
                {formData.bill_of_materials.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="flex-1 grid grid-cols-3 gap-3">
                      <div>
                        <select
                          value={item.component_id}
                          onChange={(e) => handleBOMComponentChange(index, e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors[`bom_${index}_component`] ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select raw material</option>
                          {rawMaterials.map((material) => (
                            <option key={material.product_id} value={material.product_id}>
                              {material.product_name} ({material.unit_of_measure})
                            </option>
                          ))}
                        </select>
                        {loadingRawMaterials && (
                          <p className="text-xs text-gray-500 mt-1">Loading raw materials...</p>
                        )}
                        {errors[`bom_${index}_component`] && (
                          <p className="text-xs text-red-600 mt-1">{errors[`bom_${index}_component`]}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          type="number"
                          placeholder="Quantity"
                          value={item.quantity_required}
                          onChange={(e) => updateBOMItem(index, 'quantity_required', e.target.value)}
                          min="0"
                          step="0.01"
                          className={errors[`bom_${index}_quantity`] ? 'border-red-500' : ''}
                        />
                        {errors[`bom_${index}_quantity`] && (
                          <p className="text-xs text-red-600 mt-1">{errors[`bom_${index}_quantity`]}</p>
                        )}
                      </div>
                      <Input
                        value={item.unit}
                        readOnly
                        className="bg-gray-50 cursor-not-allowed"
                        placeholder="Unit"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeBOMItem(index)}
                      className="p-2 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Total Components Required */}
        {(formData.product_id && formData.quantity && parseFloat(formData.quantity) > 0) && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Total Components Required</span>
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Total consumption based on product quantity ({formData.quantity} units)
              </p>
            </CardHeader>
            <CardContent>
              {(() => {
                const totalComponents = calculateTotalComponentsRequired();
                
                if (totalComponents.length === 0) {
                  return (
                    <p className="text-gray-500 text-center py-4">
                      No components required for this product.
                    </p>
                  );
                }

                return (
                  <div className="space-y-3">
                    {totalComponents.map((component, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                        <div className="flex-1 grid grid-cols-4 gap-3 items-center">
                          <div>
                            <p className="font-medium text-sm">{component.component_name}</p>
                            <p className="text-xs text-gray-500">Component</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-sm">{component.consumption_quantity.toFixed(2)}</p>
                            <p className="text-xs text-gray-500">Required ({component.unit})</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-sm">{component.current_stock.toFixed(2)}</p>
                            <p className="text-xs text-gray-500">In Stock ({component.unit})</p>
                          </div>
                          <div className="text-center">
                            <Badge 
                              variant={component.isAvailable ? "default" : "destructive"}
                              className={component.isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                            >
                              {component.availability}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Summary */}
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-900">
                          Total Components: {totalComponents.length}
                        </span>
                        <span className="font-medium text-blue-900">
                          Need Restock: {totalComponents.filter(c => !c.isAvailable).length}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        <ModalFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Create Order'}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
