import React from "react";

export default function Box({ dim, pos, innerRef }) {
  return (
    <mesh position={pos} ref={innerRef}>
      <boxGeometry args={[dim, dim, dim]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}
