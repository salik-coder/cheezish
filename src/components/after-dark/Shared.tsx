import Image from 'next/image';
import type { ReactNode } from 'react';
import Link from 'next/link';

export function FoodDrawing({ kind = 'burger', className = '' }: { kind?: 'burger' | 'pizza' | 'sandwich'; className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'burger' ? <><path d="M7 21c0-9 7-14 17-14s17 5 17 14H7Zm0 7h34M9 34h30l-3 7H12l-3-7Z"/><path d="m10 27 7 5 7-5 7 5 7-5M18 13l1 1m10-1 1 1"/></> : kind === 'pizza' ? <><path d="m8 40 9-33c10 1 20 6 25 14L8 40ZM17 12c9 1 16 5 21 12"/><circle cx="21" cy="23" r="2.5"/><circle cx="17" cy="33" r="2"/></> : <><path d="m5 25 18-16 20 16-18 14L5 25Z"/><path d="m9 29 16 13 14-12M9 23l15 10 15-10M19 17l3 3m6 3 3 2"/></>}
  </svg>;
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
