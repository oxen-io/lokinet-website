import { Canvas, useFrame } from "@react-three/fiber";
import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Shader, Vector3 } from "three";

import { ThemeContext } from "../theme/theme";

const CanvasContainer = styled.div`
  width: 520px;
  height: 520px;
`;

const WireframeContainer = styled.div`
  width: 520px;
  height: 520px;
`;

function AnimatedHole(
  props: JSX.IntrinsicElements["mesh"] & { color: string }
) {
  const meshRef = useRef<any>(null!);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const time = { value: 0 };

  const colorArray = new Float32Array(1);
  useFrame((_state, _delta) => {
    time.value = time.value + _delta;
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

      s.uniforms.t = time;
    },
    [time]
  );

  return (
    <instancedMesh ref={meshRef} count={1}>
      <cylinderBufferGeometry attach="geometry" args={[1, 1, 1, 30, 30, true]}>
        <instancedBufferAttribute
          // ref={colorAttrib}
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
    <WireframeContainer>
      <CanvasContainer>
        <Canvas
          gl={{ antialias: true, autoClear: true, autoClearDepth: true }}
          camera={{
            position: new Vector3(3, 3, 3),
          }}
        >
          <AnimatedHole color={color} />
        </Canvas>
      </CanvasContainer>
    </WireframeContainer>
  );
};
