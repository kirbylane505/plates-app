// PLATES - Core Types

export type ChefTier = 'home_cook' | 'rising' | 'gold' | 'diamond' | 'platinum';

export interface Chef {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  tier: ChefTier;
  rating: number;
  totalOrders: number;
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    state: string;
  };
  isActive: boolean;
  isCookingNow: boolean;
  specialties: string[];
  certifications: {
    foodHandler: boolean;
    backgroundCheck: boolean;
    kitchenVerified: boolean;
  };
  createdAt: string;
}

export interface Plate {
  id: string;
  chefId: string;
  name: string;
  description: string;
  image: string;
  price: 10 | 15 | 20 | 35; // Fixed price tiers
  priceTier: 'quick' | 'full' | 'premium' | 'family';
  category: string;
  ingredients: string[];
  allergens: string[];
  available: boolean;
  prepTime: number; // minutes
}

export interface Order {
  id: string;
  plateId: string;
  chefId: string;
  dinerId: string;
  status: 'pending' | 'accepted' | 'preparing' | 'ready' | 'picked_up' | 'delivered' | 'cancelled';
  deliveryType: 'pickup' | 'delivery';
  total: number;
  platformFee: number; // 12%
  deliveryFee: number; // $4.99
  tip: number;
  createdAt: string;
  estimatedReady: string;
}

export interface Diner {
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  favorites: string[]; // chef IDs
  orderHistory: string[]; // order IDs
}

export interface Review {
  id: string;
  orderId: string;
  chefId: string;
  dinerId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Tier requirements
export const TIER_REQUIREMENTS: Record<ChefTier, { orders: number; rating: number; label: string; icon: string }> = {
  home_cook: { orders: 0, rating: 0, label: 'Home Cook', icon: '🍽️' },
  rising: { orders: 50, rating: 4.0, label: 'Rising Chef', icon: '⭐' },
  gold: { orders: 200, rating: 4.5, label: 'Gold Chef', icon: '🥇' },
  diamond: { orders: 500, rating: 4.8, label: 'Diamond Chef', icon: '💎' },
  platinum: { orders: 1000, rating: 4.9, label: 'Platinum Chef', icon: '👑' },
};

// Price tier info
export const PRICE_TIERS = {
  quick: { price: 10, label: 'Quick Plate', examples: ['Rice bowls', 'Tacos (3)', 'Sandwiches'] },
  full: { price: 15, label: 'Full Plate', examples: ['Meat + 2 sides', 'Pasta dishes', 'Curry + rice'] },
  premium: { price: 20, label: 'Premium Plate', examples: ['Specialty dishes', 'Large portions', 'Multi-course'] },
  family: { price: 35, label: 'Family Plate', examples: ['Feeds 4+', 'Party trays', 'Catering'] },
};
