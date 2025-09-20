'use client';

import { Settings, Plus, Search, Filter } from 'lucide-react';

export default function WorkCenterPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Settings className="w-8 h-8 text-blue-600" />
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>New Work Center</span>
        </button>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Center Coming Soon</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          This feature is under development. You'll be able to configure and manage 
          production work centers and their resources.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 max-w-lg mx-auto">
          <h4 className="font-medium text-blue-900 mb-2">Planned Features:</h4>
          <ul className="text-sm text-blue-700 space-y-1 text-left">
            <li>• Work center configuration</li>
            <li>• Capacity planning and scheduling</li>
            <li>• Resource allocation</li>
            <li>• Efficiency tracking</li>
            <li>• Maintenance scheduling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}