import { useGLTF, useNormalTexture } from "@react-three/drei";

import suzanneGlb from "./assets/suzanne.glb";

const SuzanneNormalTexture = () => {
  const { nodes } = useGLTF(suzanneGlb, true);
  const [normalMap] = useNormalTexture(
    8, // https://github.com/emmelleppi/normal-maps/blob/master/normals.json
    {
      anisotropy: 8,
      offset: [0, 0],
      repeat: [10, 10],
    },
  );

  return (
    <group>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshStandardMaterial color={0xff0000} normalMap={normalMap} />
      </mesh>
    </group>
  );
};

export default SuzanneNormalTexture;
