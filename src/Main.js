import React, { useState } from "react";

import "./index.css";

import { Canvas } from "@react-three/fiber";
import EyeDoc from "./EyeDoc";
import Clicker from "./component/Clicker";

export default function Main() {
  const [curScene, setCurScene] = useState(0);
  const scenes = [{ component: <EyeDoc />, name: "EyeDoc" }];

  return (
    <div>
      <Canvas
        style={{ height: "100vh", background: "black" }}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 7] }}
        position="relative"
      >
        {scenes[curScene].component}
      </Canvas>
      <Clicker scenes={scenes} curScene={curScene} setCurScene={setCurScene} />
    </div>
  );
}
