import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600';
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-rose-600">
              Tani Fashion
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/new-arrivals" className={isActive('/new-arrivals')}>
              New Arrivals
            </Link>
            <Link to="/clothing" className={isActive('/clothing')}>
              Clothing
            </Link>
            <Link to="/shoes" className={isActive('/shoes')}>
              Shoes
            </Link>
            <Link to="/bags" className={isActive('/bags')}>
              Bags
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="text-gray-700 hover:text-rose-600">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-rose-600">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/new-arrivals"
              className="block px-3 py-2 text-gray-700 hover:text-rose-600"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              to="/clothing"
              className="block px-3 py-2 text-gray-700 hover:text-rose-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Clothing
            </Link>
            <Link
              to="/shoes"
              className="block px-3 py-2 text-gray-700 hover:text-rose-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shoes
            </Link>
            <Link
              to="/bags"
              className="block px-3 py-2 text-gray-700 hover:text-rose-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Bags
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}