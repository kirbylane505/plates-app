'use client';

import { useParams } from 'next/navigation';
import { getChefById, getPlatesByChefId } from '@/data/chefs';
import { PlateCard } from '@/components/ui/PlateCard';
import { TIER_REQUIREMENTS } from '@/types';
import { Star, MapPin, Clock, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ChefPage() {
  const params = useParams();
  const chef = getChefById(params.id as string);
  const plates = chef ? getPlatesByChefId(chef.id) : [];

  if (!chef) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chef not found</h1>
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const tierInfo = TIER_REQUIREMENTS[chef.tier];

  return (
    <div className="min-h-screen pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to all chefs
        </Link>
      </div>

      {/* Chef Header */}
      <section className={`px-4 py-8 ${chef.tier === 'diamond' ? 'bg-gradient-to-b from-[#00d4ff]/10 to-transparent' : chef.tier === 'platinum' ? 'bg-gradient-to-b from-[#e5e4e2]/10 to-transparent' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#ffc857] flex items-center justify-center text-6xl ${chef.tier === 'diamond' ? 'diamond-glow' : chef.tier === 'platinum' ? 'platinum-glow' : ''}`}>
              {chef.name.charAt(0)}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{chef.name}</h1>
                {chef.isCookingNow && (
                  <span className="cooking-now bg-[#ff6b35] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    COOKING NOW
                  </span>
                )}
              </div>

              <div className={`tier-badge ${chef.tier} mb-4`}>
                {tierInfo.icon} {tierInfo.label}
              </div>

              <p className="text-gray-300 text-lg mb-4">{chef.bio}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#ffc857] fill-current" />
                  <span className="font-bold text-[#ffc857]">{chef.rating.toFixed(1)}</span>
                  <span className="text-gray-500">({chef.totalOrders} orders)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{chef.location.address}, {chef.location.city}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mt-4">
                {chef.specialties.map((spec) => (
                  <span key={spec} className="bg-[#2a2a2a] text-[#ffc857] px-3 py-1 rounded-lg text-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 p-4 bg-[#1a1a1a] rounded-xl border border-[#333]">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-[#44ff44]" />
              <span className="font-bold">Trust & Safety</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className={`text-sm ${chef.certifications.foodHandler ? 'text-green-400' : 'text-gray-500'}`}>
                {chef.certifications.foodHandler ? '✓' : '○'} Food Handler Certified
              </span>
              <span className={`text-sm ${chef.certifications.backgroundCheck ? 'text-green-400' : 'text-gray-500'}`}>
                {chef.certifications.backgroundCheck ? '✓' : '○'} Background Check
              </span>
              <span className={`text-sm ${chef.certifications.kitchenVerified ? 'text-green-400' : 'text-gray-500'}`}>
                {chef.certifications.kitchenVerified ? '✓' : '○'} Kitchen Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>

          {plates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plates.map((plate) => (
                <PlateCard
                  key={plate.id}
                  plate={plate}
                  onOrder={() => alert(`Order ${plate.name} - Coming soon!`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-[#1a1a1a] rounded-xl">
              <p className="text-gray-400">No plates available right now</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
