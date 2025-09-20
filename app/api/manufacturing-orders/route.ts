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
            type: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(manufacturingOrders, { status: 200 });
  } catch (error) {
    console.error('Error fetching manufacturing orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch manufacturing orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      product_id, 
      quantity, 
      scheduled_start, 
      scheduled_end,
      created_by,
      assigned_to 
    } = body;

    // Validation
    if (!product_id || !quantity || !created_by) {
      return NextResponse.json(
        { error: 'Product ID, quantity, and created_by are required' },
        { status: 400 }
      );
    }

    const newOrder = await prisma.manufacturingOrder.create({
      data: {
        product_id,
        quantity: parseFloat(quantity),
        scheduled_start: scheduled_start ? new Date(scheduled_start) : null,
        scheduled_end: scheduled_end ? new Date(scheduled_end) : null,
        created_by,
        assigned_to: assigned_to || null,
      },
      include: {
        product: {
          select: {
            product_name: true,
            unit_of_measure: true,
            type: true
          }
        }
      }
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error('Error creating manufacturing order:', error);
    return NextResponse.json(
      { error: 'Failed to create manufacturing order' },
      { status: 500 }
    );
  }
}