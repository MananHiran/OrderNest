import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all work centers
export async function GET() {
  try {
    const workCenters = await prisma.workCenter.findMany({
      orderBy: {
        name: 'asc'
      },
      include: {
        _count: {
          select: {
            work_orders: true
          }
        }
      }
    });

    // Transform data for frontend
    const transformedWorkCenters = workCenters.map(workCenter => ({
      id: workCenter.work_center_id,
      name: workCenter.name,
      costPerHour: workCenter.cost_per_hour,
      workOrderCount: workCenter._count.work_orders,
      createdAt: workCenter.created_at,
      updatedAt: workCenter.updated_at
    }));

    return NextResponse.json({
      success: true,
      data: transformedWorkCenters,
      count: transformedWorkCenters.length
    });

  } catch (error) {
    console.error('Error fetching work centers:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch work centers',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST - Create a new work center
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, costPerHour } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Work center name is required' },
        { status: 400 }
      );
    }

    if (!costPerHour || typeof costPerHour !== 'number' || costPerHour <= 0) {
      return NextResponse.json(
        { success: false, error: 'Valid cost per hour is required' },
        { status: 400 }
      );
    }

    // Check if work center with same name already exists
    const existingWorkCenter = await prisma.workCenter.findFirst({
      where: {
        name: {
          equals: name.trim(),
          mode: 'insensitive'
        }
      }
    });

    if (existingWorkCenter) {
      return NextResponse.json(
        { success: false, error: 'Work center with this name already exists' },
        { status: 409 }
      );
    }

    // Create new work center
    const newWorkCenter = await prisma.workCenter.create({
      data: {
        name: name.trim(),
        cost_per_hour: costPerHour
      }
    });

    // Transform response
    const transformedWorkCenter = {
      id: newWorkCenter.work_center_id,
      name: newWorkCenter.name,
      costPerHour: newWorkCenter.cost_per_hour,
      workOrderCount: 0,
      createdAt: newWorkCenter.created_at,
      updatedAt: newWorkCenter.updated_at
    };

    return NextResponse.json({
      success: true,
      data: transformedWorkCenter,
      message: 'Work center created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating work center:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create work center',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}