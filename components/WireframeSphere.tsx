import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import styled from "styled-components";
import { Vector3 } from "three";

import { ThemeContext } from "../theme/theme";

const CanvasContainer = styled.div`
  width: 520px;
  height: 520px;
`;

const WireframeContainer = styled.div`
  width: 520px;
  height: 520px;
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
  const { colorMode } = React.useContext(ThemeContext);
  let color = "black";

  if (colorMode === "dark") {
    color = "white";
  }

  return (
    <WireframeContainer>
      <CanvasContainer>
        <Canvas
          gl={{ antialias: false, autoClear: true, autoClearDepth: true }}
          camera={{ position: new Vector3(0, 0, 1700), far: 3000, zoom: 2 }}
        >
          <AnimatedSphere color={color} />
        </Canvas>
      </CanvasContainer>
    </WireframeContainer>
  );
};
