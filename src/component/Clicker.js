import React from "react";

export default function Clicker({ scenes, curScene, setCurScene }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        height: "fit-content",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
        zIndex: 1,
      }}
    >
      {scenes.map((scene, i) => {
        return <button onClick={() => setCurScene(i)}>{scene.name}</button>;
      })}
    </div>
  );
}
