import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    const whereClause = type ? { type } : {};

    // Include BOM components for finished goods
    const includeClause = type === 'FINISHED_GOOD' ? {
      boms_as_product: {
        include: {
          components: {
            include: {
              component: {
                select: {
                  product_id: true,
                  product_name: true,
                  unit_of_measure: true,
                  current_stock: true
                }
              }
            }
          }
        }
      }
    } : {};

    const products = await prisma.product.findMany({
      where: whereClause,
      select: {
        product_id: true,
        product_name: true,
        type: true,
        unit_of_measure: true,
        current_stock: true,
        cost_per_unit: true,
        ...includeClause
      },
      orderBy: {
        product_name: 'asc'
      }
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { product_name, type, unit_of_measure, current_stock, cost_per_unit } = body;

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

    // Check if product name already exists
    const existingProduct = await prisma.product.findFirst({
      where: {
        product_name: product_name.trim()
      }
    });

    if (existingProduct) {
      return NextResponse.json(
        { error: 'A product with this name already exists' },
        { status: 409 }
      );
    }

    // Create the product
    const product = await prisma.product.create({
      data: {
        product_name: product_name.trim(),
        type,
        unit_of_measure,
        current_stock: parseFloat(current_stock),
        cost_per_unit: parseFloat(cost_per_unit)
      }
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
