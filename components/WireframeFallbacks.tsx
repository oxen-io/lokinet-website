import Image from "next/image";
import { ThemeContext } from "../theme/theme";
import { useContext, useEffect, useState } from "react";

export function IsWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

// WebGL can only be detected in the browser, so server and hydration renders both start from the fallback.
export function useIsWebGLAvailable(): boolean {
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => setIsAvailable(IsWebGLAvailable()), []);
  return isAvailable;
}

export const FallbackWireframeHole = () => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Image
      src={`/img/hole-wireframe-${colorMode === "dark" ? "dark" : "light"}.jpg`}
      alt="hole wireframe"
      fill
    />
  );
};

export const FallbackWireframeSphere = () => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Image
      src={`/img/sphere-wireframe-${
        colorMode === "dark" ? "dark" : "light"
      }.jpg`}
      alt="sphere wireframe"
      fill
    />
  );
};
