import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import { FoodDoodle, type DoodleKind } from '../doodles/FoodDoodles';

export function FoodDrawing({
  kind = 'burger',
  className = '',
  style,
}: {
  kind?: DoodleKind;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <FoodDoodle
      kind={kind}
      className={className}
      style={style}
    />
  );
}
export function Arrow() { return <span aria-hidden="true">↗</span>; }
export function Action({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={secondary ? 'ad-button ad-button-outline' : 'ad-button'} href={href}>{children}<Arrow /></Link>;
}
export function Photo({ src, alt, className = '', priority = false, sizes = '(min-width: 1024px) 600px, 100vw' }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={`ad-photo ${className}`}><Image src={src} alt={alt} fill sizes={sizes} preload={priority} className="ad-food-image" /></div>;
}
export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="ad-section-title"><div><p className="ad-eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</div>;
}
export function OrderFinish() {
  return <section className="ad-order ad-wrap" id="order"><FoodDrawing /><div><p className="ad-eyebrow">One more thing.</p><h2>GIVE IN TO<br />THE <em>CRAVING.</em></h2></div><div><Action href="/menu">Build a demo order</Action><p className="ad-note">Explore the menu & preview your picks.<br />Demo only. No payments or real orders.</p></div></section>;
}
