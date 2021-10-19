import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./assets/suzanne.glb";

const Suzanne = () => {
  const { nodes, materials } = useGLTF(suzanneGlb, true);

  return (
    <group>
      <mesh geometry={nodes.Suzanne.geometry} material={materials["Paars"]} />
    </group>
  );
};

export default Suzanne;
