'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Package, 
  ClipboardList, 
  FileText, 
  Settings, 
  BarChart3,
  Menu,
  X,
  User,
  Database
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    // Get user data from localStorage or API
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Default user data if not found
      setUser({
        name: 'John Doe',
        email: 'john.doe@ordernest.com',
        avatar: null
      });
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: 'Master Menu',
      href: '/dashboard',
      icon: Home,
      description: 'Dashboard Overview'
    },
    {
      name: 'Product Master Page',
      href: '/master/items',
      icon: Database,
      description: 'Manage Products & Items'
    },
    {
      name: 'Manufacturing Orders',
      href: '/manufacturing-orders',
      icon: Package,
      description: 'Manage Production Orders'
    },
    {
      name: 'Work Orders',
      href: '/work-orders',
      icon: ClipboardList,
      description: 'Track Work Progress'
    },
    {
      name: 'Bill of Materials',
      href: '/bill-of-materials',
      icon: FileText,
      description: 'Product Components'
    },
    {
      name: 'Work Center',
      href: '/work-center',
      icon: Settings,
      description: 'Production Centers'
    },
    {
      name: 'Stock Ledger',
      href: '/stock-ledger',
      icon: BarChart3,
      description: 'Inventory Tracking'
    }
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">OrderNest</h1>
              <p className="text-sm text-gray-300">Manufacturing ERP</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 mx-1 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-black border-l-4 border-white shadow-sm'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-sm'
                }`}
              >
                <Icon 
                  size={18} 
                  className={`flex-shrink-0 ${
                    isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-300'
                  }`} 
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{item.name}</div>
                  <div className="text-xs text-gray-400 truncate">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-gray-700 p-3">
          <div className="flex items-center space-x-3 p-2.5 mx-1 rounded-lg bg-gray-800">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="w-9 h-9 rounded-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-black" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white text-sm truncate">
                {user?.name || 'Loading...'}
              </div>
              <div className="text-xs text-gray-400 truncate">
                {user?.email || 'Loading...'}
              </div>
            </div>
          </div>
          
          {/* Profile Actions */}
          <div className="mt-2 space-y-0.5">
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mx-1 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-200"
            >
              View Profile
            </Link>
            <Link
              href="/settings"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mx-1 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-200"
            >
              Settings
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('user');
                window.location.href = '/login';
              }}
              className="block w-full text-left px-3 py-2 mx-1 text-sm text-red-400 hover:bg-red-900 hover:text-red-300 rounded-lg transition-all duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;