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
