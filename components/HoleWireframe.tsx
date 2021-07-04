// import {
//   Scene,
//   WebGLRenderer,
//   PerspectiveCamera,
//   InstancedMesh,
//   InstancedBufferAttribute,
//   CylinderBufferGeometry,
//   MeshBasicMaterial,
//   BackSide,
// } from "https://unpkg.com/three@0.121.1/build/three.module.js";

// const instanceCount = 1;
// const time = { value: 0 };
// const width = document.getElementById("container").offsetWidth;
// const height = width;
// const geom = new CylinderBufferGeometry(1, 1, 1, 30, 30, true);
// const indexes = [...Array(instanceCount)].map((_, i) => i);
// geom.setAttribute(
//   "index",
//   new InstancedBufferAttribute(new Float32Array(indexes), 1)
// );

// const mat = new MeshBasicMaterial({
//   color: 0x000000,
//   // side: BackSide,
//   wireframe: true,
// });

// const vertexCode = `
//         uniform float t;
//         attribute float index;
//         varying vec3 vPos;
//         vec4 vert(vec4 p) {
//             vPos = p.xyz;
//             float y = p.y + 0.5;
//             p.xz *= 0.1 + pow(y, 10.0 + sin(t*0.3)*7.0)*20.0;
//             p.y *= 5.;
//             return p;
//         }
//     `;

// const fragmentCode = `
//         varying vec3 vPos;
//         vec4 frag() {
//             return vec4(1.);
//         }
//     `;

// mat.onBeforeCompile = (s) => {
//   const c = "#include <common>";

//   s.vertexShader = s.vertexShader
//     .split(c)
//     .join(`\n${vertexCode}\n${c}`)
//     .split("#include <project_vertex>")
//     .join(
//       `gl_Position=projectionMatrix*modelViewMatrix*vert(vec4(transformed,1.0));`
//     );

//   s.uniforms.t = time;
// };

// const mesh = new InstancedMesh(geom, mat, instanceCount);
// // threejs boilerplate
// mesh.material.color.setHex(0x000000);
// const scene = new Scene();
// scene.add(mesh);

// const camera = new PerspectiveCamera();
// camera.position.set(3, 3, 3);
// camera.lookAt(0, 0.5, 0);

// const renderer = new WebGLRenderer({ alpha: true, antialias: true });
// renderer.setClearColor(0xffffff);
// document.getElementById("container").appendChild(renderer.domElement);

// requestAnimationFrame(function render(t) {
//   if (renderer.width !== innerWidth || renderer.height !== innerHeight) {
//     renderer.setSize(width, 298);
//     camera.aspect = innerWidth / innerHeight;
//     camera.updateProjectionMatrix();
//   }
//   time.value = t / 1000;
//   renderer.render(scene, camera);
//   requestAnimationFrame(render);
// });

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../theme/theme";

const CanvasContainer = styled.div`
  width: 1040px;
  height: 1040px;
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
      <sphereGeometry args={[300, 20, 20]} />
      <meshStandardMaterial
        color="var(--color-text)"
        wireframe={true}
        wireframeLinewidth={1}
      />
    </mesh>
  );
}

export const WireframeSphere = () => {
  return (
    <WireframeContainer>
      <CanvasContainer>
        <Canvas>
          <AnimatedSphere />
        </Canvas>
      </CanvasContainer>
    </WireframeContainer>
  );
};
