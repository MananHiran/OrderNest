import React, { useState, useEffect } from 'react';
import { Modal, ModalFooter } from './ui/modal';
import { Button } from './ui/button';
import { X, Package, Plus } from 'lucide-react';

export function BOMModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    product_id: '',
    quantity: 1,
    components: []
  });
  const [finishedGoods, setFinishedGoods] = useState([]);
  const [availableComponents, setAvailableComponents] = useState([]);
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [additionalComponents, setAdditionalComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch finished goods products for dropdown
  useEffect(() => {
    if (isOpen) {
      fetchFinishedGoods();
      fetchComponents();
    }
  }, [isOpen]);

  const fetchFinishedGoods = async () => {
    try {
      const response = await fetch('/api/products?type=FINISHED_GOOD');
      const products = await response.json();
      
      // Filter products that have BOMs (boms_as_product relationship)
      const productsWithBOMs = products.filter(product => 
        product.boms_as_product && product.boms_as_product.length > 0
      );
      
      setFinishedGoods(productsWithBOMs);
    } catch (error) {
      console.error('Error fetching finished goods:', error);
      setError('Failed to load finished goods');
    }
  };

  const fetchComponents = async () => {
    try {
      const response = await fetch('/api/products?type=RAW_MATERIAL');
      const components = await response.json();
      setAvailableComponents(components);
    } catch (error) {
      console.error('Error fetching components:', error);
      setError('Failed to load components');
    }
  };

  const handleProductChange = (e) => {
    const selectedProductId = e.target.value;
    const selectedProduct = finishedGoods.find(product => product.product_id === selectedProductId);
    
    setFormData({
      ...formData,
      product_id: selectedProductId
    });

    // Auto-populate components from the selected product's BOM
    if (selectedProduct && selectedProduct.boms_as_product && selectedProduct.boms_as_product.length > 0) {
      const bom = selectedProduct.boms_as_product[0]; // Get the first BOM
      const bomComponents = bom.components.map(comp => ({
        component_id: comp.component.product_id,
        name: comp.component.product_name,
        quantity_required: comp.quantity_required,
        unit: comp.component.unit_of_measure
      }));
      
      setSelectedComponents(bomComponents);
    } else {
      setSelectedComponents([]);
    }
  };

  const handleQuantityChange = (e) => {
    setFormData({
      ...formData,
      quantity: parseInt(e.target.value) || 1
    });
  };

  const handleComponentToggle = (component) => {
    const isSelected = selectedComponents.find(c => c.component_id === component.product_id);
    
    if (isSelected) {
      setSelectedComponents(selectedComponents.filter(c => c.component_id !== component.product_id));
    } else {
      setSelectedComponents([
        ...selectedComponents,
        {
          component_id: component.product_id,
          name: component.product_name,
          quantity_required: 1,
          unit: component.unit_of_measure
        }
      ]);
    }
  };

  const handleComponentQuantityChange = (componentId, quantity) => {
    setSelectedComponents(selectedComponents.map(comp => 
      comp.component_id === componentId 
        ? { ...comp, quantity_required: parseInt(quantity) || 1 }
        : comp
    ));
  };

  const handleAdditionalComponentQuantityChange = (componentId, quantity) => {
    setAdditionalComponents(additionalComponents.map(comp => 
      comp.component_id === componentId 
        ? { ...comp, quantity_required: parseInt(quantity) || 1 }
        : comp
    ));
  };

  const addAdditionalComponent = () => {
    setAdditionalComponents([
      ...additionalComponents,
      {
        component_id: '',
        name: '',
        quantity_required: 1,
        unit: ''
      }
    ]);
  };

  const removeAdditionalComponent = (index) => {
    setAdditionalComponents(additionalComponents.filter((_, i) => i !== index));
  };

  const handleAdditionalComponentChange = (index, componentId) => {
    const selectedComponent = availableComponents.find(comp => comp.product_id === componentId);
    if (selectedComponent) {
      setAdditionalComponents(additionalComponents.map((comp, i) => 
        i === index ? {
          component_id: componentId,
          name: selectedComponent.product_name,
          quantity_required: comp.quantity_required,
          unit: selectedComponent.unit_of_measure
        } : comp
      ));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.product_id) {
      setError('Please select a product');
      return;
    }

    // Combine selected components and additional components
    const allComponents = [
      ...selectedComponents,
      ...additionalComponents.filter(comp => comp.component_id) // Only include additional components that have been selected
    ];

    if (allComponents.length === 0) {
      setError('Please select at least one component');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const bomData = {
        product_id: formData.product_id,
        components: allComponents
      };

      const response = await fetch('/api/bom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bomData),
      });

      const result = await response.json();

      if (result.success) {
        onSubmit(result.data);
        handleClose();
      } else {
        setError(result.error || 'Failed to create BOM');
      }
    } catch (error) {
      console.error('Error creating BOM:', error);
      setError('Failed to create BOM');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ product_id: '', quantity: 1, components: [] });
    setSelectedComponents([]);
    setAdditionalComponents([]);
    setError('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add Bill of Material" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        {/* Product Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name (Finished Goods)
          </label>
          <select
            value={formData.product_id}
            onChange={handleProductChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          >
            <option value="">Select a finished good product...</option>
            {finishedGoods.map((product) => (
              <option key={product.product_id} value={product.product_id}>
                {product.product_name} ({product.unit_of_measure})
              </option>
            ))}
          </select>
        </div>

        {/* Quantity Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleQuantityChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        {/* Components Checklist */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            BOM Components
          </label>
          {formData.product_id && selectedComponents.length > 0 && (
            <p className="text-xs text-blue-600 mb-3">
              Components automatically loaded from the selected product's BOM. You can adjust quantities as needed.
            </p>
          )}
          {!formData.product_id && (
            <p className="text-xs text-gray-500 mb-3">
              Select a finished good product to view its BOM components.
            </p>
          )}
          <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-md">
            {!formData.product_id ? (
              <div className="p-4 text-center text-gray-500">
                Select a finished good product to view its BOM components
              </div>
            ) : selectedComponents.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No BOM components found for this product
              </div>
            ) : (
              <div className="space-y-2 p-3">
                {selectedComponents.map((component) => {
                  // Find the full component details from availableComponents for stock info
                  const fullComponent = availableComponents.find(ac => ac.product_id === component.component_id);
                  return (
                    <div key={component.component_id} className="flex items-center space-x-3 p-2 bg-blue-50 rounded border border-blue-200">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <Package className="h-4 w-4 text-blue-500" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {component.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {fullComponent ? (
                            <>Stock: {fullComponent.current_stock} {component.unit} | ₹{fullComponent.cost_per_unit}/unit</>
                          ) : (
                            <>Unit: {component.unit}</>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <label className="text-xs text-gray-600">Qty:</label>
                        <input
                          type="number"
                          min="1"
                          value={component.quantity_required}
                          onChange={(e) => handleComponentQuantityChange(component.component_id, e.target.value)}
                          className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Additional Components Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Additional Components (Optional)
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addAdditionalComponent}
              className="flex items-center space-x-1"
            >
              <Plus className="h-4 w-4" />
              <span>Add Component</span>
            </Button>
          </div>
          
          {additionalComponents.length > 0 && (
            <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-md mb-4">
              <div className="space-y-3 p-3">
                {additionalComponents.map((component, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                    <Package className="h-4 w-4 text-yellow-600" />
                    
                    {/* Component Dropdown */}
                    <div className="flex-1">
                      <select
                        value={component.component_id}
                        onChange={(e) => handleAdditionalComponentChange(index, e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select additional component...</option>
                        {availableComponents
                          .filter(comp => 
                            // Filter out components already in selectedComponents or other additionalComponents
                            !selectedComponents.find(sc => sc.component_id === comp.product_id) &&
                            !additionalComponents.filter((_, i) => i !== index).find(ac => ac.component_id === comp.product_id)
                          )
                          .map((comp) => (
                            <option key={comp.product_id} value={comp.product_id}>
                              {comp.product_name} ({comp.unit_of_measure})
                            </option>
                          ))}
                      </select>
                      {component.component_id && (
                        <div className="text-xs text-gray-500 mt-1">
                          {(() => {
                            const fullComp = availableComponents.find(ac => ac.product_id === component.component_id);
                            return fullComp ? `Stock: ${fullComp.current_stock} ${component.unit} | ₹${fullComp.cost_per_unit}/unit` : '';
                          })()}
                        </div>
                      )}
                    </div>

                    {/* Quantity Input */}
                    <div className="flex items-center space-x-2">
                      <label className="text-xs text-gray-600">Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={component.quantity_required}
                        onChange={(e) => handleAdditionalComponentQuantityChange(component.component_id, e.target.value)}
                        className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeAdditionalComponent(index)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* All Components Summary */}
        {(selectedComponents.length > 0 || additionalComponents.filter(comp => comp.component_id).length > 0) && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">All Components Summary:</h4>
            <div className="bg-gray-50 rounded-md p-3 space-y-1">
              {selectedComponents.map((comp) => (
                <div key={comp.component_id} className="flex justify-between text-sm">
                  <span>{comp.name} <span className="text-blue-600">(BOM)</span></span>
                  <span>{comp.quantity_required} {comp.unit}</span>
                </div>
              ))}
              {additionalComponents.filter(comp => comp.component_id).map((comp, index) => (
                <div key={`additional-${index}`} className="flex justify-between text-sm">
                  <span>{comp.name} <span className="text-yellow-600">(Additional)</span></span>
                  <span>{comp.quantity_required} {comp.unit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <ModalFooter>
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading || !formData.product_id || (selectedComponents.length === 0 && additionalComponents.filter(comp => comp.component_id).length === 0)}
            className="bg-black text-white hover:bg-gray-800"
          >
            {loading ? 'Creating...' : 'Create BOM'}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}