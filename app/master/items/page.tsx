'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  AlertCircle,
  CheckCircle,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { isAuthenticated, getCurrentUser } from '@/lib/auth';

interface Product {
  product_id: string;
  product_name: string;
  type: 'RAW_MATERIAL' | 'FINISHED_GOOD' | 'SEMI_FINISHED';
  unit_of_measure: 'PCS' | 'KG' | 'LTR' | 'MT';
  current_stock: number;
  cost_per_unit: number;
  created_at: string;
  updated_at: string;
}

interface ProductFormData {
  product_name: string;
  type: 'RAW_MATERIAL' | 'FINISHED_GOOD';
  unit_of_measure: 'PCS' | 'KG' | 'LTR' | 'MT';
  current_stock: string;
  cost_per_unit: string;
}

interface FormErrors {
  product_name?: string;
  type?: string;
  unit_of_measure?: string;
  current_stock?: string;
  cost_per_unit?: string;
}

export default function ProductMasterPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState<ProductFormData>({
    product_name: '',
    type: 'RAW_MATERIAL',
    unit_of_measure: 'PCS',
    current_stock: '',
    cost_per_unit: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Check authentication on mount
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    fetchProducts();
  }, [router]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.product_name.trim()) {
      newErrors.product_name = 'Product name is required';
    } else if (formData.product_name.length < 2) {
      newErrors.product_name = 'Product name must be at least 2 characters';
    }

    if (!formData.type) {
      newErrors.type = 'Product type is required';
    }

    if (!formData.unit_of_measure) {
      newErrors.unit_of_measure = 'Unit of measure is required';
    }

    if (!formData.current_stock.trim()) {
      newErrors.current_stock = 'Current stock is required';
    } else {
      const stock = parseFloat(formData.current_stock);
      if (isNaN(stock) || stock < 0) {
        newErrors.current_stock = 'Current stock must be a valid positive number';
      }
    }

    if (!formData.cost_per_unit.trim()) {
      newErrors.cost_per_unit = 'Cost per unit is required';
    } else {
      const cost = parseFloat(formData.cost_per_unit);
      if (isNaN(cost) || cost <= 0) {
        newErrors.cost_per_unit = 'Cost per unit must be a valid positive number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the form errors');
      return;
    }

    try {
      setSubmitting(true);
      const currentUser = getCurrentUser();
      
      if (!currentUser) {
        toast.error('Please log in to continue');
        router.push('/login');
        return;
      }

      const submitData = {
        product_name: formData.product_name.trim(),
        type: formData.type,
        unit_of_measure: formData.unit_of_measure,
        current_stock: parseFloat(formData.current_stock),
        cost_per_unit: parseFloat(formData.cost_per_unit)
      };

      const url = editingProduct ? `/api/products/${editingProduct.product_id}` : '/api/products';
      const method = editingProduct ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save product');
      }

      toast.success(editingProduct ? 'Product updated successfully!' : 'Product created successfully!');
      resetForm();
      fetchProducts();
      setShowForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save product');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      product_name: '',
      type: 'RAW_MATERIAL',
      unit_of_measure: 'PCS',
      current_stock: '',
      cost_per_unit: ''
    });
    setErrors({});
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      product_name: product.product_name,
      type: product.type === 'SEMI_FINISHED' ? 'FINISHED_GOOD' : product.type,
      unit_of_measure: product.unit_of_measure,
      current_stock: product.current_stock.toString(),
      cost_per_unit: product.cost_per_unit.toString()
    });
    setShowForm(true);
  };

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete product');
      }

      toast.success('Product deleted successfully!');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to delete product');
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || product.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'RAW_MATERIAL':
        return 'bg-blue-100 text-blue-800';
      case 'FINISHED_GOOD':
        return 'bg-green-100 text-green-800';
      case 'SEMI_FINISHED':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'RAW_MATERIAL':
        return 'Raw Material';
      case 'FINISHED_GOOD':
        return 'Finished Good';
      case 'SEMI_FINISHED':
        return 'Semi-Finished';
      default:
        return type;
    }
  };

  const getUnitLabel = (unit: string) => {
    switch (unit) {
      case 'PCS':
        return 'Pieces';
      case 'KG':
        return 'Kilograms';
      case 'LTR':
        return 'Liters';
      case 'MT':
        return 'Metric Tons';
      default:
        return unit;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
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
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Package className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Product Master</h2>
              </div>
              <p className="text-gray-600">Manage your product catalog and inventory items</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={fetchProducts}
                disabled={loading}
                className="flex items-center space-x-2"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </Button>
              <Button
                onClick={() => {
                  resetForm();
                  setEditingProduct(null);
                  setShowForm(true);
                }}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Entry Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{editingProduct ? 'Edit Product' : 'Add New Product'}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setShowForm(false);
                      setEditingProduct(null);
                      resetForm();
                    }}
                  >
                    ×
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Name */}
                    <div>
                      <Label htmlFor="product_name">Product Name *</Label>
                      <Input
                        id="product_name"
                        value={formData.product_name}
                        onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                        className={errors.product_name ? 'border-red-500' : ''}
                        placeholder="Enter product name"
                      />
                      {errors.product_name && (
                        <p className="text-sm text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.product_name}
                        </p>
                      )}
                    </div>

                    {/* Product Type */}
                    <div>
                      <Label htmlFor="type">Product Type *</Label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value as 'RAW_MATERIAL' | 'FINISHED_GOOD' })}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.type ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="RAW_MATERIAL">Raw Materials</option>
                        <option value="FINISHED_GOOD">Finished Goods</option>
                      </select>
                      {errors.type && (
                        <p className="text-sm text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.type}
                        </p>
                      )}
                    </div>

                    {/* Unit of Measure */}
                    <div>
                      <Label htmlFor="unit_of_measure">Unit of Measure *</Label>
                      <select
                        id="unit_of_measure"
                        value={formData.unit_of_measure}
                        onChange={(e) => setFormData({ ...formData, unit_of_measure: e.target.value as 'PCS' | 'KG' | 'LTR' | 'MT' })}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.unit_of_measure ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="PCS">pcs (Pieces)</option>
                        <option value="KG">kg (Kilograms)</option>
                        <option value="LTR">ltr (Liters)</option>
                        <option value="MT">mt (Metric Tons)</option>
                      </select>
                      {errors.unit_of_measure && (
                        <p className="text-sm text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.unit_of_measure}
                        </p>
                      )}
                    </div>

                    {/* Current Stock */}
                    <div>
                      <Label htmlFor="current_stock">Current Stock *</Label>
                      <Input
                        id="current_stock"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.current_stock}
                        onChange={(e) => setFormData({ ...formData, current_stock: e.target.value })}
                        className={errors.current_stock ? 'border-red-500' : ''}
                        placeholder="0.00"
                      />
                      {errors.current_stock && (
                        <p className="text-sm text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.current_stock}
                        </p>
                      )}
                    </div>

                    {/* Cost Per Unit */}
                    <div className="md:col-span-2">
                      <Label htmlFor="cost_per_unit">Cost Per Unit *</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <Input
                          id="cost_per_unit"
                          type="number"
                          step="0.01"
                          min="0.01"
                          value={formData.cost_per_unit}
                          onChange={(e) => setFormData({ ...formData, cost_per_unit: e.target.value })}
                          className={`pl-8 ${errors.cost_per_unit ? 'border-red-500' : ''}`}
                          placeholder="0.00"
                        />
                      </div>
                      {errors.cost_per_unit && (
                        <p className="text-sm text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.cost_per_unit}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center justify-end space-x-3 pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowForm(false);
                        setEditingProduct(null);
                        resetForm();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="flex items-center space-x-2"
                    >
                      {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                      <span>{editingProduct ? 'Update Product' : 'Create Product'}</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-3">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="RAW_MATERIAL">Raw Materials</option>
                <option value="FINISHED_GOOD">Finished Goods</option>
                <option value="SEMI_FINISHED">Semi-Finished</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading products...</span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || typeFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.' 
                : 'Get started by adding your first product.'}
            </p>
            {!searchTerm && typeFilter === 'all' && (
              <Button
                onClick={() => {
                  resetForm();
                  setEditingProduct(null);
                  setShowForm(true);
                }}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add First Product</span>
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.product_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {product.product_name}
                    </h3>
                    <Badge className={getTypeColor(product.type)}>
                      {getTypeLabel(product.type)}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(product.product_id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Stock:</span>
                    <span className="font-medium">
                      {product.current_stock.toFixed(2)} {product.unit_of_measure.toLowerCase()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cost per Unit:</span>
                    <span className="font-medium text-green-600">
                      {formatCurrency(product.cost_per_unit)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Value:</span>
                    <span className="font-semibold text-blue-600">
                      {formatCurrency(product.current_stock * product.cost_per_unit)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Unit:</span>
                    <span className="text-sm">
                      {getUnitLabel(product.unit_of_measure)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Created: {new Date(product.created_at).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Summary Stats */}
        {!loading && products.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{products.length}</div>
                <div className="text-sm text-gray-600">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {products.filter(p => p.type === 'RAW_MATERIAL').length}
                </div>
                <div className="text-sm text-gray-600">Raw Materials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {products.filter(p => p.type === 'FINISHED_GOOD').length}
                </div>
                <div className="text-sm text-gray-600">Finished Goods</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {formatCurrency(products.reduce((sum, p) => sum + (p.current_stock * p.cost_per_unit), 0))}
                </div>
                <div className="text-sm text-gray-600">Total Value</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}