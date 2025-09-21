'use client'

import { useState, useEffect } from 'react'
import { Modal, ModalFooter } from '@/components/ui/modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'

interface Product {
  product_id: string
  product_name: string
  cost_per_unit: number
  unit_of_measure: string
  current_stock: number
}

interface ManufacturingOrder {
  mo_id: string
  product: {
    product_name: string
  }
  status: string
  created_at: string
}

interface NewLedgerEntryModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function NewLedgerEntryModal({ isOpen, onClose, onSuccess }: NewLedgerEntryModalProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [manufacturingOrders, setManufacturingOrders] = useState<ManufacturingOrder[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Form state
  const [selectedProductId, setSelectedProductId] = useState('')
  const [costPerUnit, setCostPerUnit] = useState(0)
  const [unitOfMeasure, setUnitOfMeasure] = useState('')
  const [onHand, setOnHand] = useState('')
  const [totalValue, setTotalValue] = useState(0)
  const [freeToUse, setFreeToUse] = useState('')
  const [incoming, setIncoming] = useState('')
  const [outgoing, setOutgoing] = useState('')
  const [reference, setReference] = useState('')

  // Fetch products and manufacturing orders when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchData()
    }
  }, [isOpen])

  // Auto-calculate total value when onHand or costPerUnit changes
  useEffect(() => {
    const onHandNum = parseFloat(onHand) || 0
    setTotalValue(onHandNum * costPerUnit)
  }, [onHand, costPerUnit])

  const fetchData = async () => {
    setLoading(true)
    setError('')
    
    try {
      // Fetch products
      const productsResponse = await fetch('/api/products')
      if (!productsResponse.ok) throw new Error('Failed to fetch products')
      const productsData = await productsResponse.json()
      setProducts(productsData)

      // Fetch manufacturing orders
      const moResponse = await fetch('/api/manufacturing-orders')
      if (!moResponse.ok) throw new Error('Failed to fetch manufacturing orders')
      const moData = await moResponse.json()
      setManufacturingOrders(moData)
    } catch (err) {
      setError('Failed to load data. Please try again.')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId)
    const selectedProduct = products.find(p => p.product_id === productId)
    if (selectedProduct) {
      setCostPerUnit(selectedProduct.cost_per_unit)
      setUnitOfMeasure(selectedProduct.unit_of_measure)
    }
  }

  const resetForm = () => {
    setSelectedProductId('')
    setCostPerUnit(0)
    setUnitOfMeasure('')
    setOnHand('')
    setTotalValue(0)
    setFreeToUse('')
    setIncoming('')
    setOutgoing('')
    setReference('')
    setError('')
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    // Validation
    if (!selectedProductId) {
      setError('Please select a product')
      setSubmitting(false)
      return
    }

    if (!onHand || parseFloat(onHand) < 0) {
      setError('Please enter a valid On Hand quantity')
      setSubmitting(false)
      return
    }

    try {
      // Get current user for created_by field
      const currentUser = getCurrentUser()
      if (!currentUser) {
        setError('User not authenticated')
        setSubmitting(false)
        return
      }

      const response = await fetch('/api/stock-ledger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: selectedProductId,
          incoming: parseFloat(incoming) || 0,
          outgoing: parseFloat(outgoing) || 0,
          free_to_use: parseFloat(freeToUse) || 0,
          reference_id: reference || `MANUAL-${Date.now()}`,
          created_by: currentUser.user_id,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create ledger entry')
      }

      // Success
      onSuccess()
      handleClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create ledger entry')
    } finally {
      setSubmitting(false)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add New Ledger Entry" size="default">
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="ml-2">Loading data...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Product Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="product">Product *</Label>
              <Select value={selectedProductId} onValueChange={handleProductChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.product_id} value={product.product_id}>
                      {product.product_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Cost per Unit (Auto-populated) */}
            <div className="space-y-2">
              <Label htmlFor="costPerUnit">Cost per Unit</Label>
              <Input
                id="costPerUnit"
                type="text"
                value={formatCurrency(costPerUnit)}
                disabled
                className="bg-gray-50"
              />
            </div>

            {/* Unit of Measure (Auto-populated) */}
            <div className="space-y-2">
              <Label htmlFor="unitOfMeasure">Unit of Measure</Label>
              <Input
                id="unitOfMeasure"
                type="text"
                value={unitOfMeasure}
                disabled
                className="bg-gray-50"
              />
            </div>

            {/* On Hand */}
            <div className="space-y-2">
              <Label htmlFor="onHand">On Hand *</Label>
              <Input
                id="onHand"
                type="number"
                step="0.01"
                min="0"
                value={onHand}
                onChange={(e) => setOnHand(e.target.value)}
                placeholder="Enter quantity on hand"
                required
              />
            </div>

            {/* Total Value (Auto-calculated) */}
            <div className="space-y-2">
              <Label htmlFor="totalValue">Total Value</Label>
              <Input
                id="totalValue"
                type="text"
                value={formatCurrency(totalValue)}
                disabled
                className="bg-gray-50"
              />
            </div>

            {/* Free to Use */}
            <div className="space-y-2">
              <Label htmlFor="freeToUse">Free to Use</Label>
              <Input
                id="freeToUse"
                type="number"
                step="0.01"
                min="0"
                value={freeToUse}
                onChange={(e) => setFreeToUse(e.target.value)}
                placeholder="Enter free to use quantity"
              />
            </div>

            {/* Incoming */}
            <div className="space-y-2">
              <Label htmlFor="incoming">Incoming</Label>
              <Input
                id="incoming"
                type="number"
                step="0.01"
                min="0"
                value={incoming}
                onChange={(e) => setIncoming(e.target.value)}
                placeholder="Enter incoming quantity"
              />
            </div>

            {/* Outgoing */}
            <div className="space-y-2">
              <Label htmlFor="outgoing">Outgoing</Label>
              <Input
                id="outgoing"
                type="number"
                step="0.01"
                min="0"
                value={outgoing}
                onChange={(e) => setOutgoing(e.target.value)}
                placeholder="Enter outgoing quantity"
              />
            </div>

            {/* Reference (Manufacturing Order) */}
            <div className="space-y-2">
              <Label htmlFor="reference">Reference (Manufacturing Order)</Label>
              <Select value={reference} onValueChange={setReference}>
                <SelectTrigger>
                  <SelectValue placeholder="Select manufacturing order (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {manufacturingOrders.map((mo) => (
                    <SelectItem key={mo.mo_id} value={mo.mo_id}>
                      MO-{mo.mo_id.slice(-6)} - {mo.product.product_name} ({mo.status})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          <ModalFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Creating...
                </>
              ) : (
                'Create Entry'
              )}
            </Button>
          </ModalFooter>
        </form>
      )}
    </Modal>
  )
}