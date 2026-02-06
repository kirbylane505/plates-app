'use client';

import { Plate, PRICE_TIERS } from '@/types';
import { Clock, AlertTriangle } from 'lucide-react';

interface PlateCardProps {
  plate: Plate;
  onOrder?: () => void;
}

export function PlateCard({ plate, onOrder }: PlateCardProps) {
  const tierInfo = PRICE_TIERS[plate.priceTier];

  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] hover:border-[#ff6b35] transition-colors">
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center">
        <span className="text-6xl">🍽️</span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name & Price */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg">{plate.name}</h3>
          <div className="price-tag text-lg">${plate.price}</div>
        </div>

        {/* Tier Label */}
        <div className="text-[#ffc857] text-xs font-semibold mb-2">
          {tierInfo.label}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{plate.description}</p>

        {/* Prep Time */}
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <Clock className="w-4 h-4" />
          <span>{plate.prepTime} min</span>
        </div>

        {/* Allergens */}
        {plate.allergens.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-yellow-500 mb-3">
            <AlertTriangle className="w-3 h-3" />
            <span>{plate.allergens.join(', ')}</span>
          </div>
        )}

        {/* Order Button */}
        <button
          onClick={onOrder}
          disabled={!plate.available}
          className={`w-full py-2 rounded-lg font-bold transition-all ${
            plate.available
              ? 'btn-primary'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          {plate.available ? 'Order Now' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
}
