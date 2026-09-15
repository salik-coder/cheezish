import { MenuItem, MenuCategory } from '../types/menu';

export const MENU_CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: 'signature-burgers', label: 'Signature Burgers' },
  { id: 'loaded-fries', label: 'Loaded Fries' },
  { id: 'deals', label: 'Deals' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' },
];

export const menuData: MenuItem[] = [
  // Signature Burgers
  {
    id: 'the-cheezish',
    name: 'The Cheezish',
    category: 'signature-burgers',
    description: 'Our signature smash patty with aged cheddar, house sauce, and pickles on a toasted brioche bun.',
    price: 9.95,
    image: '/images/menu/the-cheezish.jpg',
    featured: true,
  },
  {
    id: 'double-melt',
    name: 'Double Melt',
    category: 'signature-burgers',
    description: 'Two smashed patties overflowing with melted cheddar and caramelized onions.',
    price: 12.95,
    image: '/images/menu/double-melt.jpg',
    featured: true,
  },
  {
    id: 'inferno',
    name: 'Inferno',
    category: 'signature-burgers',
    description: 'Spicy smash patty with pepper jack, jalapeños, and fiery hot sauce.',
    price: 10.95,
    image: '/images/menu/inferno.jpg',
    spicy: true,
    featured: true,
  },
  {
    id: 'plant-cheezish',
    name: 'Plant Cheezish',
    category: 'signature-burgers',
    description: 'A delicious plant-based patty with a vegan cheese substitute and fresh lettuce.',
    price: 11.50,
    vegetarian: true,
  },

  // Loaded Fries
  {
    id: 'classic-fries',
    name: 'Classic Fries',
    category: 'loaded-fries',
    description: 'Crispy golden fries tossed in our secret demo seasoning.',
    price: 3.50,
    vegetarian: true,
  },
  {
    id: 'cheese-fries',
    name: 'Cheese Fries',
    category: 'loaded-fries',
    description: 'Crispy fries smothered in our signature warm cheese sauce.',
    price: 5.50,
    vegetarian: true,
  },
  {
    id: 'inferno-fries',
    name: 'Inferno Fries',
    category: 'loaded-fries',
    description: 'Fries loaded with jalapeños, spicy mayo, and melted cheese.',
    price: 6.50,
    spicy: true,
    vegetarian: true,
  },

  // Deals
  {
    id: 'solo-combo',
    name: 'Solo Combo',
    category: 'deals',
    description: 'Any signature burger, classic fries, and a standard drink.',
    price: 14.95,
  },
  {
    id: 'duo-feast',
    name: 'Duo Feast',
    category: 'deals',
    description: 'Two signature burgers, two portions of loaded fries, and two drinks.',
    price: 28.95,
  },

  // Drinks
  {
    id: 'cola',
    name: 'Classic Cola',
    category: 'drinks',
    description: 'Refreshing sparkling cola.',
    price: 2.50,
    vegetarian: true,
  },
  {
    id: 'lemonade',
    name: 'House Lemonade',
    category: 'drinks',
    description: 'Freshly prepared cloudy lemonade.',
    price: 3.00,
    vegetarian: true,
  },
  {
    id: 'milkshake-vanilla',
    name: 'Vanilla Shake',
    category: 'drinks',
    description: 'Thick hand-spun vanilla milkshake.',
    price: 4.50,
    vegetarian: true,
  },

  // Desserts
  {
    id: 'choc-brownie',
    name: 'Warm Brownie',
    category: 'desserts',
    description: 'Rich chocolate brownie served with a scoop of vanilla ice cream.',
    price: 5.50,
    vegetarian: true,
  },
  {
    id: 'cheesecake',
    name: 'Classic Cheesecake',
    category: 'desserts',
    description: 'New York style vanilla cheesecake with a biscuit base.',
    price: 5.95,
    vegetarian: true,
  },
];

// Data Helpers
export function getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuData.filter((item) => item.category === category);
}

export function getFeaturedMenuItems(): MenuItem[] {
  return menuData.filter((item) => item.featured);
}
