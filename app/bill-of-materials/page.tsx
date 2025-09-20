'use client';

import React, { useState, useEffect } from 'react';
import { Package, Search, Plus, Eye, Edit, Trash2, Package2, AlertCircle, Filter, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { BOMModal } from '../../components/BOMModal';
import { EditBOMModal } from '../../components/EditBOMModal';
import { Button } from '../../components/ui/button';

export default function BillOfMaterialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingBOM, setEditingBOM] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name'); // 'name', 'cost', 'quantity'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc', 'desc'
  const [showFilters, setShowFilters] = useState(false);
  const [bomItems, setBomItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


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



  const handleBOMSubmit = (newBOMData) => {
    // Refresh the BOM data after successful creation
    fetchBomData();
  };

  const handleEditBOM = (bomItem) => {
    setEditingBOM(bomItem);
    setIsEditModalOpen(true);
  };

  const handleEditBOMSubmit = (updatedBOMData) => {
    // Refresh the BOM data after successful update
    fetchBomData();
    setIsEditModalOpen(false);
    setEditingBOM(null);
  };

  const handleDeleteBOM = async (bomId) => {
    if (!confirm('Are you sure you want to delete this BOM? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/bom?id=${bomId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        // Refresh the BOM data after successful deletion
        fetchBomData();
      } else {
        setError(data.error || 'Failed to delete BOM');
      }
    } catch (error) {
      console.error('Error deleting BOM:', error);
      setError('Failed to delete BOM');
    }
  };

  // Filter and sort BOM items based on search term, status, and sorting options
  const filteredBOMList = bomItems
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || item.status.toLowerCase().includes(filterStatus.toLowerCase());
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'cost':
          aValue = parseFloat(a.cost || 0);
          bValue = parseFloat(b.cost || 0);
          break;
        case 'quantity':
          aValue = parseInt(a.quantity || 0);
          bValue = parseInt(b.quantity || 0);
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortBy === 'name') {
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search BOMs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  <span className="text-sm">Filters</span>
                  {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Bill of Material</span>
                </Button>
              </div>
            </div>
            
            {/* Collapsible Sort Controls */}
            {showFilters && (
              <div className="border-t border-gray-200 pt-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="name">Alphabets (A-Z)</option>
                      <option value="cost">Cost</option>
                      <option value="quantity">Quantity</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Order:</label>
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="asc">{sortBy === 'name' ? 'A-Z' : 'Low to High'}</option>
                      <option value="desc">{sortBy === 'name' ? 'Z-A' : 'High to Low'}</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
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
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-gray-600 mr-1">₹</span>
                          <div className="text-sm font-medium text-gray-900">{item.cost}</div>
                        </div>
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
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <div className="flex items-center justify-center space-x-2">
                          <button 
                            onClick={() => handleEditBOM(item)}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteBOM(item.id)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                          >
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
      <BOMModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleBOMSubmit}
      />

      {/* Edit BOM Modal */}
      <EditBOMModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingBOM(null);
        }}
        onSubmit={handleEditBOMSubmit}
        bomData={editingBOM}
      />
    </div>
  );
}