import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Vector3 } from "three";
import theme from "../theme/theme";

const CanvasContainer = styled.div`
  width: 520px;
  height: 520px;
`;

const WireframeContainer = styled.div`
  width: 520px;
  height: 520px;
`;

function AnimatedSphere(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<any>(null!);
  useFrame((_state, _delta) => {
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[550, 20, 20]} />
      <meshStandardMaterial
        color={theme.colors.secondary}
        wireframe={true}
        wireframeLinewidth={1}
      />
    </mesh>
  );
}

export const WireframeSphere = () => {
  const zPos = 2000;
  return (
    <WireframeContainer>
      <CanvasContainer>
        <Canvas camera={{ position: new Vector3(0, 0, 1000), far: 3000 }}>
          <AnimatedSphere />
        </Canvas>
      </CanvasContainer>
    </WireframeContainer>
  );
};
