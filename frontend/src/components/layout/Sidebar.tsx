import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/queue', label: 'Queue Management' },
    { href: '/appointments', label: 'Appointments' },
    { href: '/doctors', label: 'Doctors' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-2 rounded-md ${
              router.pathname === item.href
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}; 