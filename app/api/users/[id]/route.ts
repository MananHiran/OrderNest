import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { validateAdminAccess, createUnauthorizedResponse } from '@/lib/auth';

// GET /api/users/[id] - Get single user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Validate admin access
    const authResult = await validateAdminAccess(request);
    if (!authResult.isValid) {
      return createUnauthorizedResponse(authResult.error);
    }
    const user = await prisma.user.findUnique({
      where: { user_id: params.id },
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
      }
    });

    if (!user) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'User not found' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch user' 
      },
      { status: 500 }
    );
  }
}

// PUT /api/users/[id] - Update user
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Validate admin access
    const authResult = await validateAdminAccess(request);
    if (!authResult.isValid) {
      return createUnauthorizedResponse(authResult.error);
    }
    const body = await request.json();
    const { name, email, password, role, phone, profile_picture } = body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { user_id: params.id }
    });

    if (!existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'User not found' 
        },
        { status: 404 }
      );
    }

    // Check if email is being changed and if it's already taken
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email }
      });

      if (emailExists) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Email already exists' 
          },
          { status: 409 }
        );
      }
    }

    // Prepare update data
    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (role) updateData.role = role;
    if (phone !== undefined) updateData.phone = phone;
    if (profile_picture !== undefined) updateData.profile_picture = profile_picture;

    // Hash new password if provided
    if (password) {
      updateData.password_hash = await bcrypt.hash(password, 12);
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { user_id: params.id },
      data: updateData,
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
      data: updatedUser,
      message: 'User updated successfully'
    });

  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update user' 
      },
      { status: 500 }
    );
  }
}

// DELETE /api/users/[id] - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Validate admin access
    const authResult = await validateAdminAccess(request);
    if (!authResult.isValid) {
      return createUnauthorizedResponse(authResult.error);
    }
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { user_id: params.id }
    });

    if (!existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'User not found' 
        },
        { status: 404 }
      );
    }

    // Delete user
    await prisma.user.delete({
      where: { user_id: params.id }
    });

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to delete user' 
      },
      { status: 500 }
    );
  }
}