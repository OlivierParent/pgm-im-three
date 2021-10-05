import { useRef, useState } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const [toggle, setToggle] = useState(true);
  const color = toggle ? 0xff0000 : 0x00ff00;
  const position = toggle ? [0, 0, 0] : [1, 1, 0];
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
    cubeRef.current.rotation.z += 0.01;
  });

  return (
    <mesh
      onClick={() => setToggle(!toggle)}
      position={position}
      ref={cubeRef}
      rotation={[MathUtils.degToRad(45), 0, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} opacity={0.5} transparent={true} />
    </mesh>
  );
};

export default Cube;
