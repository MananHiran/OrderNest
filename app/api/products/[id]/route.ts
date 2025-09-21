import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch a single product by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const product = await prisma.product.findUnique({
      where: {
        product_id: id
      }
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT - Update a product
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { product_name, type, unit_of_measure, current_stock, cost_per_unit } = body;

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: {
        product_id: id
      }
    });

    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Validation
    if (!product_name || !product_name.trim()) {
      return NextResponse.json(
        { error: 'Product name is required' },
        { status: 400 }
      );
    }

    if (!type || !['RAW_MATERIAL', 'FINISHED_GOOD'].includes(type)) {
      return NextResponse.json(
        { error: 'Valid product type is required (RAW_MATERIAL or FINISHED_GOOD)' },
        { status: 400 }
      );
    }

    if (!unit_of_measure || !['PCS', 'KG', 'LTR', 'MT'].includes(unit_of_measure)) {
      return NextResponse.json(
        { error: 'Valid unit of measure is required (PCS, KG, LTR, or MT)' },
        { status: 400 }
      );
    }

    if (current_stock === undefined || current_stock === null || isNaN(parseFloat(current_stock)) || parseFloat(current_stock) < 0) {
      return NextResponse.json(
        { error: 'Valid current stock is required (must be a positive number)' },
        { status: 400 }
      );
    }

    if (cost_per_unit === undefined || cost_per_unit === null || isNaN(parseFloat(cost_per_unit)) || parseFloat(cost_per_unit) <= 0) {
      return NextResponse.json(
        { error: 'Valid cost per unit is required (must be a positive number)' },
        { status: 400 }
      );
    }

    // Check if product name already exists (excluding current product)
    const duplicateProduct = await prisma.product.findFirst({
      where: {
        product_name: product_name.trim(),
        product_id: {
          not: id
        }
      }
    });

    if (duplicateProduct) {
      return NextResponse.json(
        { error: 'A product with this name already exists' },
        { status: 409 }
      );
    }

    // Update the product
    const updatedProduct = await prisma.product.update({
      where: {
        product_id: id
      },
      data: {
        product_name: product_name.trim(),
        type,
        unit_of_measure,
        current_stock: parseFloat(current_stock),
        cost_per_unit: parseFloat(cost_per_unit)
      }
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a product
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: {
        product_id: id
      }
    });

    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Check if product is used in any BOMs
    const bomUsage = await prisma.bOMComponent.findFirst({
      where: {
        component_id: id
      }
    });

    if (bomUsage) {
      return NextResponse.json(
        { error: 'Cannot delete product as it is used in Bill of Materials' },
        { status: 409 }
      );
    }

    // Check if product has any manufacturing orders
    const moUsage = await prisma.manufacturingOrder.findFirst({
      where: {
        product_id: id
      }
    });

    if (moUsage) {
      return NextResponse.json(
        { error: 'Cannot delete product as it has associated manufacturing orders' },
        { status: 409 }
      );
    }

    // Check if product has any stock ledger entries
    const stockLedgerUsage = await prisma.stockLedger.findFirst({
      where: {
        product_id: id
      }
    });

    if (stockLedgerUsage) {
      return NextResponse.json(
        { error: 'Cannot delete product as it has stock ledger entries' },
        { status: 409 }
      );
    }

    // Delete the product
    await prisma.product.delete({
      where: {
        product_id: id
      }
    });

    return NextResponse.json(
      { message: 'Product deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}