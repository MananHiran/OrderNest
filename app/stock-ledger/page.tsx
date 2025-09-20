'use client';

import { Package, Plus, Search, Filter } from 'lucide-react';

export default function StockLedgerPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Package className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Stock Ledger</h1>
        </div>
        <p className="text-gray-600">Track inventory movements and stock levels</p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search stock entries..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>New Entry</span>
        </button>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Stock Ledger Coming Soon</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          This feature is under development. You'll be able to track all inventory 
          movements and maintain accurate stock records.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 max-w-lg mx-auto">
          <h4 className="font-medium text-blue-900 mb-2">Planned Features:</h4>
          <ul className="text-sm text-blue-700 space-y-1 text-left">
            <li>• Real-time stock tracking</li>
            <li>• Inventory movement history</li>
            <li>• Stock valuation methods</li>
            <li>• Low stock alerts</li>
            <li>• Batch and serial number tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}