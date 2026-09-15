export type MenuCategory = 'signature-burgers' | 'loaded-fries' | 'deals' | 'drinks' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  image?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  featured?: boolean;
}

