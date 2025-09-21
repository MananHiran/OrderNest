'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search, RefreshCw, Filter, TrendingUp, TrendingDown, Package, AlertTriangle, Plus } from 'lucide-react'
import NewLedgerEntryModal from '@/components/NewLedgerEntryModal'
import { toast } from 'sonner'

interface StockLedgerEntry {
  ledger_id: string;
  product_name: string;
  cost_per_unit: number;
  unit_of_measure: string;
  stock: number;
  total_value: number;
  free_to_use: number;
  incoming: number;
  outgoing: number;
  reference_id: string;
  created_at: string;
  creator: {
    user_id: string;
    name: string;
    email: string;
  };
}

export default function StockLedgerPage() {
  const [ledgerData, setLedgerData] = useState<StockLedgerEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<StockLedgerEntry[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch stock ledger data
  const fetchLedgerData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/stock-ledger');
      const result = await response.json();
      
      if (result.success) {
        setLedgerData(result.data);
        setFilteredData(result.data);
      } else {
        toast.error('Failed to fetch stock ledger data');
      }
    } catch (error) {
      console.error('Error fetching ledger data:', error);
      toast.error('Error loading stock ledger data');
    } finally {
      setLoading(false);
    }
  };

  const handleModalSuccess = () => {
    setIsModalOpen(false);
    toast.success('Stock ledger entry added successfully');
    fetchLedgerData(); // Refresh the data
  };

  useEffect(() => {
    fetchLedgerData();
  }, []);

  // Filter data based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData(ledgerData);
    } else {
      const filtered = ledgerData.filter(entry =>
        entry.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.reference_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, ledgerData]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Calculate summary statistics
  const totalValue = filteredData.reduce((sum, entry) => sum + entry.total_value, 0);
  const totalIncoming = filteredData.reduce((sum, entry) => sum + entry.incoming, 0);
  const totalOutgoing = filteredData.reduce((sum, entry) => sum + entry.outgoing, 0);

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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalValue)}</div>
            <p className="text-xs text-muted-foreground">
              Across {filteredData.length} products
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Incoming</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{totalIncoming.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              Units received
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Outgoing</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalOutgoing.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              Units consumed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search by product name or reference ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" onClick={fetchLedgerData} disabled={loading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Entry
        </Button>
      </div>

      {/* Stock Ledger Table */}
      <Card>
        <CardHeader>
          <CardTitle>Stock Ledger Entries</CardTitle>
          <CardDescription>
            Complete inventory movement history with product details
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600">Loading stock ledger data...</span>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Stock Entries Found</h3>
              <p className="text-gray-600">
                {searchTerm ? 'No entries match your search criteria.' : 'No stock ledger entries available.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Product Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Cost/Unit</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Unit</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">Stock</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">Total Value</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">Free to Use</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">Incoming</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">Outgoing</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Reference</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((entry) => (
                    <tr key={entry.ledger_id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{entry.product_name}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-gray-900">{formatCurrency(entry.cost_per_unit)}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary">{entry.unit_of_measure}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-medium">{entry.stock.toFixed(2)}</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-semibold text-green-600">{formatCurrency(entry.total_value)}</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-blue-600">{entry.free_to_use.toFixed(2)}</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {entry.incoming > 0 ? (
                          <span className="text-green-600 font-medium">+{entry.incoming.toFixed(2)}</span>
                        ) : (
                          <span className="text-gray-400">0</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {entry.outgoing > 0 ? (
                          <span className="text-red-600 font-medium">-{entry.outgoing.toFixed(2)}</span>
                        ) : (
                          <span className="text-gray-400">0</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-600">{entry.reference_id}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-600">{formatDate(entry.created_at)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <NewLedgerEntryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
}