"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FoodDoodle, type DoodleKind } from '../doodles/FoodDoodles';

const emptySubscribe = () => () => {};

interface FloatingDoodleItem {
  id: string;
  kind: DoodleKind;
  color: string;
  size: number;
  startX: number;
  startY: number;
  midX: number;
  midY: number;
  endX: number;
  endY: number;
  startRotate: number;
  endRotate: number;
  duration: number;
  peakOpacity: number;
}

export function FloatingFoodDoodles() {
  const shouldReduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [doodles, setDoodles] = useState<FloatingDoodleItem[]>([]);

  const timeoutsRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const lastKindRef = useRef<DoodleKind | null>(null);
  const lastRouteRef = useRef<number | null>(null);

  const removeDoodle = useCallback((id: string) => {
    const timeout = timeoutsRef.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id);
    }
    setDoodles((prev) => prev.filter((d) => d.id !== id));
  }, []);

  const createRandomDoodle = useCallback((): FloatingDoodleItem | null => {
    if (typeof window === 'undefined') return null;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const isMobile = vw < 640;
    const isTablet = vw >= 640 && vw < 1024;

    // Responsive sizing matching specification
    let size: number;
    let peakOpacity: number;

    if (isMobile) {
      size = Math.round(55 + Math.random() * 30); // 55px - 85px
      peakOpacity = Number((0.15 + Math.random() * 0.08).toFixed(2)); // 0.15 - 0.23
    } else if (isTablet) {
      size = Math.round(75 + Math.random() * 40); // 75px - 115px
      peakOpacity = Number((0.18 + Math.random() * 0.12).toFixed(2)); // 0.18 - 0.30
    } else {
      size = Math.round(95 + Math.random() * 50); // 95px - 145px
      peakOpacity = Number((0.20 + Math.random() * 0.14).toFixed(2)); // 0.20 - 0.34
    }

    // Food doodle kind: burger, pizza, sandwich prioritized, with occasional hotdog
    const kinds: DoodleKind[] = ['burger', 'pizza', 'sandwich', 'burger', 'pizza', 'sandwich', 'hotdog'];
    const availableKinds = kinds.filter((k) => k !== lastKindRef.current);
    const kind = availableKinds[Math.floor(Math.random() * availableKinds.length)];
    lastKindRef.current = kind;

    // Palette: Off-white cream (#F5EFE2), warm light beige (#EEDCC6), or Brand Yellow (#FFC928)
    const colors = ['#F5EFE2', '#EEDCC6', '#FFC928'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Off-screen boundary margins & safe content zones
    const margin = size + 60;
    const minY = Math.max(105, vh * 0.15); // keep clear of top navbar
    const maxY = vh * 0.88;

    // 6 Cinematic routes through the viewport
    // 0: left -> right
    // 1: right -> left
    // 2: bottom-left -> top-right
    // 3: top-right -> bottom-left
    // 4: bottom-right -> upper-left
    // 5: upper-left -> lower-right
    const availableRoutes = [0, 1, 2, 3, 4, 5].filter((r) => r !== lastRouteRef.current);
    const route = availableRoutes[Math.floor(Math.random() * availableRoutes.length)];
    lastRouteRef.current = route;

    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let midX = 0;
    let midY = 0;

    switch (route) {
      case 0: { // left edge -> right edge
        startX = -margin;
        endX = vw + margin;
        startY = minY + Math.random() * (maxY - minY);
        endY = Math.max(minY, Math.min(maxY, startY + (Math.random() - 0.5) * 140));
        midX = vw * 0.5;
        midY = (startY + endY) / 2 + (Math.random() - 0.5) * 50;
        break;
      }
      case 1: { // right edge -> left edge
        startX = vw + margin;
        endX = -margin;
        startY = minY + Math.random() * (maxY - minY);
        endY = Math.max(minY, Math.min(maxY, startY + (Math.random() - 0.5) * 140));
        midX = vw * 0.5;
        midY = (startY + endY) / 2 + (Math.random() - 0.5) * 50;
        break;
      }
      case 2: { // bottom-left -> top-right
        startX = -margin + Math.random() * (vw * 0.2);
        startY = vh + margin;
        endX = vw + margin;
        endY = minY + Math.random() * (vh * 0.35);
        midX = vw * 0.5;
        midY = (startY + endY) / 2 + (Math.random() - 0.5) * 40;
        break;
      }
      case 3: { // top-right -> bottom-left
        startX = vw + margin;
        startY = minY + Math.random() * (vh * 0.35);
        endX = -margin + Math.random() * (vw * 0.2);
        endY = vh + margin;
        midX = vw * 0.5;
        midY = (startY + endY) / 2 + (Math.random() - 0.5) * 40;
        break;
      }
      case 4: { // bottom-right -> upper-left
        startX = vw + margin - Math.random() * (vw * 0.2);
        startY = vh + margin;
        endX = -margin;
        endY = minY + Math.random() * (vh * 0.35);
        midX = vw * 0.5;
        midY = (startY + endY) / 2 + (Math.random() - 0.5) * 40;
        break;
      }
      case 5: { // upper-left -> lower-right
        startX = -margin;
        startY = minY + Math.random() * (vh * 0.35);
        endX = vw + margin - Math.random() * (vw * 0.2);
        endY = vh + margin;
        midX = vw * 0.5;
        midY = (startY + endY) / 2 + (Math.random() - 0.5) * 40;
        break;
      }
    }

    // Subtle rotation between -25deg and +25deg
    const startRotate = Math.round((Math.random() * 50) - 25);
    const endRotate = Math.round((Math.random() * 50) - 25);

    // Cinematic travel duration: 5.5s to 7.8s
    const duration = Number((5.5 + Math.random() * 2.3).toFixed(2));

    return {
      id: `food-doodle-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      kind,
      color,
      size,
      startX: Math.round(startX),
      startY: Math.round(startY),
      midX: Math.round(midX),
      midY: Math.round(midY),
      endX: Math.round(endX),
      endY: Math.round(endY),
      startRotate,
      endRotate,
      duration,
      peakOpacity,
    };
  }, []);

  const spawnDoodle = useCallback(() => {
    if (typeof window === 'undefined') return;

    setDoodles((prev) => {
      // Never flood screen - maximum simultaneous doodles: 2
      if (prev.length >= 2) {
        return prev;
      }

      const nextDoodle = createRandomDoodle();
      if (!nextDoodle) return prev;

      // Safety timeout ensuring DOM removal even if tab is backgrounded
      const safetyTimeout = setTimeout(() => {
        removeDoodle(nextDoodle.id);
      }, Math.ceil((nextDoodle.duration + 2) * 1000));
      timeoutsRef.current.set(nextDoodle.id, safetyTimeout);

      return [...prev, nextDoodle];
    });
  }, [createRandomDoodle, removeDoodle]);

  useEffect(() => {
    if (!mounted || shouldReduceMotion) return;

    let active = true;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const scheduleNext = (delayMs: number) => {
      if (!active) return;
      timerId = setTimeout(() => {
        if (!active) return;
        spawnDoodle();

        // Approximately every 7s with small safe variation (6.5s – 8s; slightly longer on mobile)
        const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const isMobile = vw < 640;
        const nextDelay = isMobile
          ? 7200 + Math.random() * 1600
          : 6500 + Math.random() * 1500;

        scheduleNext(nextDelay);
      }, delayMs);
    };

    // Initial spawn: starts gracefully shortly after mount (approx 2s - 3s)
    const initialDelay = 2200 + Math.random() * 1200;
    scheduleNext(initialDelay);

    const timeouts = timeoutsRef.current;

    return () => {
      active = false;
      if (timerId) clearTimeout(timerId);
      timeouts.forEach((t) => clearTimeout(t));
      timeouts.clear();
    };
  }, [mounted, shouldReduceMotion, spawnDoodle]);

  // Disable completely if user prefers reduced motion or before client mount
  if (!mounted || shouldReduceMotion) {
    return null;
  }

  return (
    <div
      className="ad-floating-food-overlay"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 25,
      }}
    >
      {doodles.map((doodle) => (
        <motion.div
          key={doodle.id}
          initial={{
            x: doodle.startX,
            y: doodle.startY,
            rotate: doodle.startRotate,
            opacity: 0,
          }}
          animate={{
            x: [doodle.startX, doodle.midX, doodle.endX],
            y: [doodle.startY, doodle.midY, doodle.endY],
            rotate: [doodle.startRotate, doodle.endRotate],
            opacity: [0, doodle.peakOpacity, doodle.peakOpacity, 0],
          }}
          transition={{
            x: {
              duration: doodle.duration,
              ease: 'linear',
              times: [0, 0.5, 1],
            },
            y: {
              duration: doodle.duration,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
            },
            rotate: {
              duration: doodle.duration,
              ease: 'linear',
            },
            opacity: {
              duration: doodle.duration,
              ease: 'easeInOut',
              times: [0, 0.15, 0.85, 1],
            },
          }}
          onAnimationComplete={() => removeDoodle(doodle.id)}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: doodle.size,
            height: doodle.size,
            color: doodle.color,
            pointerEvents: 'none',
            userSelect: 'none',
            willChange: 'transform, opacity',
          }}
        >
          <FoodDoodle kind={doodle.kind} className="w-full h-full" strokeWidth={2.2} />
        </motion.div>
      ))}
    </div>
  );
}

