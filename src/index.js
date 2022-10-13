import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Canvas
      style={{ height: "100vh", background: "black" }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 7] }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();