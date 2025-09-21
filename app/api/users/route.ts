import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { validateAdminAccess, createUnauthorizedResponse } from '@/lib/auth';

// GET /api/users - Get all users with optional role filter
export async function GET(request: NextRequest) {
  try {
    // Validate admin access
    const authResult = await validateAdminAccess(request);
    if (!authResult.isValid) {
      return createUnauthorizedResponse(authResult.error);
    }
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');

    // Build the query based on role filter
    const whereClause = role ? { role: role as any } : {};

    const users = await prisma.user.findMany({
      where: whereClause,
      select: {
        user_id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        profile_picture: true,
        created_at: true,
        updated_at: true,
        // Exclude password_hash for security
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch users' 
      },
      { status: 500 }
    );
  }
}

// POST /api/users - Create new user
export async function POST(request: NextRequest) {
  try {
    // Validate admin access
    const authResult = await validateAdminAccess(request);
    if (!authResult.isValid) {
      return createUnauthorizedResponse(authResult.error);
    }
    const body = await request.json();
    const { name, email, password, role, phone, profile_picture } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Name, email, and password are required' 
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'User with this email already exists' 
        },
        { status: 409 }
      );
    }

    // Hash password
    const password_hash = await bcrypt.hash(password, 12);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        role: role || 'USER',
        phone,
        profile_picture
      },
      select: {
        user_id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        profile_picture: true,
        created_at: true,
        updated_at: true,
      }
    });

    return NextResponse.json({
      success: true,
      data: newUser,
      message: 'User created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create user' 
      },
      { status: 500 }
    );
  }
}