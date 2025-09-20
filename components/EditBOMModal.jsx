import React, { useState, useEffect } from 'react';
import { Modal, ModalFooter } from './ui/modal';
import { Button } from './ui/button';
import { X, Package, Plus, Trash2 } from 'lucide-react';

export function EditBOMModal({ isOpen, onClose, onSubmit, bomData }) {
  const [formData, setFormData] = useState({
    bom_id: '',
    product_id: '',
    product_name: '',
    quantity: 1,
    cost: 0,
    components: []
  });
  const [availableComponents, setAvailableComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize form data when modal opens or bomData changes
  useEffect(() => {
    if (isOpen && bomData) {
      setFormData({
        bom_id: bomData.id || '',
        product_id: bomData.product_id || '',
        product_name: bomData.name || '',
        quantity: bomData.quantity || 1,
        cost: parseFloat(bomData.cost) || 0,
        components: bomData.components ? bomData.components.map(comp => ({
          id: comp.id || '',
          component_id: comp.component_id || comp.component?.product_id || '',
          name: comp.name || comp.component?.product_name || '',
          quantity_required: comp.quantity_required || 1,
          unit: comp.unit || comp.component?.unit_of_measure || '',
          cost_per_unit: comp.cost_per_unit || comp.component?.cost_per_unit || 0
        })) : []
      });
      fetchComponents();
    }
  }, [isOpen, bomData]);

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

  const handleQuantityChange = (e) => {
    setFormData({
      ...formData,
      quantity: parseInt(e.target.value) || 1
    });
  };

  const handleCostChange = (e) => {
    setFormData({
      ...formData,
      cost: parseFloat(e.target.value) || 0
    });
  };

  const handleComponentQuantityChange = (componentId, quantity) => {
    setFormData(prev => ({
      ...prev,
      components: prev.components.map(comp => 
        comp.component_id === componentId 
          ? { ...comp, quantity_required: parseInt(quantity) || 1 }
          : comp
      )
    }));
  };

  const handleComponentChange = (index, newComponentId) => {
    const selectedComponent = availableComponents.find(comp => comp.product_id === newComponentId);
    if (selectedComponent) {
      setFormData(prev => ({
        ...prev,
        components: prev.components.map((comp, i) => 
          i === index ? {
            ...comp,
            component_id: newComponentId,
            name: selectedComponent.product_name,
            unit: selectedComponent.unit_of_measure,
            cost_per_unit: selectedComponent.cost_per_unit
          } : comp
        )
      }));
    }
  };

  const addNewComponent = () => {
    setFormData(prev => ({
      ...prev,
      components: [...prev.components, {
        id: '',
        component_id: '',
        name: '',
        quantity_required: 1,
        unit: '',
        cost_per_unit: 0
      }]
    }));
  };

  const removeComponent = (index) => {
    setFormData(prev => ({
      ...prev,
      components: prev.components.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.bom_id) {
      setError('BOM ID is required');
      return;
    }

    if (formData.components.length === 0) {
      setError('Please add at least one component');
      return;
    }

    // Validate all components have been selected
    const invalidComponents = formData.components.filter(comp => !comp.component_id);
    if (invalidComponents.length > 0) {
      setError('Please select all component products');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const updateData = {
        bom_id: formData.bom_id,
        quantity: formData.quantity,
        cost: formData.cost,
        components: formData.components.filter(comp => comp.component_id)
      };

      const response = await fetch(`/api/bom/${formData.bom_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (result.success) {
        onSubmit(result.data);
        handleClose();
      } else {
        setError(result.error || 'Failed to update BOM');
      }
    } catch (error) {
      console.error('Error updating BOM:', error);
      setError('Failed to update BOM');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ 
      bom_id: '', 
      product_id: '', 
      product_name: '', 
      quantity: 1, 
      cost: 0, 
      components: [] 
    });
    setError('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Edit Bill of Material" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        {/* Product Info (Read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            value={formData.product_name}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
            disabled
          />
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

        {/* Cost Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Cost (₹)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={formData.cost}
            onChange={handleCostChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        {/* Components Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              BOM Components
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addNewComponent}
              className="flex items-center space-x-1"
            >
              <Plus className="h-4 w-4" />
              <span>Add Component</span>
            </Button>
          </div>
          
          <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-md">
            {formData.components.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No components added. Click "Add Component" to start.
              </div>
            ) : (
              <div className="space-y-3 p-3">
                {formData.components.map((component, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded border">
                    <Package className="h-4 w-4 text-gray-400" />
                    
                    {/* Component Dropdown */}
                    <div className="flex-1">
                      <select
                        value={component.component_id}
                        onChange={(e) => handleComponentChange(index, e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      >
                        <option value="">Select component...</option>
                        {availableComponents.map((comp) => (
                          <option key={comp.product_id} value={comp.product_id}>
                            {comp.product_name} ({comp.unit_of_measure})
                          </option>
                        ))}
                      </select>
                      {component.cost_per_unit > 0 && (
                        <div className="text-xs text-gray-500 mt-1">
                          ₹{component.cost_per_unit}/unit
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
                        onChange={(e) => handleComponentQuantityChange(component.component_id, e.target.value)}
                        className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeComponent(index)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Components Summary */}
        {formData.components.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Components Summary:</h4>
            <div className="bg-gray-50 rounded-md p-3 space-y-1">
              {formData.components.filter(comp => comp.component_id).map((comp, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{comp.name}</span>
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
            disabled={loading || formData.components.length === 0}
            className="bg-black text-white hover:bg-gray-800"
          >
            {loading ? 'Updating...' : 'Update BOM'}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}