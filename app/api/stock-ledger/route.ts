import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Fetch all stock ledger entries
export async function GET() {
  try {
    const stockLedgerEntries = await prisma.stockLedger.findMany({
      include: {
        product: {
          select: {
            product_id: true,
            product_name: true,
            product_code: true,
          }
        },
        creator: {
          select: {
            user_id: true,
            username: true,
            email: true,
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(stockLedgerEntries);
  } catch (error) {
    console.error('Error fetching stock ledger entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stock ledger entries' },
      { status: 500 }
    );
  }
}

// POST - Create a new stock ledger entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      product_id,
      incoming = 0,
      outgoing = 0,
      free_to_use = 0,
      reference_id,
      created_by
    } = body;

    // Validate required fields
    if (!product_id || !reference_id || !created_by) {
      return NextResponse.json(
        { error: 'Missing required fields: product_id, reference_id, and created_by are required' },
        { status: 400 }
      );
    }

    // Verify that the product exists
    const product = await prisma.product.findUnique({
      where: { product_id }
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Verify that the user exists
    const user = await prisma.user.findUnique({
      where: { user_id: created_by }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Create the stock ledger entry
    const stockLedgerEntry = await prisma.stockLedger.create({
      data: {
        product_id,
        incoming: parseFloat(incoming.toString()),
        outgoing: parseFloat(outgoing.toString()),
        free_to_use: parseFloat(free_to_use.toString()),
        reference_id,
        created_by
      },
      include: {
        product: {
          select: {
            product_id: true,
            product_name: true,
            product_code: true,
          }
        },
        creator: {
          select: {
            user_id: true,
            username: true,
            email: true,
          }
        }
      }
    });

    return NextResponse.json(stockLedgerEntry, { status: 201 });
  } catch (error) {
    console.error('Error creating stock ledger entry:', error);
    return NextResponse.json(
      { error: 'Failed to create stock ledger entry' },
      { status: 500 }
    );
  }
}