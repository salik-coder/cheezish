import type { CSSProperties, SVGProps } from 'react';

export type DoodleKind = 'burger' | 'pizza' | 'sandwich' | 'hotdog';

export interface FoodDoodleProps extends SVGProps<SVGSVGElement> {
  kind?: DoodleKind;
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
}

export function BurgerDoodle({
  strokeWidth = 2.4,
  className = '',
  style,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      {/* Top Bun Dome */}
      <path d="M 18 47 C 17 25 30 16 50 16 C 70 16 83 25 82 47 C 82 49 18 49 18 47 Z" />
      {/* Lower-Right Bun Contour Highlight */}
      <path d="M 66 44 C 73 43 78 41 80 39" strokeWidth={strokeWidth * 0.9} />
      {/* Sesame Seeds */}
      <path d="M 33 24 Q 34 22 36 24" strokeWidth={strokeWidth * 0.8} />
      <path d="M 44 20 Q 45 18 47 20" strokeWidth={strokeWidth * 0.8} />
      <path d="M 54 19 Q 55 17 57 19" strokeWidth={strokeWidth * 0.8} />
      <path d="M 65 22 Q 66 20 68 22" strokeWidth={strokeWidth * 0.8} />
      <path d="M 27 33 Q 28 31 30 33" strokeWidth={strokeWidth * 0.8} />
      <path d="M 37 30 Q 38 28 40 30" strokeWidth={strokeWidth * 0.8} />
      <path d="M 49 28 Q 50 26 52 28" strokeWidth={strokeWidth * 0.8} />
      <path d="M 61 29 Q 62 27 64 29" strokeWidth={strokeWidth * 0.8} />
      <path d="M 72 32 Q 73 30 75 32" strokeWidth={strokeWidth * 0.8} />
      {/* Top Wavy Lettuce Layer */}
      <path d="M 15 50 C 15 53 19 54 23 51 C 27 48 31 53 36 52 C 41 50 46 54 51 53 C 56 51 61 55 66 53 C 71 51 75 55 80 52 C 84 50 86 52 85 50" />
      {/* Distinct Triangular Cheese Flap Pointing Down */}
      <path d="M 18 54 L 40 61 L 53 69 L 68 60 L 82 54" />
      <path d="M 64 61 L 71 58" strokeWidth={strokeWidth * 0.8} />
      {/* Patty Behind Cheese */}
      <path d="M 17 55 C 15 57 15 62 18 63 C 23 64 29 64 35 63" />
      <path d="M 72 63 C 77 64 82 64 83 62 C 85 60 85 56 82 55" />
      <path d="M 22 61 Q 27 62 32 61" strokeWidth={strokeWidth * 0.75} />
      <path d="M 72 61 Q 76 62 80 61" strokeWidth={strokeWidth * 0.75} />
      {/* Bottom Wavy Lettuce / Relish Layer */}
      <path d="M 15 70 C 19 73 23 71 27 69 C 31 67 35 72 40 71 C 45 70 49 73 54 72 C 59 71 64 74 69 72 C 74 70 78 74 82 72 C 84 70 86 72 86 70" />
      {/* Bottom Bun */}
      <path d="M 18 73 C 18 82 23 88 35 88 C 45 89 55 89 65 88 C 77 88 82 82 82 73" />
      {/* Bottom Bun Contour Accents */}
      <path d="M 23 81 Q 30 84 38 83" strokeWidth={strokeWidth * 0.8} />
      <path d="M 62 83 Q 70 84 77 81" strokeWidth={strokeWidth * 0.8} />
    </svg>
  );
}

export function PizzaDoodle({
  strokeWidth = 2.4,
  className = '',
  style,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      {/* Puffy Curved Outer Crust */}
      <path d="M 40 18 C 50 13 72 17 84 32 C 90 40 92 48 89 54" />
      {/* Crust Oval Slice Cross-Section at Far Right */}
      <path d="M 89 54 C 88 60 83 63 78 59 C 73 55 74 48 79 46 C 85 44 90 48 89 54 Z" />
      {/* Crust Cross-Section Speckles */}
      <circle cx="81" cy="52" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="85" cy="53" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="83" cy="57" r="0.75" fill="currentColor" stroke="none" />
      {/* Inner Ridge of Crust */}
      <path d="M 43 19 C 48 16 58 17 66 22" strokeWidth={strokeWidth * 0.8} />
      {/* Inner Crust Boundary with Pizza Body */}
      <path d="M 38 24 C 47 26 65 33 76 47" />
      <path d="M 42 26 Q 48 30 54 27 Q 62 31 70 40" strokeWidth={strokeWidth * 0.8} />
      {/* Left Cut Edge of Slice */}
      <path d="M 38 24 C 31 38 22 55 10 74" />
      {/* Lower Edge with 3 Cheese Drips */}
      <path d="M 10 74 C 11 77 15 76 16 83 C 17 87 20 86 21 81 C 22 76 25 74 27 73 L 34 68 C 36 67 36 78 38 82 C 39 84 42 84 43 81 C 44 76 45 66 47 64 L 54 60 C 57 58 58 66 60 68 C 61 70 63 70 64 67 C 66 62 70 58 78 59" />
      {/* Highlight Line Inside Center Drip */}
      <path d="M 40 73 L 40 79" strokeWidth={strokeWidth * 0.8} />
      {/* Pepperonis with Specks */}
      {/* Top Pepperoni */}
      <ellipse cx="46" cy="34" rx="7" ry="4.3" transform="rotate(-15 46 34)" />
      <path d="M 41 33 Q 46 31 51 33" strokeWidth={strokeWidth * 0.75} />
      <circle cx="44" cy="34" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="48" cy="35" r="0.75" fill="currentColor" stroke="none" />
      {/* Center Large Pepperoni */}
      <ellipse cx="63" cy="49" rx="8.5" ry="5.2" transform="rotate(-10 63 49)" />
      <circle cx="60" cy="48" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="64" cy="47" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="66" cy="51" r="0.75" fill="currentColor" stroke="none" />
      {/* Lower-Left Pepperoni */}
      <ellipse cx="36" cy="56" rx="7" ry="4.3" transform="rotate(-15 36 56)" />
      <circle cx="34" cy="55" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="38" cy="56" r="0.75" fill="currentColor" stroke="none" />
      {/* Half Pepperoni at Tip Edge */}
      <path d="M 15 67 C 15 62 21 61 23 64" />
      {/* Cheese Bubble Ring Near Upper Right */}
      <ellipse cx="64" cy="38" rx="4" ry="2.4" strokeWidth={strokeWidth * 0.8} />
    </svg>
  );
}

