import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import normalsGlb from "./normals.glb";

const Normals = () => {
  const { scene } = useGLTF(normalsGlb, true);
  const normalsRef = useRef();

  useFrame(() => {
    if (normalsRef.current) {
      normalsRef.current.rotation.x += 0.02;
    }
  });

  return <primitive object={scene} ref={normalsRef} />;
};

export default Normals;
