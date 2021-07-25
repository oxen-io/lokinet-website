import { Canvas, useFrame } from "@react-three/fiber";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Shader, Vector3 } from "three";

import { ThemeContext } from "../theme/theme";
import { Flex } from "./flex/Flex";
import Icon from "../components/icons/Icon";

const CanvasContainer = styled.div`
  width: 448px;
  height: 298px;
  max-width: 100%;
`;

const WireframeContainer = styled.div`
  width: 448px;
  height: 298px;
  max-width: 100%;

  border: var(--color-text) solid 1px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Title = styled.div`
  font-family: "Roboto" sans-serif;
  font-size: 15px;
  flex-grow: 1;
`;

const FlexTitle = styled.div`
  display: flex;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: var(--color-text) solid 1px;
  border-bottom: none;
  align-items: center;
`;

const Svg = styled(Icon)`
  width: 24px;
  height: auto;
  color: var(--color-text);
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(45deg);
`;

const SvgPlusTinyIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </Svg>
);

function AnimatedHole(
  props: JSX.IntrinsicElements["mesh"] & { color: string }
) {
  const uniforms = useMemo(
    () => ({
      time: { value: 0.0 },
    }),
    []
  );

  const colorArray = new Float32Array(1);
  useFrame((state, delta) => {
    uniforms.time.value = uniforms.time.value + delta;
    state.camera.lookAt(0, 0.5, 0);
    state.camera.updateProjectionMatrix();
  });

  const oBC = useCallback(
    (s: Shader) => {
      const c = "#include <common>";

      const vertexCode = `
        uniform float t;
        attribute float index;
        varying vec3 vPos;
        vec4 vert(vec4 p) {
            vPos = p.xyz;
            float y = p.y + 0.5;
            p.xz *= 0.1 + pow(y, 10.0 + sin(t*0.3)*7.0)*20.0;
            p.y *= 5.;
            return p;
        }
    `;

      s.vertexShader = s.vertexShader
        .split(c)
        .join(`\n${vertexCode}\n${c}`)
        .split("#include <project_vertex>")
        .join(
          `gl_Position=projectionMatrix*modelViewMatrix*vert(vec4(transformed,1.0));`
        );

      s.uniforms.t = uniforms.time;
    },
    [uniforms.time]
  );

  return (
    <instancedMesh count={1}>
      <cylinderBufferGeometry attach="geometry" args={[1, 1, 1, 30, 30, true]}>
        <instancedBufferAttribute
          args={[colorArray, 1]}
          attachObject={["attributes", "color"]}
        />
      </cylinderBufferGeometry>
      <meshBasicMaterial
        color={props.color}
        wireframe={true}
        attach="material"
        onBeforeCompile={oBC}
      />
    </instancedMesh>
  );
}

export const HoleWireFrame = () => {
  const { colorMode } = React.useContext(ThemeContext);
  let color = "black";

  if (colorMode === "dark") {
    color = "white";
  }

  return (
    <Flex maxWidth="100%" flexGrow={1} alignSelf="flex-end">
      <FlexTitle>
        <Title>LOKINET</Title>
        <SvgPlusTinyIcon />
      </FlexTitle>
      <WireframeContainer>
        <CanvasContainer>
          <Canvas
            gl={{ antialias: true, autoClear: true, autoClearDepth: true }}
            camera={{
              position: new Vector3(3, 3, 3),
              zoom: 1.5,
            }}
          >
            <AnimatedHole color={color} />
          </Canvas>
        </CanvasContainer>
      </WireframeContainer>
    </Flex>
  );
};
