import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./assets/suzanne.glb";

const SuzanneToonMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  return (
    <group>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshToonMaterial />
      </mesh>
    </group>
  );
};

export default SuzanneToonMaterial;
