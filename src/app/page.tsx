'use client';

import { useState } from 'react';
import { ChefCard } from '@/components/ui/ChefCard';
import { sampleChefs, getCookingNowChefs } from '@/data/chefs';
import { TIER_REQUIREMENTS } from '@/types';
import { MapPin, Flame, Star, ChefHat, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'cooking'>('all');
  const cookingNow = getCookingNowChefs();
  const displayChefs = filter === 'cooking' ? cookingNow : sampleChefs;

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - ANIMATED */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🍽️</div>
        <div className="absolute top-40 right-20 text-5xl animate-float opacity-20" style={{animationDelay: '1s'}}>🌮</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-float opacity-20" style={{animationDelay: '0.5s'}}>🍗</div>
        <div className="absolute bottom-40 right-1/4 text-5xl animate-float opacity-20" style={{animationDelay: '1.5s'}}>🥘</div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Animated Logo */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 animate-zoom-attention">
            <span className="gradient-text">PLATES</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-2 animate-fade-in">
            &quot;Every House in the World Can Serve PLATES&quot;
          </p>
          <p className="text-lg text-[#d4af37] italic mb-8 animate-pulse">
            ✨ Open the app. See who&apos;s cooking. Eat. ✨
          </p>

          {/* Animated Journey Visual */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="text-center animate-bounce-slow">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#0f172a] border-2 border-[#d4af37] flex items-center justify-center text-3xl md:text-4xl animate-wiggle">
                🏠
              </div>
              <p className="text-xs md:text-sm text-[#d4af37] mt-2 font-bold">Home Kitchen</p>
            </div>
            <span className="text-2xl text-[#d4af37] animate-flow">→</span>
            <div className="text-center animate-bounce-slow" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#0f172a] border border-[#1e3a5f] flex items-center justify-center text-3xl md:text-4xl">
                🚚
              </div>
              <p className="text-xs md:text-sm text-gray-400 mt-2">Food Truck</p>
            </div>
            <span className="text-2xl text-[#d4af37] animate-flow" style={{animationDelay: '0.5s'}}>→</span>
            <div className="text-center animate-bounce-slow" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#0f172a] border border-[#1e3a5f] flex items-center justify-center text-3xl md:text-4xl">
                🏪
              </div>
              <p className="text-xs md:text-sm text-gray-400 mt-2">Restaurant</p>
            </div>
          </div>

          {/* Animated Price Tags */}
          <div className="flex justify-center gap-3 mb-8">
            <span className="price-tag animate-pop-in hover:scale-110 transition-transform cursor-pointer">$10</span>
            <span className="price-tag animate-pop-in hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.1s'}}>$15</span>
            <span className="price-tag animate-pop-in hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.2s'}}>$20</span>
            <span className="price-tag bg-[#22c55e] text-black animate-pop-in animate-celebrate hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '0.3s'}}>$35+</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="#chefs" className="btn-primary text-lg px-8 py-4 animate-pulse hover:animate-none">
              🔥 Find Food Near You
            </Link>
            <Link href="/cook" className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform">
              👨‍🍳 Become a Cook
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - SUPER ANIMATED Infomercial Style */}
      <section className="py-16 px-4 bg-[#030712] border-y border-[#1e3a5f] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-sm font-bold tracking-widest mb-2 animate-sparkle">✨ HOW IT WORKS ✨</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              From <span className="text-red-500 animate-shake inline-block">Hungry</span> to <span className="text-[#22c55e] animate-celebrate inline-block">Happy</span> in 3 Steps
            </h2>
          </div>

          {/* The Problem - ANIMATED Crossed Out */}
          <div className="mb-12 p-6 bg-red-950/30 rounded-2xl border border-red-900/50 animate-shake hover:animate-none transition-all">
            <h3 className="text-red-400 text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl animate-wiggle">😫</span> TIRED OF THIS?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-400 line-through opacity-60 hover:opacity-30 transition-opacity">
                <span className="text-3xl">🍔</span>
                <span>Same boring fast food</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 line-through opacity-60 hover:opacity-30 transition-opacity">
                <span className="text-3xl">💸</span>
                <span>$50+ restaurant bills</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 line-through opacity-60 hover:opacity-30 transition-opacity">
                <span className="text-3xl">😔</span>
                <span>No homemade flavor</span>
              </div>
            </div>
          </div>

          {/* The Solution - PLATES ANIMATED */}
          <div className="mb-12 p-6 bg-[#d4af37]/10 rounded-2xl border-2 border-[#d4af37] animate-zoom-attention">
            <h3 className="text-[#d4af37] text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl animate-celebrate">🎉</span> INTRODUCING PLATES!
            </h3>
            <p className="text-xl text-white">Real homemade food from neighbors who love to cook. <span className="text-[#d4af37] font-bold animate-pulse">Starting at just $10.</span></p>
          </div>

          {/* 3 Steps Visual - ANIMATED */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black text-2xl font-black animate-step-pulse">1</div>
              <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1e3a5f] h-full hover:border-[#d4af37] transition-all hover:scale-105 transform">
                <div className="text-6xl mb-4 text-center animate-float">📱</div>
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">Open PLATES</h4>
                <p className="text-gray-400">See who&apos;s cooking in your neighborhood right now. Live kitchen status updates.</p>
                <div className="mt-4 p-3 bg-[#030712] rounded-lg text-center">
                  <span className="text-[#22c55e] text-sm font-bold animate-pulse">● 4 Kitchens Active Near You</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black text-2xl font-black animate-step-pulse" style={{animationDelay: '0.5s'}}>2</div>
              <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1e3a5f] h-full hover:border-[#d4af37] transition-all hover:scale-105 transform">
                <div className="text-6xl mb-4 text-center animate-float" style={{animationDelay: '0.5s'}}>🍽️</div>
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">Pick Your Plate</h4>
                <p className="text-gray-400">Browse menus, see ratings, check certifications. Order with one tap.</p>
                <div className="mt-4 p-3 bg-[#030712] rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">🌮 Ms. Rosa&apos;s Tacos</span>
                    <span className="text-[#d4af37] font-bold animate-pulse">$10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black text-2xl font-black animate-step-pulse" style={{animationDelay: '1s'}}>3</div>
              <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1e3a5f] h-full hover:border-[#22c55e] transition-all hover:scale-105 transform">
                <div className="text-6xl mb-4 text-center animate-bounce-slow">😋</div>
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">Enjoy!</h4>
                <p className="text-gray-400">Pick up fresh from their kitchen or get it delivered. Taste the love!</p>
                <div className="mt-4 p-3 bg-[#22c55e]/20 rounded-lg text-center border border-[#22c55e]/50 animate-zoom-attention">
                  <span className="text-[#22c55e] text-sm font-bold">✓ Order Ready in 15 min!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Example Scenario - SUPER ANIMATED */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] rounded-2xl p-8 border border-[#d4af37]/30 relative overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute top-5 left-10 text-2xl animate-float opacity-30">✨</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float opacity-30" style={{animationDelay: '1s'}}>⭐</div>
            <div className="absolute top-1/2 left-1/4 text-xl animate-sparkle opacity-20">💫</div>

            <h3 className="text-center text-[#d4af37] text-sm font-bold tracking-widest mb-6 animate-sparkle">📺 SEE IT IN ACTION</h3>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
              {/* Customer - Sarah */}
              <div className="text-center flex-1 animate-slide-in-left">
                <div className="w-20 h-20 mx-auto bg-[#0f172a] rounded-full flex items-center justify-center text-4xl border-2 border-[#60a5fa] mb-3 animate-float">
                  👩🏽
                </div>
                <p className="font-bold text-white">Sarah</p>
                <p className="text-gray-400 text-sm">Hungry in Atlanta</p>
                <div className="mt-3 bg-[#0f172a] rounded-lg p-3 text-left animate-pop-in">
                  <p className="text-sm text-gray-300">&quot;I want real tacos, not Taco Bell...&quot;</p>
                </div>
              </div>

              {/* Lightning Arrow */}
              <div className="text-4xl text-[#d4af37] animate-lightning">
                ⚡
              </div>

              {/* PLATES App */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 mx-auto bg-[#d4af37] rounded-2xl flex items-center justify-center text-3xl mb-3 animate-zoom-attention">
                  📱
                </div>
                <p className="font-bold text-[#d4af37]">PLATES</p>
                <p className="text-gray-400 text-sm">Finds Ms. Rosa nearby</p>
                <div className="mt-3 bg-[#0f172a] rounded-lg p-3 animate-pop-in" style={{animationDelay: '0.3s'}}>
                  <p className="text-sm text-[#22c55e] animate-pulse">● Ms. Rosa is COOKING NOW</p>
                  <p className="text-xs text-gray-400">0.3 miles away • 4.9 ⭐</p>
                </div>
              </div>

              {/* Lightning Arrow */}
              <div className="text-4xl text-[#d4af37] animate-lightning" style={{animationDelay: '0.3s'}}>
                ⚡
              </div>

              {/* Cook - Ms. Rosa */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 mx-auto bg-[#0f172a] rounded-full flex items-center justify-center text-4xl border-2 border-[#d4af37] mb-3 animate-wiggle">
                  👩🏽‍🍳
                </div>
                <p className="font-bold text-white">Ms. Rosa</p>
                <p className="text-gray-400 text-sm">💎 Diamond Chef</p>
                <div className="mt-3 bg-[#0f172a] rounded-lg p-3 text-left animate-pop-in" style={{animationDelay: '0.5s'}}>
                  <p className="text-sm text-gray-300">&quot;Order up! Fresh street tacos!&quot;</p>
                </div>
              </div>

              {/* Green Arrow */}
              <div className="text-4xl text-[#22c55e] animate-flow">
                →
              </div>

              {/* Result - Tacos */}
              <div className="text-center flex-1 animate-slide-in-right">
                <div className="w-20 h-20 mx-auto bg-[#22c55e]/20 rounded-full flex items-center justify-center text-4xl border-2 border-[#22c55e] mb-3 animate-celebrate">
                  🌮
                </div>
                <p className="font-bold text-[#22c55e] text-xl">$10 TACOS!</p>
                <p className="text-gray-400 text-sm">Authentic & Homemade</p>
                <div className="mt-3 bg-[#22c55e]/10 rounded-lg p-3 border border-[#22c55e]/30 animate-zoom-attention">
                  <p className="text-sm text-[#22c55e] font-bold">Sarah: &quot;OMG these are amazing!&quot;</p>
                  <p className="text-[#d4af37] animate-heartbeat">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>

            {/* Bottom Stats - ANIMATED */}
            <div className="mt-8 pt-6 border-t border-[#1e3a5f] grid grid-cols-3 gap-4 text-center">
              <div className="animate-pop-in">
                <p className="text-3xl font-black text-[#d4af37] animate-pulse">15 min</p>
                <p className="text-gray-400 text-sm">From order to eat</p>
              </div>
              <div className="animate-pop-in" style={{animationDelay: '0.2s'}}>
                <p className="text-3xl font-black text-[#22c55e] animate-celebrate">$10</p>
                <p className="text-gray-400 text-sm">Fresh authentic tacos</p>
              </div>
              <div className="animate-pop-in" style={{animationDelay: '0.4s'}}>
                <p className="text-3xl font-black text-white">0.3 mi</p>
                <p className="text-gray-400 text-sm">From her kitchen</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Live Map Section - ANIMATED */}
      <section className="py-12 px-4 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#d4af37] animate-bounce-slow" />
              <h2 className="text-2xl font-bold">Your Neighborhood</h2>
              <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                {cookingNow.length} Cooking Now 🔥
              </span>
            </div>
          </div>

          {/* Map Mockup - ANIMATED */}
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] rounded-2xl border-2 border-[#d4af37]/30 p-6 mb-8 relative overflow-hidden">
            {/* Animated radar ping */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#22c55e] rounded-full animate-ping opacity-50"></div>

            <p className="text-[#d4af37] text-sm mb-4 animate-pulse">📍 Atlanta, GA - {sampleChefs.length} Kitchens Active</p>
            <div className="flex flex-wrap gap-3">
              {sampleChefs.map((chef, index) => {
                const tierInfo = TIER_REQUIREMENTS[chef.tier];
                return (
                  <Link
                    key={chef.id}
                    href={`/chef/${chef.id}`}
                    className={`map-pin ${chef.tier === 'diamond' || chef.tier === 'platinum' ? chef.tier : ''} ${chef.isCookingNow ? 'cooking-now' : ''} hover:scale-110 transition-transform`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tierInfo.icon} {chef.name} - ${chef.tier === 'platinum' ? '20+' : chef.tier === 'diamond' ? '15-20' : '10-15'}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chef Listings - ANIMATED */}
      <section id="chefs" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                filter === 'all'
                  ? 'bg-[#d4af37] text-black font-bold animate-zoom-attention'
                  : 'bg-[#0f172a] text-gray-400 hover:text-white'
              }`}
            >
              <ChefHat className="w-4 h-4" />
              All Chefs ({sampleChefs.length})
            </button>
            <button
              onClick={() => setFilter('cooking')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                filter === 'cooking'
                  ? 'bg-[#d4af37] text-black font-bold animate-zoom-attention'
                  : 'bg-[#0f172a] text-gray-400 hover:text-white'
              }`}
            >
              <Flame className={`w-4 h-4 ${filter === 'cooking' ? 'animate-wiggle' : ''}`} />
              Cooking Now ({cookingNow.length}) 🔥
            </button>
          </div>

          {/* Chef Grid - ANIMATED */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayChefs.map((chef, index) => (
              <Link
                key={chef.id}
                href={`/chef/${chef.id}`}
                className="transform hover:scale-105 transition-all"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <ChefCard chef={chef} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier System - ANIMATED */}
      <section className="py-12 px-4 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Level Up Your Kitchen 🚀</h2>
            <p className="text-gray-400">Your food gets better. Your rating goes up. You <span className="text-[#d4af37] animate-pulse">level up</span>.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(TIER_REQUIREMENTS).map(([tier, info], index) => (
              <div
                key={tier}
                className={`text-center p-4 rounded-xl bg-[#030712] border transform hover:scale-110 transition-all cursor-pointer ${
                  tier === 'diamond' ? 'border-[#60a5fa] diamond-glow' :
                  tier === 'platinum' ? 'border-[#e5e4e2] platinum-glow' :
                  tier === 'gold' ? 'border-[#d4af37] gold-glow' :
                  'border-[#1e3a5f]'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`text-4xl mb-2 ${tier === 'platinum' ? 'animate-celebrate' : tier === 'diamond' ? 'animate-sparkle' : 'animate-float'}`}>{info.icon}</div>
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
            <div className="inline-block bg-[#030712] border border-[#d4af37] rounded-xl px-6 py-4 animate-zoom-attention">
              <p className="text-[#d4af37] font-bold">👑 Gold Chefs Glow on the Map</p>
              <p className="text-gray-400 text-sm">Everyone sees who the BEST cooks are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - ANIMATED */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Floating food emojis */}
        <div className="absolute top-10 left-10 text-4xl animate-float opacity-30">🍕</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-30" style={{animationDelay: '1s'}}>🍜</div>
        <div className="absolute top-1/2 right-20 text-3xl animate-float opacity-30" style={{animationDelay: '0.5s'}}>🥗</div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-2xl p-8 md:p-12 animate-zoom-attention">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Ready to Serve PLATES? 🍽️
            </h2>
            <p className="text-[#0f172a]/70 text-lg mb-6">
              Turn your kitchen into a business. Start earning today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/cook" className="bg-[#0f172a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1e3a5f] transition-all hover:scale-105 transform">
                🔥 Start Cooking
              </Link>
              <Link href="#chefs" className="bg-white/30 text-[#0f172a] px-8 py-4 rounded-lg font-bold hover:bg-white/50 transition-all hover:scale-105 transform">
                🌮 Order Food
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - ANIMATED */}
      <footer className="py-8 px-4 border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Powered by <span className="text-[#d4af37] animate-sparkle">GOD MODE AI</span>
          </p>
          <p className="text-[#d4af37] text-sm mt-1 animate-pulse">
            A MIKE PAGE EMPIRE PRODUCT 👑
          </p>
        </div>
      </footer>
    </div>
  );
}
