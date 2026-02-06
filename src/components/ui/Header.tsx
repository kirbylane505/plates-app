'use client';

import Link from 'next/link';
import { MapPin, User, ChefHat, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/95 backdrop-blur-sm border-b border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-black gradient-text">PLATES</span>
        </Link>

        {/* Location */}
        <div className="hidden md:flex items-center gap-2 bg-[#0f172a] px-4 py-2 rounded-lg border border-[#1e3a5f]">
          <MapPin className="w-4 h-4 text-[#d4af37]" />
          <span className="text-sm">Atlanta, GA</span>
          <span className="text-gray-500 text-xs">Change</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-[#0f172a] px-4 py-2 rounded-lg border border-[#1e3a5f] flex-1 max-w-md mx-4">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search plates, cuisines, chefs..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-4">
          <Link
            href="/cook"
            className="flex items-center gap-2 text-sm hover:text-[#d4af37] transition-colors"
          >
            <ChefHat className="w-4 h-4" />
            <span className="hidden md:inline">Become a Cook</span>
          </Link>
          <Link
            href="/account"
            className="flex items-center gap-2 bg-[#0f172a] px-4 py-2 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
          >
            <User className="w-4 h-4" />
            <span className="hidden md:inline">Sign In</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
