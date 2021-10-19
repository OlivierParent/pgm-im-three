import { useGLTF, useMatcapTexture } from "@react-three/drei";

import MatCap from "../../lib/MatCap";
import suzanneGlb from "./assets/suzanne.glb";

const SuzanneMatcapTexture = () => {
  const { nodes } = useGLTF(suzanneGlb, true);
  const [matcap] = useMatcapTexture(MatCap.id.GREEN, MatCap.size.XL);

  return (
    <group>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </group>
  );
};

export default SuzanneMatcapTexture;
