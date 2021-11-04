import Image from "next/image";
import { ThemeContext } from "../theme/theme";
import { useContext } from "react";

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

export const FallbackWireframeHole = () => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Image
		src={`/img/hole-wireframe-${
        colorMode === "dark" ? "dark" : "white"
      }.jpg`}
      alt="hole wireframe"
      layout="fill"
    />
  );
};

export var FallbackWireframeSphere = () => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Image
      src={`/img/sphere-wireframe-${
        colorMode === "dark" ? "dark" : "white"
      }.jpg`}
      alt="sphere wireframe"
      layout="fill"
    />
  );
};