export function SandwichDoodle({
  strokeWidth = 2.4,
  className = '',
  style,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      {/* Foreshortened Isometric Top Bread Slice */}
      <path d="M 18 48 L 57 27 C 59 26 62 26 64 27 L 90 41 C 92 42 92 44 90 45 L 53 68 C 51 69 48 69 46 68 L 18 51 C 16 50 16 49 18 48 Z" />
      {/* Edge Thickness of Top Bread Slice */}
      <path d="M 17 51 L 17 58 C 17 59 18 60 19 61 L 49 76" />
      <path d="M 90 45 L 90 52 C 90 53 89 54 88 55 L 53 76" />
      <path d="M 50 69 L 50 77" />
      {/* Toast Speckles / Gridded Dots on Top Surface */}
      <circle cx="57" cy="33" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="66" cy="37" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="76" cy="42" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="47" cy="38" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="57" cy="43" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="67" cy="48" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="77" cy="52" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="38" cy="44" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="48" cy="49" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="58" cy="54" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="68" cy="58" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="29" cy="50" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="39" cy="54" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="49" cy="59" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="59" cy="63" r="0.8" fill="currentColor" stroke="none" />
      {/* Fillings Layer: Wavy Lettuce & Triangular Cheese Flap */}
      <path d="M 17 60 C 15 63 18 66 21 65 C 24 64 26 68 30 67 C 34 66 37 69 41 69" />
      {/* Cheese Flap Pointing Down on Front-Left */}
      <path d="M 28 67 L 34 78 L 41 71" />
      {/* Front-Right Wavy Lettuce */}
      <path d="M 52 77 C 56 75 59 79 63 76 C 67 73 71 77 75 73 C 79 70 83 74 88 68" />
      {/* Bottom Bread Slice Profile */}
      <path d="M 17 68 L 17 74 C 17 75 18 77 20 78 L 50 88 C 51 88 53 88 54 87 L 89 72 C 90 71 90 69 90 68 L 90 62" />
      <path d="M 18 68 L 49 80 L 88 64" />
      {/* Bottom Slice Accent Tick */}
      <path d="M 51 83 L 51 87" strokeWidth={strokeWidth * 0.8} />
    </svg>
  );
}

export function HotdogDoodle({
  strokeWidth = 2.4,
  className = '',
  style,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      {/* Sausage Profile */}
      <path d="M 14 41 C 10 36 14 31 21 31 C 37 29 61 44 82 58 C 87 62 88 69 81 72 C 76 74 71 73 67 70" />
      {/* Bun Profile Cradling Sausage */}
      <path d="M 21 41 C 14 44 13 54 15 61 C 19 74 37 84 56 87 C 68 88 76 82 77 74 C 78 67 75 64 70 63 C 57 60 35 49 21 41 Z" />
      {/* Looping Wavy Mustard Line */}
      <path d="M 17 36 C 21 33 22 43 27 41 C 32 39 33 50 39 48 C 45 46 47 57 54 54 C 61 51 64 63 70 60 C 74 58 75 64 79 62" />
      {/* Bun Shading / Contour Ticks */}
      <path d="M 22 58 Q 22 68 27 73" strokeWidth={strokeWidth * 0.8} />
      <path d="M 32 64 Q 33 74 39 79" strokeWidth={strokeWidth * 0.8} />
      <path d="M 45 69 Q 46 78 52 82" strokeWidth={strokeWidth * 0.8} />
      <path d="M 58 73 Q 59 79 64 83" strokeWidth={strokeWidth * 0.8} />
      {/* Specks on Bun */}
      <circle cx="20" cy="54" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="30" cy="61" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="40" cy="62" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="62" cy="68" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FoodDoodle({
  kind = 'burger',
  className = '',
  style,
  strokeWidth = 2.4,
  ...props
}: FoodDoodleProps) {
  switch (kind) {
    case 'pizza':
      return <PizzaDoodle className={className} style={style} strokeWidth={strokeWidth} {...props} />;
    case 'sandwich':
      return <SandwichDoodle className={className} style={style} strokeWidth={strokeWidth} {...props} />;
    case 'hotdog':
      return <HotdogDoodle className={className} style={style} strokeWidth={strokeWidth} {...props} />;
    case 'burger':
    default:
      return <BurgerDoodle className={className} style={style} strokeWidth={strokeWidth} {...props} />;
  }
}
