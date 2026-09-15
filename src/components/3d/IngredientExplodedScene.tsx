"use client";

import {
  Component,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";
import { IngredientExplodedFallback } from "./IngredientExplodedFallback";

const IngredientExplodedCanvas = dynamic(
  () => import("./IngredientExplodedCanvas"),
  {
    loading: () => <IngredientExplodedFallback />,
    ssr: false,
  },
);

type IngredientSceneErrorBoundaryProps = {
  children: ReactNode;
};

type IngredientSceneErrorBoundaryState = {
  hasError: boolean;
};

class IngredientSceneErrorBoundary extends Component<
  IngredientSceneErrorBoundaryProps,
  IngredientSceneErrorBoundaryState
> {
  state: IngredientSceneErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): IngredientSceneErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      "Cheezish ingredient exploded scene could not render.",
      error,
      errorInfo,
    );
  }

  render() {
    if (this.state.hasError) {
      return <IngredientExplodedFallback state="unavailable" />;
    }

    return this.props.children;
  }
}

export function IngredientExplodedScene() {
  const [supportsWebGL, setSupportsWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const testCanvas = document.createElement("canvas");
      const options: WebGLContextAttributes = {
        failIfMajorPerformanceCaveat: true,
      };
      const context =
        testCanvas.getContext("webgl2", options) ??
        testCanvas.getContext("webgl", options);

      setSupportsWebGL(Boolean(context));
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="pointer-events-none relative h-full w-full overflow-hidden rounded-card border border-white/5 bg-surface"
      data-testid="ingredient-exploded-scene"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-primary/5 blur-3xl" />
      {supportsWebGL === false ? (
        <IngredientExplodedFallback state="unavailable" />
      ) : supportsWebGL === null ? (
        <IngredientExplodedFallback />
      ) : (
        <IngredientSceneErrorBoundary>
          <IngredientExplodedCanvas />
        </IngredientSceneErrorBoundary>
      )}
    </div>
  );
}
