import { pageMetadata } from '@/src/data/site';
import { MenuExperience } from '@/src/components/after-dark/MenuExperience';

export const metadata = pageMetadata(
  'Menu | Cheezish',
  'Explore signature smash burgers, loaded fries, deals, drinks and desserts. GBP prices, demo orders only.',
  '/menu'
);

export default function MenuPage() {
  return (
    <main className="ad-menu-page">
      <MenuExperience />
    </main>
  );
}
