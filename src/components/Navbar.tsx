'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => setIsLoggedIn(!!localStorage.getItem('token'));
    checkLogin();
    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    sessionStorage.removeItem('autoRedirect');
    // Trigger storage event to update Navbar
    window.dispatchEvent(new Event('storage')); // 👈 Add this line
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="font-bold text-xl">Car Parking System</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        {!isLoggedIn ? (
          <>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
