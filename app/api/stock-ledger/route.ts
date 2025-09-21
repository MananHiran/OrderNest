import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Fetch stock ledger data with product and creator information
    const stockLedger = await prisma.stockLedger.findMany({
      include: {
        product: {
          select: {
            product_name: true,
            cost_per_unit: true,
            unit_of_measure: true,
            current_stock: true,
          },
        },
        creator: {
          select: {
            user_id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    // Transform the data to include calculated values and flatten structure
    const transformedData = stockLedger.map((ledger) => ({
      ledger_id: ledger.ledger_id,
      product_name: ledger.product.product_name,
      cost_per_unit: ledger.product.cost_per_unit,
      unit_of_measure: ledger.product.unit_of_measure,
      stock: ledger.product.current_stock,
      total_value: ledger.product.current_stock * ledger.product.cost_per_unit,
      free_to_use: ledger.free_to_use,
      incoming: ledger.incoming,
      outgoing: ledger.outgoing,
      reference_id: ledger.reference_id,
      created_at: ledger.created_at,
      creator: ledger.creator,
    }));

    return NextResponse.json({
      success: true,
      data: transformedData,
      count: transformedData.length,
    });
  } catch (error) {
    console.error('Error fetching stock ledger:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch stock ledger data',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      product_id,
      incoming = 0,
      outgoing = 0,
      free_to_use = 0,
      reference_id,
      created_by,
    } = body;

    // Validate required fields
    if (!product_id || !reference_id || !created_by) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: product_id, reference_id, and created_by are required',
        },
        { status: 400 }
      );
    }

    // Verify product exists
    const product = await prisma.product.findUnique({
      where: { product_id },
    });

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: 'Product not found',
        },
        { status: 404 }
      );
    }

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { user_id: created_by },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: 'User not found',
        },
        { status: 404 }
      );
    }

    // Create new stock ledger entry
    const newEntry = await prisma.stockLedger.create({
      data: {
        product_id,
        incoming,
        outgoing,
        free_to_use,
        reference_id,
        created_by,
      },
      include: {
        product: {
          select: {
            product_name: true,
            cost_per_unit: true,
            unit_of_measure: true,
            current_stock: true,
          },
        },
        creator: {
          select: {
            user_id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Update product stock if there are incoming/outgoing movements
    if (incoming > 0 || outgoing > 0) {
      const stockChange = incoming - outgoing;
      await prisma.product.update({
        where: { product_id },
        data: {
          current_stock: {
            increment: stockChange,
          },
        },
      });
    }

    // Transform the response data
    const transformedEntry = {
      ledger_id: newEntry.ledger_id,
      product_name: newEntry.product.product_name,
      cost_per_unit: newEntry.product.cost_per_unit,
      unit_of_measure: newEntry.product.unit_of_measure,
      stock: newEntry.product.current_stock,
      total_value: newEntry.product.current_stock * newEntry.product.cost_per_unit,
      free_to_use: newEntry.free_to_use,
      incoming: newEntry.incoming,
      outgoing: newEntry.outgoing,
      reference_id: newEntry.reference_id,
      created_at: newEntry.created_at,
      creator: newEntry.creator,
    };

    return NextResponse.json({
      success: true,
      data: transformedEntry,
      message: 'Stock ledger entry created successfully',
    });
  } catch (error) {
    console.error('Error creating stock ledger entry:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create stock ledger entry',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}