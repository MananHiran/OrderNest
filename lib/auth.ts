import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// Simple client-side authentication utilities
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('user');
  localStorage.removeItem('isAuthenticated');
};

// Server-side authentication utilities
export interface AuthUser {
  user_id: string;
  name: string;
  email: string;
  role: string;
}

/**
 * Validates if the request has admin authorization
 * Checks for user_id in headers and validates the user's role
 */
export async function validateAdminAccess(request: NextRequest): Promise<{
  isValid: boolean;
  user?: AuthUser;
  error?: string;
}> {
  try {
    // Get user_id from headers (sent by frontend)
    const userId = request.headers.get('x-user-id');
    const userRole = request.headers.get('x-user-role');

    if (!userId || !userRole) {
      return {
        isValid: false,
        error: 'Authentication required'
      };
    }

    // Verify user exists and has admin role
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        name: true,
        email: true,
        role: true,
      }
    });

    if (!user) {
      return {
        isValid: false,
        error: 'User not found'
      };
    }

    if (user.role !== 'ADMIN') {
      return {
        isValid: false,
        error: 'Admin access required'
      };
    }

    return {
      isValid: true,
      user
    };
  } catch (error) {
    console.error('Error validating admin access:', error);
    return {
      isValid: false,
      error: 'Authentication validation failed'
    };
  }
}

/**
 * Creates a standardized unauthorized response
 */
export function createUnauthorizedResponse(message: string = 'Unauthorized access') {
  return Response.json(
    { 
      success: false, 
      error: message 
    },
    { status: 403 }
  );
}
