import { Canvas, useFrame } from "@react-three/fiber";
import {
  FallbackSphereWireframe,
  IsWebGLAvailable,
} from "./NoWebGLCompatibility";
import { useContext, useRef } from "react";

import { ThemeContext } from "../theme/theme";
import { Vector3 } from "three";
import styled from "styled-components";

const CanvasContainer = styled.div`
  position: relative;
  width: 520px;
  height: 520px;
  max-width: 100%;

  @media (max-width: 1024px) {
    max-width: calc(100vw - 2 * var(--margins-lg));
    max-height: calc(100vw - 2 * var(--margins-lg));
  }
`;

const WireframeContainer = styled.div`
  width: 520px;
  max-width: 100%;
`;

function AnimatedSphere(
  props: JSX.IntrinsicElements["mesh"] & { color: string }
) {
  const mesh = useRef<any>(null!);
  useFrame((_state, _delta) => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[550, 20, 20]} />
      <meshBasicMaterial
        color={props.color}
        wireframe={true}
        wireframeLinewidth={1}
      />
    </mesh>
  );
}

export const WireframeSphere = () => {
  const hasWebGL = IsWebGLAvailable();
  const { colorMode } = useContext(ThemeContext);
  let color = colorMode === "dark" ? "white" : "black";

  return (
    <WireframeContainer>
      <CanvasContainer>
        {hasWebGL ? (
          <Canvas
            gl={{ antialias: true, autoClear: true, autoClearDepth: true }}
            camera={{ position: new Vector3(0, 0, 1700), far: 3000, zoom: 2 }}
          >
            <AnimatedSphere color={color} />
          </Canvas>
        ) : (
          <FallbackSphereWireframe />
        )}
      </CanvasContainer>
    </WireframeContainer>
  );
};
