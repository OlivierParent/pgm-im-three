import { DoubleSide, Vector2 } from "three";
import { useTexture } from "@react-three/drei";

import uvGrid from "./UV_Grid_Sm.jpg";

const Image = () => {
  const texture = useTexture(uvGrid);
  texture.offset = new Vector2(0, 0);
  texture.repeat = new Vector2(0.5, 0.5);

  return (
    <mesh>
      <meshStandardMaterial center map={texture} side={DoubleSide} />
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
};

export default Image;
