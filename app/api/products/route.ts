import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    const whereClause = type ? { type } : {};

    const products = await prisma.product.findMany({
      where: whereClause,
      select: {
        product_id: true,
        product_name: true,
        type: true,
        unit_of_measure: true,
        current_stock: true,
        cost_per_unit: true
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
