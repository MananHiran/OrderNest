'use client';

import React, { useState, useEffect } from 'react';
import { Package, Plus, Search, Filter, Eye, Edit, Trash2, Package2, AlertCircle, FileText } from 'lucide-react';

export default function BillOfMaterialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [bomItems, setBomItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch BOM data from database
  useEffect(() => {
    fetchBomData();
  }, []);

  const fetchBomData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/bom');
      const result = await response.json();
      
      if (result.success) {
        setBomItems(result.data);
      } else {
        setError(result.error || 'Failed to fetch BOM data');
      }
    } catch (err) {
      setError('Failed to connect to server');
      console.error('Error fetching BOM data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Sample BOM data (fallback)
  const [bomList, setBomList] = useState([
    {
      id: 1,
      productName: 'Steel Frame Assembly',
      quantity: 2,
      unitOfMeasure: 'pcs',
      description: 'Main structural frame for product assembly',
      createdDate: '2024-01-15'
    },
    {
      id: 2,
      productName: 'Aluminum Sheet',
      quantity: 5.5,
      unitOfMeasure: 'kg',
      description: 'High-grade aluminum for outer casing',
      createdDate: '2024-01-14'
    },
    {
      id: 3,
      productName: 'Stainless Steel Bolts',
      quantity: 24,
      unitOfMeasure: 'pcs',
      description: 'M8x25 stainless steel bolts for assembly',
      createdDate: '2024-01-13'
    },
    {
      id: 4,
      productName: 'Rubber Gasket',
      quantity: 8,
      unitOfMeasure: 'pcs',
      description: 'Waterproof sealing gaskets',
      createdDate: '2024-01-12'
    },
    {
      id: 5,
      productName: 'Electronic Control Unit',
      quantity: 1,
      unitOfMeasure: 'pcs',
      description: 'Main control board with sensors',
      createdDate: '2024-01-11'
    }
  ]);

  const unitOptions = ['pcs', 'kg', 'g', 'lbs', 'oz', 'm', 'cm', 'mm', 'ft', 'in', 'L', 'ml'];

  const handleAddBOM = () => {
    if (newBOM.productName && newBOM.quantity) {
      const newItem = {
        id: bomList.length + 1,
        productName: newBOM.productName,
        quantity: parseFloat(newBOM.quantity),
        unitOfMeasure: newBOM.unitOfMeasure,
        description: '',
        createdDate: new Date().toISOString().split('T')[0]
      };
      setBomList([...bomList, newItem]);
      setNewBOM({ productName: '', quantity: '', unitOfMeasure: 'pcs' });
      setIsModalOpen(false);
    }
  };

  // Filter BOM items based on search term and status
  const filteredBOMList = bomItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || item.status.toLowerCase().includes(filterStatus.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logo Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">OrderNest</h1>
              <p className="text-sm text-gray-600">Manufacturing ERP System</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Bill of Materials</h2>
          </div>
          <p className="text-gray-600">Manage product components and assembly structures</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search BOMs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Bill of Material
            </button>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
          {['all', 'In Stock', 'Low Stock', 'Out of Stock'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {status === 'all' ? 'All BOMs' : status}
              {status !== 'all' && (
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                  {bomItems.filter(item => item.status === status).length}
                </span>
              )}
              {status === 'all' && (
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                  {bomItems.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* BOM Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <span className="ml-3 text-gray-600">Loading BOMs...</span>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <AlertCircle className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <p className="text-red-600 font-medium">Error loading BOMs</p>
                <p className="text-gray-500 text-sm">{error}</p>
                <button 
                  onClick={fetchBomData}
                  className="mt-2 text-blue-600 hover:text-blue-800 text-sm underline"
                >
                  Try again
                </button>
              </div>
            </div>
          ) : filteredBOMList.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <Package className="h-8 w-8 text-gray-400 mr-3" />
              <div className="text-center">
                <p className="text-gray-600 font-medium">No BOMs found</p>
                <p className="text-gray-500 text-sm">
                  {searchTerm || filterStatus !== 'all' ? 'Try adjusting your search or filters' : 'Create your first BOM to get started'}
                </p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Components
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBOMList.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Package className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-500">ID: {item.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.unit}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">${item.cost}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                          item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {item.components && item.components.length > 0 ? (
                            <div className="space-y-1">
                              {item.components.slice(0, 2).map((comp, index) => (
                                <div key={index} className="text-xs">
                                  {comp.name}: {comp.quantity} {comp.unit}
                                </div>
                              ))}
                              {item.components.length > 2 && (
                                <div className="text-xs text-gray-500">
                                  +{item.components.length - 2} more
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-400 text-xs">No components</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total BOMs</p>
                <p className="text-2xl font-bold text-gray-900">{bomItems.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Package2 className="w-4 h-4 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Stock</p>
                <p className="text-2xl font-bold text-gray-900">{bomItems.filter(item => item.status === 'In Stock').length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-yellow-600">₹</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{bomItems.reduce((sum, item) => sum + parseFloat(item.cost || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold text-gray-900">{bomItems.filter(item => item.status === 'Out of Stock').length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add BOM Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Add New Bill of Material</h3>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={newBOM.productName}
                  onChange={(e) => setNewBOM({...newBOM, productName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={newBOM.quantity}
                  onChange={(e) => setNewBOM({...newBOM, quantity: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter quantity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit of Measure
                </label>
                <select
                  value={newBOM.unitOfMeasure}
                  onChange={(e) => setNewBOM({...newBOM, unitOfMeasure: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {unitOptions.map(unit => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBOM}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Add BOM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}