'use client';

import { Database, Users, Package, Settings, FileText, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function MasterPage() {
  const masterModules = [
    {
      title: 'Items',
      description: 'Manage product catalog and item master data',
      icon: Package,
      href: '/master/items',
      color: 'bg-blue-500',
    },
    {
      title: 'Customers',
      description: 'Customer information and contact details',
      icon: Users,
      href: '/master/customers',
      color: 'bg-green-500',
    },
    {
      title: 'Suppliers',
      description: 'Vendor and supplier management',
      icon: FileText,
      href: '/master/suppliers',
      color: 'bg-purple-500',
    },
    {
      title: 'Warehouses',
      description: 'Storage locations and warehouse setup',
      icon: Database,
      href: '/master/warehouses',
      color: 'bg-orange-500',
    },
    {
      title: 'Units of Measure',
      description: 'Define measurement units and conversions',
      icon: Settings,
      href: '/master/uom',
      color: 'bg-red-500',
    },
    {
      title: 'Operations',
      description: 'Manufacturing operations and routing',
      icon: Wrench,
      href: '/master/operations',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Database className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Master Data</h1>
        </div>
        <p className="text-gray-600">Configure and manage core business data</p>
      </div>

      {/* Master Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {masterModules.map((module) => {
          const IconComponent = module.icon;
          return (
            <Link
              key={module.title}
              href={module.href}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`${module.color} p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Master Data Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">0</div>
            <div className="text-sm text-gray-600">Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-600">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-sm text-gray-600">Suppliers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">0</div>
            <div className="text-sm text-gray-600">Warehouses</div>
          </div>
        </div>
      </div>
    </div>
  );
}