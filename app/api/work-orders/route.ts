import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all work orders with related data
export async function GET() {
  try {
    const workOrders = await prisma.workOrder.findMany({
      include: {
        manufacturing_order: {
          include: {
            product: true,
            assignee: true
          }
        },
        assignee: true
      },
      orderBy: {
        started_at: 'desc'
      }
    });

    // Transform data for frontend
    const transformedWorkOrders = workOrders.map(workOrder => ({
      id: workOrder.wo_id,
      operation: workOrder.operation_name,
      workCenter: workOrder.work_center_id, // We'll need to join with work_centers table later
      productName: workOrder.manufacturing_order.product.product_name,
      plannedTime: workOrder.planned_time ? (workOrder.planned_time / 60).toFixed(2) : '0.00', // Convert minutes to hours
      actualTime: workOrder.actual_time ? (workOrder.actual_time / 60).toFixed(2) : '0.00', // Convert minutes to hours
      status: workOrder.status.toLowerCase().replace('_', ' '),
      startDate: workOrder.started_at ? workOrder.started_at.toISOString().split('T')[0] : null,
      assignedTo: workOrder.assignee ? workOrder.assignee.name : 'Unassigned',
      moId: workOrder.mo_id,
      completedAt: workOrder.completed_at
    }));

    return NextResponse.json({
      success: true,
      data: transformedWorkOrders,
      count: transformedWorkOrders.length
    });

  } catch (error) {
    console.error('Error fetching work orders:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch work orders',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST - Create a new work order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      mo_id, 
      operation_name, 
      work_center_id, 
      assigned_to, 
      planned_time, 
      comments 
    } = body;

    // Validate required fields
    if (!mo_id || !operation_name || !work_center_id) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: mo_id, operation_name, work_center_id' 
        },
        { status: 400 }
      );
    }

    const workOrder = await prisma.workOrder.create({
      data: {
        mo_id,
        operation_name,
        work_center_id,
        assigned_to: assigned_to || null,
        planned_time: planned_time || null,
        comments: comments || null,
        status: 'NOT_STARTED'
      },
      include: {
        manufacturing_order: {
          include: {
            product: true
          }
        },
        assignee: true
      }
    });

    // Transform the created work order
    const transformedWorkOrder = {
      id: workOrder.wo_id,
      operation: workOrder.operation_name,
      workCenter: workOrder.work_center_id,
      productName: workOrder.manufacturing_order.product.product_name,
      plannedTime: workOrder.planned_time ? (workOrder.planned_time / 60).toFixed(2) : '0.00',
      actualTime: '0.00',
      status: workOrder.status.toLowerCase().replace('_', ' '),
      startDate: workOrder.started_at ? workOrder.started_at.toISOString().split('T')[0] : null,
      assignedTo: workOrder.assignee ? workOrder.assignee.name : 'Unassigned',
      moId: workOrder.mo_id
    };

    return NextResponse.json({
      success: true,
      data: transformedWorkOrder,
      message: 'Work order created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating work order:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create work order',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}