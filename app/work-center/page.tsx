'use client';

import React, { useState, useEffect } from 'react';
import { Settings, Plus, Search, Filter, Building2, Clock, AlertCircle, Edit, Trash2 } from 'lucide-react';

interface WorkCenter {
  id: string;
  name: string;
  costPerHour: number;
  workOrderCount: number;
  createdAt: string;
  updatedAt: string;
}

export default function WorkCenterPage() {
  const [workCenters, setWorkCenters] = useState<WorkCenter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch work centers data
  const fetchWorkCenters = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/work-centers');
      const result = await response.json();
      
      if (result.success) {
        setWorkCenters(result.data);
      } else {
        setError(result.error || 'Failed to fetch work centers');
      }
    } catch (err) {
      setError('Failed to connect to server');
      console.error('Error fetching work centers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkCenters();
  }, []);

  // Filter work centers based on search term
  const filteredWorkCenters = workCenters.filter(workCenter =>
    workCenter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Settings className="w-8 h-8 text-gray-900" />
          <h1 className="text-3xl font-bold text-gray-900">Work Center</h1>
        </div>
        <p className="text-gray-600">Manage production centers and their capabilities</p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search work centers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
          <Plus className="w-4 h-4" />
          <span>New Work Center</span>
        </button>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Work Centers</p>
              <p className="text-2xl font-bold text-gray-900">{workCenters.length}</p>
            </div>
            <Building2 className="w-8 h-8 text-gray-900" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Work Orders</p>
              <p className="text-2xl font-bold text-gray-900">
                {workCenters.reduce((sum, wc) => sum + wc.workOrderCount, 0)}
              </p>
            </div>
            <Clock className="w-8 h-8 text-gray-700" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Cost/Hour</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{workCenters.length > 0 ? 
                  (workCenters.reduce((sum, wc) => sum + wc.costPerHour, 0) / workCenters.length).toFixed(2) : 
                  '0.00'
                }
              </p>
            </div>
            <span className="text-3xl font-bold text-gray-600">₹</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Hourly Cost</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{workCenters.reduce((sum, wc) => sum + wc.costPerHour, 0).toFixed(2)}
              </p>
            </div>
            <span className="text-3xl font-bold text-gray-800">₹</span>
          </div>
        </div>
      </div>

      {/* Work Centers Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Work Centers</h2>
          <p className="text-sm text-gray-600">Manage your production work centers and their hourly costs</p>
        </div>
        
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading work centers...</span>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
              <div className="text-center">
                <p className="text-red-600 font-medium">{error}</p>
                <button 
                  onClick={fetchWorkCenters}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : filteredWorkCenters.length === 0 ? (
            <div className="text-center py-12">
              <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? 'No work centers found' : 'No work centers yet'}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ? 
                  'Try adjusting your search terms.' : 
                  'Get started by creating your first work center.'
                }
              </p>
              {!searchTerm && (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add Work Center
                </button>
              )}
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Work Center Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost per Hour
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Active Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredWorkCenters.map((workCenter) => (
                  <tr key={workCenter.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                         <Building2 className="w-5 h-5 text-gray-900 mr-3" />
                         <div>
                           <div className="text-sm font-medium text-gray-900">
                             {workCenter.name}
                           </div>
                         </div>
                       </div>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                         <span className="text-lg text-green-600 mr-1">₹</span>
                         <span className="text-sm font-medium text-gray-900">
                           {workCenter.costPerHour.toFixed(2)}
                         </span>
                         <span className="text-sm text-gray-500 ml-1">/hour</span>
                       </div>
                     </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {workCenter.workOrderCount} orders
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(workCenter.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </div>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}