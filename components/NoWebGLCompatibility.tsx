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

export const FallbackHoleWireframe = () => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Image
      src={`/img/hole-wireframe-${colorMode === "dark" ? "dark" : "white"}.gif`}
      alt="hole wireframe"
      layout="fill"
    />
  );
};

export var FallbackSphereWireframe = () => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Image
      src={`/img/sphere-wireframe-${
        colorMode === "dark" ? "dark" : "white"
      }.gif`}
      alt="sphere wireframe"
      layout="fill"
    />
  );
};
