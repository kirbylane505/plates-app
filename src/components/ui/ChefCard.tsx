'use client';

import { Chef, TIER_REQUIREMENTS } from '@/types';
import { Star, MapPin, Clock } from 'lucide-react';

interface ChefCardProps {
  chef: Chef;
  onClick?: () => void;
}

export function ChefCard({ chef, onClick }: ChefCardProps) {
  const tierInfo = TIER_REQUIREMENTS[chef.tier];

  const getTierClass = () => {
    if (chef.tier === 'diamond') return 'diamond-glow';
    if (chef.tier === 'platinum') return 'platinum-glow';
    if (chef.tier === 'gold') return 'gold-glow';
    return '';
  };

  return (
    <div
      className={`chef-card bg-[#0f172a] rounded-xl p-4 border border-[#1e3a5f] cursor-pointer ${getTierClass()}`}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#d4af37] flex items-center justify-center text-2xl border-2 border-[#d4af37]">
            {chef.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-lg">{chef.name}</h3>
            <div className={`tier-badge ${chef.tier}`}>
              {tierInfo.icon} {tierInfo.label}
            </div>
          </div>
        </div>

        {/* Cooking Now Badge */}
        {chef.isCookingNow && (
          <div className="cooking-now bg-[#d4af37] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
            COOKING
          </div>
        )}
      </div>

      {/* Bio */}
      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{chef.bio}</p>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mb-3">
        {chef.specialties.slice(0, 3).map((spec) => (
          <span key={spec} className="bg-[#1e3a5f] text-[#d4af37] px-2 py-1 rounded text-xs">
            {spec}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-[#d4af37]">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-bold">{chef.rating.toFixed(1)}</span>
          <span className="text-gray-500">({chef.totalOrders} orders)</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{chef.location.city}</span>
        </div>
      </div>

      {/* Certifications */}
      <div className="flex gap-2 mt-3 pt-3 border-t border-[#1e3a5f]">
        {chef.certifications.foodHandler && (
          <span className="text-xs text-[#22c55e]">✓ Food Handler</span>
        )}
        {chef.certifications.backgroundCheck && (
          <span className="text-xs text-[#22c55e]">✓ Background</span>
        )}
        {chef.certifications.kitchenVerified && (
          <span className="text-xs text-[#22c55e]">✓ Verified</span>
        )}
      </div>
    </div>
  );
}
