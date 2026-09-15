"use client";

import { useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {
  LinearFilter,
  LinearMipmapLinearFilter,
  SRGBColorSpace,
} from "three";
import {
  BURGER_LAYER_BASE_PATH,
  BURGER_LAYERS,
} from "@/src/data/burgerLayers";
import { BurgerLayer } from "./BurgerLayer";

const texturePaths = BURGER_LAYERS.map(
  ({ filename }) => `${BURGER_LAYER_BASE_PATH}/${filename}`,
);

const EXPLODED_Y_POSITIONS = [
  0.62, 0.45, 0.31, 0.17, 0, -0.17, -0.3, -0.44, -0.62,
] as const;

function getLayout(width: number, height: number) {
  if (height < 600) {
    return { scale: 1, separationScale: 0.62, y: -0.03 };
  }

  if (width < 450) {
    return { scale: 0.54, separationScale: 0.82, y: 0 };
  }

  return { scale: 0.9, separationScale: 1, y: 0 };
}

export function IngredientExplodedBurger() {
  const textures = useTexture(texturePaths);
  const { width, height } = useThree((state) => state.size);
  const invalidate = useThree((state) => state.invalidate);
  const layout = getLayout(width, height);

  useEffect(() => {
    textures.forEach((texture) => {
      texture.colorSpace = SRGBColorSpace;
      texture.minFilter = LinearMipmapLinearFilter;
      texture.magFilter = LinearFilter;
      texture.generateMipmaps = true;
      texture.needsUpdate = true;
    });
    invalidate();
  }, [invalidate, textures]);

  return (
    <group
      name="ingredient-section-exploded-burger"
      position={[0, layout.y, 0]}
      scale={layout.scale}
    >
      {BURGER_LAYERS.map((definition, index) => (
        <group
          key={definition.id}
          name={`ingredient-section-${definition.id}`}
          position={[0, EXPLODED_Y_POSITIONS[index] * layout.separationScale, 0]}
        >
          <BurgerLayer
            definition={definition}
            meshRef={() => undefined}
            texture={textures[index]}
          />
        </group>
      ))}
    </group>
  );
}
