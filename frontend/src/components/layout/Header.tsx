import React from 'react';
import { useRouter } from 'next/router';
import { authService } from '../../services/auth.service';

export const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    authService.logout();
    router.push('/login');
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Clinic Management</h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}; 