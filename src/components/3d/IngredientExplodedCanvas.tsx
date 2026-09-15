"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { IngredientExplodedBurger } from "./IngredientExplodedBurger";
import { IngredientExplodedFallback } from "./IngredientExplodedFallback";

export default function IngredientExplodedCanvas() {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ fov: 35, near: 0.1, far: 30, position: [0, 0, 7] }}
      dpr={[1, 1.25]}
      fallback={<IngredientExplodedFallback state="unavailable" />}
      frameloop="demand"
      gl={{
        alpha: true,
        antialias: true,
        failIfMajorPerformanceCaveat: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0);
        gl.domElement.dataset.ingredientSceneReady = "true";
      }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <IngredientExplodedBurger />
      </Suspense>
    </Canvas>
  );
}

