import Image from "next/image";
import {
  BURGER_LAYER_BASE_PATH,
  BURGER_LAYERS,
} from "@/src/data/burgerLayers";

const FALLBACK_Y_PERCENT = [
  14, 10, 7, 4, 0, -4, -7, -10, -14,
] as const;

type IngredientExplodedFallbackProps = {
  state?: "loading" | "unavailable";
};

export function IngredientExplodedFallback({
  state = "loading",
}: IngredientExplodedFallbackProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-surface"
      data-ingredient-scene-fallback={state}
      aria-hidden="true"
    >
      <div className="absolute inset-1/4 rounded-full bg-primary/10 blur-3xl" />
      {state === "unavailable" ? (
        <div className="absolute inset-[4%] sm:inset-[6%] md:inset-[8%]">
          {BURGER_LAYERS.map((definition, index) => (
            <Image
              key={definition.id}
              src={`${BURGER_LAYER_BASE_PATH}/${definition.filename}`}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
              style={{
                zIndex: 100 - definition.order,
                transform: `translateY(${-FALLBACK_Y_PERCENT[index]}%)`,
              }}
              unoptimized
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
