"use client";

import type { Ref } from "react";
import type { Mesh, Texture } from "three";
import type { BurgerLayer as BurgerLayerDefinition } from "@/src/data/burgerLayers";
import { BURGER_PLANE_SIZE } from "@/src/data/burgerLayers";

type BurgerLayerProps = {
  definition: BurgerLayerDefinition;
  meshRef: Ref<Mesh>;
  texture: Texture;
};

export function BurgerLayer({ definition, meshRef, texture }: BurgerLayerProps) {
  return (
    <mesh
      ref={meshRef}
      name={`burger-layer-${definition.id}`}
      position={[0, 0, definition.zOffset]}
      renderOrder={100 - definition.order}
    >
      <planeGeometry args={BURGER_PLANE_SIZE} />
      <meshBasicMaterial
        map={texture}
        alphaTest={0.02}
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
        transparent
      />
    </mesh>
  );
}
