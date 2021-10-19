import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./assets/suzanne.glb";

const SuzanneStandardMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  return (
    <group>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshStandardMaterial color={0xff0000} />
      </mesh>
    </group>
  );
};

export default SuzanneStandardMaterial;
