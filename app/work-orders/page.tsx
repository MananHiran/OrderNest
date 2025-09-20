'use client';

import { useState, useEffect } from 'react';
import { Wrench, Plus, Search, Filter, Package, Clock, MapPin, CheckCircle, AlertCircle, XCircle, Play, ChevronDown, SortAsc, SortDesc } from 'lucide-react';

interface WorkOrder {
  id: string;
  operation: string;
  workCenter: string;
  productName: string;
  plannedTime: string;
  actualTime: string;
  status: string;
  startDate: string | null;
  assignedTo: string;
  moId: string;
}

export default function WorkOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
  const [sortBy, setSortBy] = useState<'none' | 'productName-asc' | 'productName-desc'>('none');

  // Fetch work orders from API
  useEffect(() => {
    const fetchWorkOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/work-orders');
        const data = await response.json();
        
        if (data.success) {
          setWorkOrders(data.data);
        } else {
          setError(data.error || 'Failed to fetch work orders');
        }
      } catch (err) {
        setError('Failed to fetch work orders');
        console.error('Error fetching work orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkOrders();
  }, []);

  // Close advanced filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showAdvancedFilter && !target.closest('.relative')) {
        setShowAdvancedFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAdvancedFilter]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'started':
        return <Play className="w-4 h-4 text-blue-600" />;
      case 'not started':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'paused':
        return <AlertCircle className="w-4 h-4 text-orange-600" />;
      default:
        return <XCircle className="w-4 h-4 text-red-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'started':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'not started':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'paused':
        return `${baseClasses} bg-orange-100 text-orange-800`;
      default:
        return `${baseClasses} bg-red-100 text-red-800`;
    }
  };

  const filteredWorkOrders = workOrders
    .filter(order => {
      const matchesSearch = order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.operation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.workCenter.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'productName-asc') {
        return a.productName.localeCompare(b.productName);
      } else if (sortBy === 'productName-desc') {
        return b.productName.localeCompare(a.productName);
      }
      return 0; // No sorting for 'none'
    });

  const statusCounts = {
    all: workOrders.length,
    'not started': workOrders.filter(wo => wo.status === 'not started').length,
    started: workOrders.filter(wo => wo.status === 'started').length,
    completed: workOrders.filter(wo => wo.status === 'completed').length,
    paused: workOrders.filter(wo => wo.status === 'paused').length
  };

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
            <Wrench className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Work Orders</h2>
          </div>
          <p className="text-gray-600">Manage production work orders and track progress</p>
        </div>

        {/* Status Filter Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'all', label: 'All Orders', count: statusCounts.all },
                { key: 'not started', label: 'Not Started', count: statusCounts['not started'] },
                { key: 'started', label: 'Started', count: statusCounts.started },
                { key: 'paused', label: 'Paused', count: statusCounts.paused },
                { key: 'completed', label: 'Completed', count: statusCounts.completed }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilterStatus(tab.key)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    filterStatus === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search work orders, operations, or work centers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Advanced Filter</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAdvancedFilter ? 'rotate-180' : ''}`} />
            </button>
            
            {showAdvancedFilter && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Sort Options</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        value="none"
                        checked={sortBy === 'none'}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">Default Order</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        value="productName-asc"
                        checked={sortBy === 'productName-asc'}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="mr-2"
                      />
                      <SortAsc className="w-4 h-4 mr-1" />
                      <span className="text-sm text-gray-700">Product Name (A-Z)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        value="productName-desc"
                        checked={sortBy === 'productName-desc'}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="mr-2"
                      />
                      <SortDesc className="w-4 h-4 mr-1" />
                      <span className="text-sm text-gray-700">Product Name (Z-A)</span>
                    </label>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <button
                      onClick={() => {
                        setSortBy('none');
                        setShowAdvancedFilter(false);
                      }}
                      className="w-full px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Work Order</span>
          </button>
        </div>

        {/* Work Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading work orders...</p>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <XCircle className="w-12 h-12 text-red-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Work Orders</h3>
              <p className="text-red-600">{error}</p>
            </div>
          )}
          
          {!loading && !error && (
            <>
              {filteredWorkOrders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Operation
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Work Center
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Expected Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Real Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Assigned To
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredWorkOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <Wrench className="w-4 h-4 text-blue-600" />
                              </div>
                              <div className="text-sm font-medium text-gray-900">{order.operation}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-sm text-gray-900">{order.workCenter}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{order.productName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-sm text-gray-900">{order.plannedTime}h</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-gray-400 mr-2" />
                              <span className={`text-sm font-medium ${
                                order.actualTime === '0.00' ? 'text-gray-500' : 'text-gray-900'
                              }`}>
                                {order.actualTime}h
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(order.status)}
                              <span className={getStatusBadge(order.status)}>
                                {order.status.toUpperCase()}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {order.assignedTo}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Wrench className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Work Orders Found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wrench className="w-4 h-4 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{workOrders.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{statusCounts['not started']}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">{statusCounts.started}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{statusCounts.completed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}