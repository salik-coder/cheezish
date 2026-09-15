/**
 * Cheezish 2.5D Burger Layer metadata.
 *
 * Each entry describes one transparent-PNG cutout from the master reference
 * photograph. The layers stack as textured planes in R3F with small z-offsets
 * for parallax, and larger offsets during the GSAP explosion animation.
 *
 * This file is the single source of truth for layer ordering, depth, and
 * explosion parameters. The matching PNGs live in:
 *   public/images/burger-layers/
 */

export interface BurgerLayer {
  /** Stable machine-friendly identifier */
  id: string;
  /** PNG filename inside public/images/burger-layers/ */
  filename: string;
  /** Human-readable label */
  label: string;
  /** Stacking order (1 = topmost / closest to camera) */
  order: number;
  /** Z-offset in world units when assembled (positive = toward camera) */
  zOffset: number;
  /** How far this layer travels during GSAP explosion [x, y, z] */
  explosionDirection: [number, number, number];
  /** Small rotation applied during explosion [rx, ry, rz] in radians */
  explosionRotation: [number, number, number];
}

export const BURGER_LAYERS: BurgerLayer[] = [
  {
    id: "top-bun",
    filename: "01-top-bun.png",
    label: "Top Bun",
    order: 1,
    zOffset: 0.08,
    explosionDirection: [0, 0.44, 0.006],
    explosionRotation: [0, 0, 0.006],
  },
  {
    id: "sauce-top",
    filename: "02-sauce-top.png",
    label: "House Sauce",
    order: 2,
    zOffset: 0.06,
    explosionDirection: [0.008, 0.31, 0.005],
    explosionRotation: [0, 0, -0.004],
  },
  {
    id: "cheese-top",
    filename: "03-cheese-top.png",
    label: "Cheese (Top)",
    order: 3,
    zOffset: 0.04,
    explosionDirection: [-0.008, 0.23, 0.004],
    explosionRotation: [0, 0, 0.005],
  },
  {
    id: "patty-top",
    filename: "04-patty-top.png",
    label: "Patty (Top)",
    order: 4,
    zOffset: 0.02,
    explosionDirection: [0.006, 0.14, 0.003],
    explosionRotation: [0, 0, -0.003],
  },
  {
    id: "cheese-bottom",
    filename: "05-cheese-bottom.png",
    label: "Cheese (Bottom)",
    order: 5,
    zOffset: 0.0,
    explosionDirection: [0, 0, 0],
    explosionRotation: [0, 0, 0],
  },
  {
    id: "patty-bottom",
    filename: "06-patty-bottom.png",
    label: "Patty (Bottom)",
    order: 6,
    zOffset: -0.02,
    explosionDirection: [-0.006, -0.14, -0.003],
    explosionRotation: [0, 0, 0.003],
  },
  {
    id: "pickles",
    filename: "07-pickles.png",
    label: "Pickles",
    order: 7,
    zOffset: -0.04,
    explosionDirection: [0.008, -0.21, -0.004],
    explosionRotation: [0, 0, -0.005],
  },
  {
    id: "onion-lettuce",
    filename: "08-onion-lettuce.png",
    label: "Onion & Lettuce",
    order: 8,
    zOffset: -0.06,
    explosionDirection: [-0.008, -0.29, -0.005],
    explosionRotation: [0, 0, 0.004],
  },
  {
    id: "bottom-bun",
    filename: "09-bottom-bun.png",
    label: "Bottom Bun",
    order: 9,
    zOffset: -0.08,
    explosionDirection: [0, -0.42, -0.006],
    explosionRotation: [0, 0, -0.006],
  },
];

/** Image base path for Next.js public serving */
export const BURGER_LAYER_BASE_PATH = "/images/burger-layers";

/** Plane dimensions in R3F world units */
export const BURGER_PLANE_SIZE: [number, number] = [4, 4];

/** Total z-depth span of the assembled stack */
export const BURGER_DEPTH_SPAN = 0.16;
