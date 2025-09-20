"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Factory, Loader2, RefreshCw, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewManufacturingOrderModal } from "@/components/NewManufacturingOrderModal";
import { isAuthenticated, getCurrentUser, logout } from "@/lib/auth";

interface ManufacturingOrder {
  mo_id: string;
  product_id: string;
  quantity: number;
  status: string;
  state: string;
  scheduled_start: string | null;
  scheduled_end: string | null;
  actual_start: string | null;
  actual_end: string | null;
  created_at: string;
  updated_at: string;
  product: {
    product_name: string;
    unit_of_measure: string;
    type: string;
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const [manufacturingOrders, setManufacturingOrders] = useState<ManufacturingOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const fetchManufacturingOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/manufacturing-orders');
      
      if (!response.ok) {
        throw new Error('Failed to fetch manufacturing orders');
      }
      
      const data = await response.json();
      setManufacturingOrders(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching manufacturing orders:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    
    // Get current user
    const currentUser = getCurrentUser();
    setUser(currentUser);
    
    // Fetch manufacturing orders
    fetchManufacturingOrders();
  }, [router]);

  const handleCreateOrder = async (orderData: any) => {
    try {
      console.log('Creating manufacturing order:', orderData);
      
      // Get current user for created_by field
      const currentUser = getCurrentUser();
      if (!currentUser) {
        throw new Error('User not authenticated');
      }

      // Prepare the order data for API
      const apiOrderData = {
        product_id: orderData.product_id,
        quantity: orderData.quantity,
        scheduled_start: orderData.scheduled_start,
        scheduled_end: orderData.scheduled_end,
        created_by: currentUser.user_id,
        assigned_to: orderData.assigned_to || null,
        component_consumptions: orderData.component_consumptions || []
      };

      // Call the API to create the order
      const response = await fetch('/api/manufacturing-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiOrderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create manufacturing order');
      }

      const newOrder = await response.json();
      console.log('Manufacturing order created successfully:', newOrder);
      
      // Refresh the orders list
      await fetchManufacturingOrders();
      
      alert('Manufacturing order created successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      alert(`Failed to create manufacturing order: ${error instanceof Error ? error.message : 'Please try again.'}`);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'to_close':
      case 'to-close':
        return 'bg-orange-100 text-orange-800';
      case 'done':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStateBadgeColor = (state: string) => {
    switch (state.toLowerCase()) {
      case 'avaliable':
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'not_avaliable':
      case 'not_available':
      case 'not-available':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="bg-black rounded-xl p-3">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">OrderNest</h1>
              </div>
              <p className="text-gray-600">Manufacturing ERP Dashboard</p>
            </motion.div>
            
            {/* User Info and Logout */}
            {user && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-4"
              >
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role.replace('_', ' ')}</p>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Logout
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Title and Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Manufacturing Orders</h2>
            <p className="text-gray-600 mt-1">
              Manage and track your production orders
            </p>
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={fetchManufacturingOrders}
              variant="outline"
              size="default"
              disabled={loading}
              className="flex items-center space-x-2"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              <span>Refresh</span>
            </Button>
            <Button
              variant="default"
              size="default"
              className="flex items-center space-x-2"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="w-4 h-4" />
              <span>New Order</span>
            </Button>
          </div>
        </motion.div>

        {/* Manufacturing Orders Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm border overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Loading manufacturing orders...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="text-red-500 mb-4">
                  <Factory className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-red-600 mb-4">{error}</p>
                <Button
                  onClick={fetchManufacturingOrders}
                  variant="outline"
                  size="default"
                  className=""
                >
                  Try Again
                </Button>
              </div>
            </div>
          ) : manufacturingOrders.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Factory className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No manufacturing orders found</p>
                <p className="text-sm text-gray-500">Create your first manufacturing order to get started</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      State
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {manufacturingOrders.map((order, index) => (
                    <motion.tr
                      key={order.mo_id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.mo_id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatDate(order.scheduled_start || order.created_at)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.product.product_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.product.type.replace('_', ' ')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(order.status)}`}>
                          {order.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.quantity.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.product.unit_of_measure}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStateBadgeColor(order.state)}`}>
                          {order.state.replace('_', ' ').replace('Not_Available', 'Not Available')}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Summary Stats */}
        {manufacturingOrders.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="text-sm font-medium text-gray-600">Total Orders</div>
              <div className="text-2xl font-bold text-gray-900">{manufacturingOrders.length}</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="text-sm font-medium text-gray-600">In Progress</div>
              <div className="text-2xl font-bold text-yellow-600">
                {manufacturingOrders.filter(order => order.status.toLowerCase() === 'in_progress').length}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="text-sm font-medium text-gray-600">Completed</div>
              <div className="text-2xl font-bold text-green-600">
                {manufacturingOrders.filter(order => order.status.toLowerCase() === 'done').length}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="text-sm font-medium text-gray-600">Draft</div>
              <div className="text-2xl font-bold text-gray-600">
                {manufacturingOrders.filter(order => order.status.toLowerCase() === 'draft').length}
              </div>
            </div>
          </motion.div>
        )}

        {/* New Manufacturing Order Modal */}
        <NewManufacturingOrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateOrder}
        />
      </main>
    </div>
  );
}