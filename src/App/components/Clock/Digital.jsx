import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ClockDigital = (props) => {
  const clockRef = useRef();

  useEffect(() => {
    if (clockRef.current) {
      clockRef.current.rotation.x = MathUtils.degToRad(-30);
    }
  }, []);

  useFrame(() => {
    if (clockRef.current) {
      clockRef.current.text = new Date().toLocaleTimeString();
    }
  });

  return <Text fontSize={2} ref={clockRef} {...props} />;
};

export default ClockDigital;
