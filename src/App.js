import "./App.css";
import { useFrame } from "@react-three/fiber";
import Box from "./component/Box";
import { cloneElement, createRef, useRef, useState } from "react";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  GodRays,
  Grid,
  Noise,
  ShockWave,
  Vignette,
} from "@react-three/postprocessing";

function App() {
  const BOXES = 10;
  let refs = useRef([]);
  refs.current = new Array(Math.pow(BOXES, 3))
    .fill()
    .map((_, i) => refs.current[i] || createRef());

  useFrame(({ clock }) => {
    // console.log("refs.current", refs.current);
    refs.current.forEach((ref, i) => {
      const x = i % BOXES;
      const y = Math.floor(i / BOXES);
      const t = clock.getElapsedTime();
      ref.current.position.x = Math.sin(x / 1.5 + t / 0.5) * 3;
      ref.current.position.y = Math.cos(y / 2 + t / 2) * 3;
      ref.current.rotation.x = t;
    });
  });

  const grid = Array(BOXES)
    .fill()
    .map(() =>
      Array(BOXES)
        .fill(0)
        .map(() => Array(BOXES).fill(0))
    );

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[10, -10, -10]} />
      {grid.map((row, i) =>
        row.map((col, j) =>
          col.map((cell, k) => {
            return (
              <Box
                innerRef={refs.current[i * BOXES * BOXES + j * BOXES + k]}
                key={`${i}-${j}-${k}`}
                dim={0.1}
                pos={[
                  i - grid.length / 2,
                  j - row.length / 2,
                  k - col.length / 2,
                ]}
              />
            );
          })
        )
      )}

      <EffectComposer>
        <Grid />
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.2} height={200} />
        <ChromaticAberration offset={[0.012, 0.01]} />
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
    </>
  );
}

export default App;
