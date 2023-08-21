'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Ecommerce Store</div>
        <div className="hidden md:block">
          {/* Your navigation links go here */}
          <Link href="home" className="px-4">Home</Link>
          <Link href="#" className="px-4">Products</Link>
          <Link href="#" className="px-4">About</Link>
          {/* Add more links as needed */}
        </div>
        <div className="md:hidden">
          <button
            onClick={isMenuOpen ? closeMenu : openMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-4 md:hidden">
          {/* Your navigation links go here */}
          <Link href="home" className="block py-2">Home</Link>
          <Link href="#" className="block py-2">Products</Link>
          <Link href="#" className="block py-2">About</Link>

          {/* Add more links as needed */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
