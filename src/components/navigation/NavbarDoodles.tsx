import type { CSSProperties } from 'react';

type DoodleKind = 'burger' | 'pizza' | 'sandwich' | 'fries' | 'drink' | 'cheese' | 'taco' | 'hotdog';

type DoodleConfig = {
  kind: DoodleKind;
  left: string;
  top: string;
  size: number;
  rotate: number;
  opacity: number;
  mobile?: boolean;
};

const DOODLES: DoodleConfig[] = [
  { kind: 'burger', left: '1.5%', top: '-8px', size: 30, rotate: -16, opacity: 0.13 },
  { kind: 'pizza', left: '7%', top: '44px', size: 24, rotate: 22, opacity: 0.14, mobile: true },
  { kind: 'cheese', left: '14%', top: '-6px', size: 22, rotate: -12, opacity: 0.11 },
  { kind: 'drink', left: '20%', top: '38px', size: 26, rotate: 15, opacity: 0.13 },
  { kind: 'fries', left: '26%', top: '8px', size: 28, rotate: -8, opacity: 0.15, mobile: true },
  { kind: 'sandwich', left: '33%', top: '46px', size: 24, rotate: 18, opacity: 0.10 },
  { kind: 'pizza', left: '39%', top: '-7px', size: 26, rotate: -24, opacity: 0.12 },
  { kind: 'taco', left: '46%', top: '42px', size: 22, rotate: 12, opacity: 0.11 },
  { kind: 'burger', left: '52%', top: '4px', size: 25, rotate: 17, opacity: 0.10 },
  { kind: 'cheese', left: '59%', top: '48px', size: 22, rotate: -15, opacity: 0.13, mobile: true },
  { kind: 'drink', left: '65%', top: '-6px', size: 28, rotate: 21, opacity: 0.11 },
  { kind: 'fries', left: '71%', top: '40px', size: 24, rotate: -14, opacity: 0.14 },
  { kind: 'hotdog', left: '78%', top: '5px', size: 26, rotate: 16, opacity: 0.12, mobile: true },
  { kind: 'sandwich', left: '84%', top: '44px', size: 23, rotate: -20, opacity: 0.10 },
  { kind: 'taco', left: '90%', top: '-5px', size: 25, rotate: 26, opacity: 0.12 },
  { kind: 'burger', left: '95.5%', top: '40px', size: 27, rotate: -10, opacity: 0.13, mobile: true },
  { kind: 'cheese', left: '99%', top: '2px', size: 24, rotate: 18, opacity: 0.11 },
];

function DoodleSvg({ kind }: { kind: DoodleKind }) {
  switch (kind) {
    case 'burger':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 15c0-5.5 5.5-9 12-9s12 3.5 12 9H6Z" />
          <path d="M12 10h.01M18 8.5h.01M23 10h.01M15 12.5h.01M20 12.5h.01" strokeWidth="1.8" />
          <path d="M5 18.5c2 1 4-1 6 1s4-1 6 1 4-1 6 1 4-1 6 1" />
          <path d="M6 22.5h24" strokeWidth="1.8" />
          <path d="M7 25.5h22l-1.5 4.5h-19L7 25.5Z" />
        </svg>
      );
    case 'pizza':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 29L14 6c7 1.5 13.5 6 16.5 13L7 29Z" />
          <path d="M14.5 9.5c6 1.8 11.5 5.5 14 11" />
          <circle cx="17" cy="18" r="1.8" />
          <circle cx="13" cy="24" r="1.5" />
          <circle cx="21" cy="22" r="1.5" />
        </svg>
      );
    case 'sandwich':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 19L18 7l13 12-13 10L5 19Z" />
          <path d="M7 23l11 9 11-8.5" />
          <path d="M8 18l10-8 10 8" />
          <path d="M13 20l10-1" strokeDasharray="1.5 1.5" />
        </svg>
      );
    case 'fries':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 16l2.5 15h11l2.5-15H10Z" />
          <path d="M9 16c2.5 2.5 15.5 2.5 18 0" />
          <path d="M12 16V8l3-1.5V16" />
          <path d="M15.5 16V5l3.5 1v10" />
          <path d="M19.5 16V7l3.5 1.5v7.5" />
        </svg>
      );
    case 'drink':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 12l2.5 19h9l2.5-19H11Z" />
          <path d="M9 12h18" />
          <path d="M13 12c0-2 2-3 5-3s5 1 5 3" />
          <path d="M18 9V4l4-1.5" />
          <line x1="13" y1="18" x2="23" y2="18" strokeDasharray="2 2" />
        </svg>
      );
    case 'cheese':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 25L30 19L19 7L6 25Z" />
          <path d="M6 25v5l24-6v-5" />
          <circle cx="16" cy="20" r="1.8" />
          <circle cx="22" cy="17" r="1.2" />
          <circle cx="11" cy="24" r="1.2" />
        </svg>
      );
    case 'taco':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 25c0-10 10-17 23-11l-3 13c-6 2-14 1-20-2Z" />
          <path d="M11 17c3-2 8-3 12-1" />
          <circle cx="14" cy="20" r="1" fill="currentColor" />
          <circle cx="19" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    case 'hotdog':
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="12" width="24" height="12" rx="6" transform="rotate(-18 18 18)" />
          <path d="M8 18c4 3 16-3 20 0" transform="rotate(-18 18 18)" strokeDasharray="3 2" />
        </svg>
      );
  }
}

export function NavbarDoodles() {
  return (
    <div className="ad-header-doodles-bg" aria-hidden="true">
      {DOODLES.map((doodle, index) => {
        const style: CSSProperties = {
          left: doodle.left,
          top: doodle.top,
          width: `${doodle.size}px`,
          height: `${doodle.size}px`,
          transform: `rotate(${doodle.rotate}deg)`,
          opacity: doodle.opacity,
        };

        return (
          <span
            key={index}
            className={`ad-header-doodle ${doodle.mobile ? '' : 'ad-doodle-desktop-only'}`}
            style={style}
          >
            <DoodleSvg kind={doodle.kind} />
          </span>
        );
      })}
    </div>
  );
}

