'use client';

import { useState } from 'react';
import { ChefCard } from '@/components/ui/ChefCard';
import { sampleChefs, getCookingNowChefs } from '@/data/chefs';
import { TIER_REQUIREMENTS } from '@/types';
import { MapPin, Flame, Star, ChefHat, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'cooking'>('all');
  const cookingNow = getCookingNowChefs();
  const displayChefs = filter === 'cooking' ? cookingNow : sampleChefs;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="gradient-text">PLATES</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-2">
            "Every House in the World Can Serve PLATES"
          </p>
          <p className="text-lg text-[#d4af37] italic mb-8">
            Open the app. See who's cooking. Eat.
          </p>

          {/* Journey Visual */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#0f172a] border-2 border-[#d4af37] flex items-center justify-center text-3xl md:text-4xl">
                🏠
              </div>
              <p className="text-xs md:text-sm text-[#d4af37] mt-2">Home Kitchen</p>
            </div>
            <span className="text-2xl text-[#d4af37]">→</span>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#0f172a] border border-[#1e3a5f] flex items-center justify-center text-3xl md:text-4xl">
                🚚
              </div>
              <p className="text-xs md:text-sm text-gray-400 mt-2">Food Truck</p>
            </div>
            <span className="text-2xl text-[#d4af37]">→</span>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#0f172a] border border-[#1e3a5f] flex items-center justify-center text-3xl md:text-4xl">
                🏪
              </div>
              <p className="text-xs md:text-sm text-gray-400 mt-2">Restaurant</p>
            </div>
          </div>

          {/* Price Tags */}
          <div className="flex justify-center gap-3 mb-8">
            <span className="price-tag">$10</span>
            <span className="price-tag">$15</span>
            <span className="price-tag">$20</span>
            <span className="price-tag bg-[#22c55e] text-black">$35+</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="#chefs" className="btn-primary text-lg px-8 py-4">
              Find Food Near You
            </Link>
            <Link href="/cook" className="btn-secondary text-lg px-8 py-4">
              Become a Cook
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Infomercial Style */}
      <section className="py-16 px-4 bg-[#030712] border-y border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-sm font-bold tracking-widest mb-2">✨ HOW IT WORKS ✨</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              From <span className="text-red-500">Hungry</span> to <span className="text-[#22c55e]">Happy</span> in 3 Steps
            </h2>
          </div>

          {/* The Problem - Crossed Out */}
          <div className="mb-12 p-6 bg-red-950/30 rounded-2xl border border-red-900/50">
            <h3 className="text-red-400 text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">😫</span> TIRED OF THIS?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-400 line-through opacity-60">
                <span className="text-3xl">🍔</span>
                <span>Same boring fast food</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 line-through opacity-60">
                <span className="text-3xl">💸</span>
                <span>$50+ restaurant bills</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 line-through opacity-60">
                <span className="text-3xl">😔</span>
                <span>No homemade flavor</span>
              </div>
            </div>
          </div>

          {/* The Solution - PLATES */}
          <div className="mb-12 p-6 bg-[#d4af37]/10 rounded-2xl border-2 border-[#d4af37]">
            <h3 className="text-[#d4af37] text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🎉</span> INTRODUCING PLATES!
            </h3>
            <p className="text-xl text-white">Real homemade food from neighbors who love to cook. <span className="text-[#d4af37] font-bold">Starting at just $10.</span></p>
          </div>

          {/* 3 Steps Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black text-2xl font-black">1</div>
              <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1e3a5f] h-full">
                <div className="text-6xl mb-4 text-center">📱</div>
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">Open PLATES</h4>
                <p className="text-gray-400">See who&apos;s cooking in your neighborhood right now. Live kitchen status updates.</p>
                <div className="mt-4 p-3 bg-[#030712] rounded-lg text-center">
                  <span className="text-[#22c55e] text-sm font-bold">● 4 Kitchens Active Near You</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black text-2xl font-black">2</div>
              <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1e3a5f] h-full">
                <div className="text-6xl mb-4 text-center">🍽️</div>
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">Pick Your Plate</h4>
                <p className="text-gray-400">Browse menus, see ratings, check certifications. Order with one tap.</p>
                <div className="mt-4 p-3 bg-[#030712] rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">🌮 Ms. Rosa&apos;s Tacos</span>
                    <span className="text-[#d4af37] font-bold">$10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black text-2xl font-black">3</div>
              <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1e3a5f] h-full">
                <div className="text-6xl mb-4 text-center">😋</div>
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">Enjoy!</h4>
                <p className="text-gray-400">Pick up fresh from their kitchen or get it delivered. Taste the love!</p>
                <div className="mt-4 p-3 bg-[#22c55e]/20 rounded-lg text-center border border-[#22c55e]/50">
                  <span className="text-[#22c55e] text-sm font-bold">✓ Order Ready in 15 min!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Example Scenario */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] rounded-2xl p-8 border border-[#d4af37]/30">
            <h3 className="text-center text-[#d4af37] text-sm font-bold tracking-widest mb-6">📺 SEE IT IN ACTION</h3>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Customer */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 mx-auto bg-[#0f172a] rounded-full flex items-center justify-center text-4xl border-2 border-[#60a5fa] mb-3">
                  👩🏽
                </div>
                <p className="font-bold text-white">Sarah</p>
                <p className="text-gray-400 text-sm">Hungry in Atlanta</p>
                <div className="mt-3 bg-[#0f172a] rounded-lg p-3 text-left">
                  <p className="text-sm text-gray-300">&quot;I want real tacos, not Taco Bell...&quot;</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-4xl text-[#d4af37] animate-pulse">
                ⚡
              </div>

              {/* PLATES App */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 mx-auto bg-[#d4af37] rounded-2xl flex items-center justify-center text-3xl mb-3">
                  📱
                </div>
                <p className="font-bold text-[#d4af37]">PLATES</p>
                <p className="text-gray-400 text-sm">Finds Ms. Rosa nearby</p>
                <div className="mt-3 bg-[#0f172a] rounded-lg p-3">
                  <p className="text-sm text-[#22c55e]">● Ms. Rosa is COOKING NOW</p>
                  <p className="text-xs text-gray-400">0.3 miles away • 4.9 ⭐</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-4xl text-[#d4af37] animate-pulse">
                ⚡
              </div>

              {/* Cook */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 mx-auto bg-[#0f172a] rounded-full flex items-center justify-center text-4xl border-2 border-[#d4af37] mb-3">
                  👩🏽‍🍳
                </div>
                <p className="font-bold text-white">Ms. Rosa</p>
                <p className="text-gray-400 text-sm">💎 Diamond Chef</p>
                <div className="mt-3 bg-[#0f172a] rounded-lg p-3 text-left">
                  <p className="text-sm text-gray-300">&quot;Order up! Fresh street tacos!&quot;</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-4xl text-[#22c55e]">
                →
              </div>

              {/* Result */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 mx-auto bg-[#22c55e]/20 rounded-full flex items-center justify-center text-4xl border-2 border-[#22c55e] mb-3">
                  🌮
                </div>
                <p className="font-bold text-[#22c55e]">$10 TACOS!</p>
                <p className="text-gray-400 text-sm">Authentic & Homemade</p>
                <div className="mt-3 bg-[#22c55e]/10 rounded-lg p-3 border border-[#22c55e]/30">
                  <p className="text-sm text-[#22c55e] font-bold">Sarah: &quot;OMG these are amazing!&quot; ⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 pt-6 border-t border-[#1e3a5f] grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-black text-[#d4af37]">15 min</p>
                <p className="text-gray-400 text-sm">From order to eat</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#22c55e]">$10</p>
                <p className="text-gray-400 text-sm">Fresh authentic tacos</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">0.3 mi</p>
                <p className="text-gray-400 text-sm">From her kitchen</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Live Map Section */}
      <section className="py-12 px-4 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#d4af37]" />
              <h2 className="text-2xl font-bold">Your Neighborhood</h2>
              <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-bold">
                {cookingNow.length} Cooking Now
              </span>
            </div>
          </div>

          {/* Map Mockup */}
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] rounded-2xl border-2 border-[#d4af37]/30 p-6 mb-8">
            <p className="text-[#d4af37] text-sm mb-4">📍 Atlanta, GA - {sampleChefs.length} Kitchens Active</p>
            <div className="flex flex-wrap gap-3">
              {sampleChefs.map((chef) => {
                const tierInfo = TIER_REQUIREMENTS[chef.tier];
                return (
                  <Link
                    key={chef.id}
                    href={`/chef/${chef.id}`}
                    className={`map-pin ${chef.tier === 'diamond' || chef.tier === 'platinum' ? chef.tier : ''} ${chef.isCookingNow ? 'cooking-now' : ''}`}
                  >
                    {tierInfo.icon} {chef.name} - ${chef.tier === 'platinum' ? '20+' : chef.tier === 'diamond' ? '15-20' : '10-15'}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chef Listings */}
      <section id="chefs" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'bg-[#0f172a] text-gray-400 hover:text-white'
              }`}
            >
              <ChefHat className="w-4 h-4" />
              All Chefs ({sampleChefs.length})
            </button>
            <button
              onClick={() => setFilter('cooking')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                filter === 'cooking'
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'bg-[#0f172a] text-gray-400 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              Cooking Now ({cookingNow.length})
            </button>
          </div>

          {/* Chef Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayChefs.map((chef) => (
              <Link key={chef.id} href={`/chef/${chef.id}`}>
                <ChefCard chef={chef} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier System */}
      <section className="py-12 px-4 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Level Up Your Kitchen</h2>
            <p className="text-gray-400">Your food gets better. Your rating goes up. You <span className="text-[#d4af37]">level up</span>.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(TIER_REQUIREMENTS).map(([tier, info]) => (
              <div
                key={tier}
                className={`text-center p-4 rounded-xl bg-[#030712] border ${
                  tier === 'diamond' ? 'border-[#60a5fa] diamond-glow' :
                  tier === 'platinum' ? 'border-[#e5e4e2] platinum-glow' :
                  tier === 'gold' ? 'border-[#d4af37] gold-glow' :
                  'border-[#1e3a5f]'
                }`}
              >
                <div className="text-4xl mb-2">{info.icon}</div>
                <div className={`font-bold text-sm mb-1 ${
                  tier === 'diamond' ? 'text-[#60a5fa]' :
                  tier === 'platinum' ? 'text-[#e5e4e2]' :
                  tier === 'gold' ? 'text-[#d4af37]' :
                  'text-gray-400'
                }`}>
                  {info.label}
                </div>
                <div className="text-xs text-gray-500">
                  {info.orders > 0 ? `${info.orders}+ orders` : 'Just Started'}
                </div>
                {info.rating > 0 && (
                  <div className="text-xs text-gray-500">{info.rating}+ rating</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-block bg-[#030712] border border-[#d4af37] rounded-xl px-6 py-4">
              <p className="text-[#d4af37] font-bold">👑 Gold Chefs Glow on the Map</p>
              <p className="text-gray-400 text-sm">Everyone sees who the BEST cooks are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Ready to Serve PLATES?
            </h2>
            <p className="text-[#0f172a]/70 text-lg mb-6">
              Turn your kitchen into a business. Start earning today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/cook" className="bg-[#0f172a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1e3a5f] transition-colors">
                Start Cooking
              </Link>
              <Link href="#chefs" className="bg-white/30 text-[#0f172a] px-8 py-4 rounded-lg font-bold hover:bg-white/50 transition-colors">
                Order Food
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Powered by <span className="text-[#d4af37]">GOD MODE AI</span>
          </p>
          <p className="text-[#d4af37] text-sm mt-1">
            A MIKE PAGE EMPIRE PRODUCT
          </p>
        </div>
      </footer>
    </div>
  );
}
