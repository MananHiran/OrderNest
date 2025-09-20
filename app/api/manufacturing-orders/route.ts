import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const manufacturingOrders = await prisma.manufacturingOrder.findMany({
      include: {
        product: {
          select: {
            product_name: true,
            unit_of_measure: true,
            type: true,
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    // Transform the data to match the required format
    const formattedOrders = manufacturingOrders.map(order => ({
      id: order.mo_id,
      startDate: order.scheduled_start || order.created_at,
      productName: order.product.product_name,
      status: order.state,
      quantity: order.quantity,
      unit: order.product.unit_of_measure,
      state: order.state,
      productType: order.product.type
    }));

    return NextResponse.json(formattedOrders, { status: 200 });

  } catch (error) {
    console.error('Error fetching manufacturing orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch manufacturing orders' },
      { status: 500 }
    );
  }
}