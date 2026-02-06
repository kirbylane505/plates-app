'use client';

import { useState } from 'react';
import { TIER_REQUIREMENTS, PRICE_TIERS } from '@/types';
import { ChefHat, DollarSign, TrendingUp, Shield, Check } from 'lucide-react';
import Link from 'next/link';

export default function BecomeCookPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#ff6b35]/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Turn Your Kitchen Into a <span className="gradient-text">Business</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Join PLATES and start earning from your cooking today
          </p>

          {/* Journey */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-xl bg-[#1a1a1a] border-2 border-[#ff6b35] flex items-center justify-center text-4xl">
                🏠
              </div>
              <p className="text-sm text-[#ff6b35] mt-2">Start Here</p>
              <p className="text-xs text-gray-500">$500-2K/mo</p>
            </div>
            <span className="text-2xl text-[#ffc857]">→</span>
            <div className="text-center">
              <div className="w-20 h-20 rounded-xl bg-[#1a1a1a] border border-[#ffc857] flex items-center justify-center text-4xl">
                🚚
              </div>
              <p className="text-sm text-[#ffc857] mt-2">Food Truck</p>
              <p className="text-xs text-gray-500">$5-15K/mo</p>
            </div>
            <span className="text-2xl text-[#ffc857]">→</span>
            <div className="text-center">
              <div className="w-20 h-20 rounded-xl bg-[#1a1a1a] border border-[#44ff44] flex items-center justify-center text-4xl">
                🏪
              </div>
              <p className="text-sm text-[#44ff44] mt-2">Restaurant</p>
              <p className="text-xs text-gray-500">$20K+/mo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Cook with PLATES?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
              <DollarSign className="w-12 h-12 text-[#44ff44] mb-4" />
              <h3 className="text-xl font-bold mb-2">Keep 88%</h3>
              <p className="text-gray-400">
                We only take 12%. You keep most of what you earn. No hidden fees.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
              <TrendingUp className="w-12 h-12 text-[#ff6b35] mb-4" />
              <h3 className="text-xl font-bold mb-2">Level Up</h3>
              <p className="text-gray-400">
                Hit milestones, unlock higher tiers, get featured, and earn more.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
              <Shield className="w-12 h-12 text-[#00d4ff] mb-4" />
              <h3 className="text-xl font-bold mb-2">We Handle Compliance</h3>
              <p className="text-gray-400">
                Permits, insurance, food handler certs - we guide you through it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Tiers */}
      <section className="py-12 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Simple Pricing</h2>
          <p className="text-gray-400 text-center mb-8">Fixed tiers make it easy for everyone</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(PRICE_TIERS).map(([tier, info]) => (
              <div key={tier} className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333] text-center">
                <div className="text-4xl font-black text-[#ff6b35] mb-2">${info.price}</div>
                <div className="text-[#ffc857] font-bold mb-3">{info.label}</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {info.examples.map((ex) => (
                    <li key={ex}>{ex}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Tiers */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Your Path to Success</h2>
          <p className="text-gray-400 text-center mb-8">Level up as you grow</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(TIER_REQUIREMENTS).map(([tier, info]) => (
              <div
                key={tier}
                className={`text-center p-4 rounded-xl bg-[#1a1a1a] border ${
                  tier === 'diamond' ? 'border-[#00d4ff]' :
                  tier === 'platinum' ? 'border-[#e5e4e2]' :
                  tier === 'gold' ? 'border-[#ffc857]' :
                  'border-[#333]'
                }`}
              >
                <div className="text-4xl mb-2">{info.icon}</div>
                <div className={`font-bold text-sm mb-1 ${
                  tier === 'diamond' ? 'text-[#00d4ff]' :
                  tier === 'platinum' ? 'text-[#e5e4e2]' :
                  tier === 'gold' ? 'text-[#ffc857]' :
                  'text-gray-400'
                }`}>
                  {info.label}
                </div>
                <div className="text-xs text-gray-500">
                  {info.orders > 0 ? `${info.orders}+ orders` : 'Just Started'}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#1a1a1a] rounded-xl p-6 border border-[#ff6b35]">
            <h3 className="font-bold text-lg mb-3 text-[#ff6b35]">Platinum Perks</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#44ff44]" /> Food truck financing available</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#44ff44]" /> Restaurant investment eligible</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#44ff44]" /> Custom pricing unlocked</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#44ff44]" /> Priority support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-12 px-4 bg-[#0d0d0d]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Start Cooking Today</h2>

          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-lg px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-lg px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 555-5555"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-lg px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">City</label>
                <input
                  type="text"
                  placeholder="Atlanta, GA"
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-lg px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">What do you cook best?</label>
                <textarea
                  placeholder="Tell us about your specialty dishes..."
                  rows={3}
                  className="w-full bg-[#0d0d0d] border border-[#333] rounded-lg px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors resize-none"
                />
              </div>

              <button className="w-full btn-primary py-4 text-lg">
                Apply to Cook
              </button>

              <p className="text-xs text-gray-500 text-center">
                By applying, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] rounded-2xl p-8 md:p-12">
            <ChefHat className="w-16 h-16 mx-auto mb-4 text-black" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Your Kitchen. Your Rules. Your Money.
            </h2>
            <p className="text-black/70 text-lg">
              PLATES is building the future of food. Be part of it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
