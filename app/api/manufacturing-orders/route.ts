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
      assigned_to,
      component_consumptions
    } = body;

    // Validation
    if (!product_id || !quantity || !created_by) {
      return NextResponse.json(
        { error: 'Product ID, quantity, and created_by are required' },
        { status: 400 }
      );
    }

    // Use a transaction to ensure both manufacturing order and component consumptions are created together
    const result = await prisma.$transaction(async (tx) => {
      // Determine status and state based on component availability
      let orderStatus = 'DRAFT';
      let orderState = 'Not_Available';
      
      if (component_consumptions && Array.isArray(component_consumptions) && component_consumptions.length > 0) {
        // Check if all components are available (all flags are true)
        const allComponentsAvailable = component_consumptions.every(consumption => Boolean(consumption.flag));
        
        if (allComponentsAvailable) {
          orderStatus = 'CONFIRMED';
          orderState = 'Available';
        } else {
          orderStatus = 'DRAFT';
          orderState = 'Not_Available';
        }
      }

      // Create the manufacturing order with conditional status and state
      const newOrder = await tx.manufacturingOrder.create({
        data: {
          product_id,
          quantity: parseFloat(quantity),
          status: orderStatus,
          state: orderState,
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

      // Create component consumption records if provided
      if (component_consumptions && Array.isArray(component_consumptions) && component_consumptions.length > 0) {
        const componentConsumptionData = component_consumptions.map(consumption => ({
          mo_id: newOrder.mo_id,
          product_id: consumption.product_id,
          product_name: consumption.product_name,
          consumption_quantity: parseFloat(consumption.consumption_quantity),
          flag: Boolean(consumption.flag) // true if available, false if needs restock
        }));

        await tx.componentConsumption.createMany({
          data: componentConsumptionData
        });
      }

      return newOrder;
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating manufacturing order:', error);
    return NextResponse.json(
      { error: 'Failed to create manufacturing order' },
      { status: 500 }
    );
  }
}