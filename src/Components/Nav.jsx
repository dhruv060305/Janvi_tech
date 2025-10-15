import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-1 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-wrap text-gray-900">
              JANVI<div className="text-orange-500"> TECHNOLOGIES & SERVICES</div>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <Link to="/" className="text-orange-500 font-semibold">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">About Us</Link>

            {/* Dropdown: Product & Services */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 flex items-center">
                Product & Services
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.355a.75.75 0 111.04 1.08l-4.25 3.84a.75.75 0 01-1.04 0l-4.25-3.84a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-lg z-10">
                <Link to="/networking" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Networking</Link>
                <Link to="/cloud" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Cloud Solutions</Link>
              </div>
            </div>

            <Link to="/infrastructure" className="text-gray-700 hover:text-orange-500">Infrastructure & Support</Link>

            {/* Dropdown: Our Partners */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 flex items-center">
                Our Partners
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.355a.75.75 0 111.04 1.08l-4.25 3.84a.75.75 0 01-1.04 0l-4.25-3.84a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-lg z-10">
                <Link to="/partners/a" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Partner A</Link>
                <Link to="/partners/b" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Partner B</Link>
              </div>
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact Us</Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-500">Blog</Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-orange-500 font-semibold">Home</Link>
          <Link to="/about" className="block text-gray-700">About Us</Link>
          <Link to="/networking" className="block text-gray-700">Networking</Link>
          <Link to="/cloud" className="block text-gray-700">Cloud Solutions</Link>
          <Link to="/infrastructure" className="block text-gray-700">Infrastructure & Support</Link>
          <Link to="/partners/a" className="block text-gray-700">Partner A</Link>
          <Link to="/partners/b" className="block text-gray-700">Partner B</Link>
          <Link to="/contact" className="block text-gray-700">Contact Us</Link>
          <Link to="/blog" className="block text-gray-700">Blog</Link>
        </div>
      )}
    </nav>
  );
}
