import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Fetch all BOMs with their related product and component information
    const boms = await prisma.bOM.findMany({
      include: {
        product: {
          select: {
            product_id: true,
            product_name: true,
            type: true,
            unit_of_measure: true,
            current_stock: true,
            cost_per_unit: true
          }
        },
        components: {
          include: {
            component: {
              select: {
                product_id: true,
                product_name: true,
                type: true,
                unit_of_measure: true,
                current_stock: true,
                cost_per_unit: true
              }
            }
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    // Transform the data to match the expected format for the frontend
    const transformedBoms = boms.map(bom => ({
      id: bom.bom_id,
      name: bom.product.product_name,
      quantity: bom.components.reduce((total, comp) => total + comp.quantity_required, 0),
      unit: bom.product.unit_of_measure,
      cost: bom.components.reduce((total, comp) => 
        total + (comp.quantity_required * comp.component.cost_per_unit), 0
      ).toFixed(2),
      status: bom.product.current_stock > 0 ? 'In Stock' : 'Out of Stock',
      created_at: bom.created_at,
      product_id: bom.product_id,
      components: bom.components.map(comp => ({
        id: comp.component.product_id,
        name: comp.component.product_name,
        quantity: comp.quantity_required,
        unit: comp.component.unit_of_measure,
        cost: comp.component.cost_per_unit,
        total_cost: (comp.quantity_required * comp.component.cost_per_unit).toFixed(2)
      }))
    }));

    return NextResponse.json({
      success: true,
      data: transformedBoms,
      count: transformedBoms.length
    });

  } catch (error) {
    console.error('Error fetching BOMs:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch BOMs',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { product_id, components } = body;

    // Validate required fields
    if (!product_id || !components || !Array.isArray(components)) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: product_id and components array' },
        { status: 400 }
      );
    }

    // Create BOM with components in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the BOM
      const bom = await tx.bOM.create({
        data: {
          product_id: product_id
        }
      });

      // Create BOM components
      const bomComponents = await Promise.all(
        components.map((comp: any) =>
          tx.bOMComponent.create({
            data: {
              bom_id: bom.bom_id,
              component_id: comp.component_id,
              quantity_required: comp.quantity_required
            }
          })
        )
      );

      return { bom, components: bomComponents };
    });

    return NextResponse.json({
      success: true,
      data: result,
      message: 'BOM created successfully'
    });

  } catch (error) {
    console.error('Error creating BOM:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create BOM',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}