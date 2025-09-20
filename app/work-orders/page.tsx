'use client';

import { useState } from 'react';
import { Wrench, Plus, Search, Filter, Package, Clock, MapPin, CheckCircle, AlertCircle, XCircle, Play } from 'lucide-react';

export default function WorkOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample work order data
  const [workOrders] = useState([
    {
      id: 'WO-001',
      operation: 'Machining',
      workCenter: 'CNC Machine 01',
      productName: 'Steel Frame Assembly',
      plannedTime: '4.50', // Expected duration in hours
      actualTime: '00.00', // Real time in hours
      status: 'pending',
      priority: 'high',
      startDate: '2024-01-15',
      assignedTo: 'John Smith'
    },
    {
      id: 'WO-002',
      operation: 'Welding',
      workCenter: 'Welding Station A',
      productName: 'Aluminum Frame',
      plannedTime: '2.30',
      actualTime: '2.45',
      status: 'completed',
      priority: 'medium',
      startDate: '2024-01-14',
      assignedTo: 'Mike Johnson'
    },
    {
      id: 'WO-003',
      operation: 'Assembly',
      workCenter: 'Assembly Line 1',
      productName: 'Electronic Control Unit',
      plannedTime: '6.00',
      actualTime: '3.20',
      status: 'in_progress',
      priority: 'high',
      startDate: '2024-01-13',
      assignedTo: 'Sarah Wilson'
    },
    {
      id: 'WO-004',
      operation: 'Quality Check',
      workCenter: 'QC Station 02',
      productName: 'Rubber Gasket Set',
      plannedTime: '1.15',
      actualTime: '00.00',
      status: 'pending',
      priority: 'low',
      startDate: '2024-01-12',
      assignedTo: 'David Brown'
    },
    {
      id: 'WO-005',
      operation: 'Painting',
      workCenter: 'Paint Booth B',
      productName: 'Steel Frame Assembly',
      plannedTime: '3.45',
      actualTime: '00.00',
      status: 'scheduled',
      priority: 'medium',
      startDate: '2024-01-16',
      assignedTo: 'Lisa Garcia'
    },
    {
      id: 'WO-006',
      operation: 'Packaging',
      workCenter: 'Packaging Line 1',
      productName: 'Complete Product Set',
      plannedTime: '1.30',
      actualTime: '1.25',
      status: 'completed',
      priority: 'low',
      startDate: '2024-01-11',
      assignedTo: 'Tom Anderson'
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in_progress':
        return <Play className="w-4 h-4 text-blue-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'scheduled':
        return <AlertCircle className="w-4 h-4 text-purple-600" />;
      default:
        return <XCircle className="w-4 h-4 text-red-600" />;
    }
  };

  const getStatusBadge = (status) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'in_progress':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'scheduled':
        return `${baseClasses} bg-purple-100 text-purple-800`;
      default:
        return `${baseClasses} bg-red-100 text-red-800`;
    }
  };

  const getPriorityBadge = (priority) => {
    const baseClasses = "inline-flex items-center px-2 py-1 rounded text-xs font-medium";
    switch (priority) {
      case 'high':
        return `${baseClasses} bg-red-50 text-red-700 border border-red-200`;
      case 'medium':
        return `${baseClasses} bg-yellow-50 text-yellow-700 border border-yellow-200`;
      case 'low':
        return `${baseClasses} bg-green-50 text-green-700 border border-green-200`;
      default:
        return `${baseClasses} bg-gray-50 text-gray-700 border border-gray-200`;
    }
  };

  const filteredWorkOrders = workOrders.filter(order => {
    const matchesSearch = order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.operation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.workCenter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: workOrders.length,
    pending: workOrders.filter(wo => wo.status === 'pending').length,
    in_progress: workOrders.filter(wo => wo.status === 'in_progress').length,
    completed: workOrders.filter(wo => wo.status === 'completed').length,
    scheduled: workOrders.filter(wo => wo.status === 'scheduled').length
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
                { key: 'pending', label: 'Pending', count: statusCounts.pending },
                { key: 'in_progress', label: 'In Progress', count: statusCounts.in_progress },
                { key: 'scheduled', label: 'Scheduled', count: statusCounts.scheduled },
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
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Advanced Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Work Order</span>
          </button>
        </div>

        {/* Work Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Work Order
                  </th>
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
                    Priority
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
                        <div>
                          <div className="text-sm font-medium text-gray-900">{order.id}</div>
                          <div className="text-sm text-gray-500">{order.startDate}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.operation}</div>
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
                          order.actualTime === '00.00' ? 'text-gray-500' : 'text-gray-900'
                        }`}>
                          {order.actualTime}h
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span className={getStatusBadge(order.status)}>
                          {order.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getPriorityBadge(order.priority)}>
                        {order.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.assignedTo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredWorkOrders.length === 0 && (
            <div className="text-center py-12">
              <Wrench className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Work Orders Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
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
                <p className="text-2xl font-bold text-gray-900">{statusCounts.pending}</p>
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
                <p className="text-2xl font-bold text-gray-900">{statusCounts.in_progress}</p>
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