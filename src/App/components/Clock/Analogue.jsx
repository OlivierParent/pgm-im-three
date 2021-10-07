import { useRef } from "react";
import { DoubleSide, MathUtils } from "three";
import { Circle, Cone, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ClockAnalogue = (props) => {
  const clockRef = useRef();

  useFrame(() => {
    if (clockRef.current) {
      //   clockRef.current.text = new Date().toLocaleTimeString();
    }
  });

  return (
    <group fontSize={2} ref={clockRef} {...props}>
      <group position={[0, 0, -0.01]}>
        <Circle args={[1, 60]}>
          <meshBasicMaterial side={DoubleSide} />
        </Circle>
      </group>
      <group position={[0, 0.1, 0]}>
        <Text color={"black"}>GraPGM</Text>
      </group>
      <group rotation={[90, 0, 0].map((deg) => MathUtils.degToRad(deg))}>
        {/* radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float */}
        <Cone args={[0.05, 0.1]}>
          <meshBasicMaterial color="red" />
        </Cone>
      </group>
    </group>
  );
};

export default ClockAnalogue;
