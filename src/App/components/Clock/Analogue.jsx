import { useRef } from "react";
import { DoubleSide, MathUtils } from "three";
import { Box, Circle, Cone, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import MathCircle from "../../utils/MathCircle";

const HH = 12;
const MM = 60;
const SS = 60;

const CLOCK = {
  SIZE: 3,
};

const HAND = {
  HH: {
    COLOR: 0xffffff,
    LENGTH: 0.6,
  },
  MM: {
    COLOR: 0xffffff,
    LENGTH: 0.7,
  },
  SS: {
    COLOR: 0xffcc66,
    LENGTH: 0.9,
  },
  THICKNESS: 0.02,
};

const ClockAnalogue = (props) => {
  const clockRef = useRef();
  const handHoursRef = useRef();
  const handMinutesRef = useRef();
  const handSecondsRef = useRef();

  useFrame(() => {
    const d = new Date();

    if (clockRef.current) {
      //   clockRef.current.text = new Date().toLocaleTimeString();
    }
    if (handHoursRef.current) {
      handHoursRef.current.rotation.z = MathUtils.degToRad(
        d.getHours() * -(360 / HH),
      );
    }
    if (handMinutesRef.current) {
      handMinutesRef.current.rotation.z = MathUtils.degToRad(
        d.getMinutes() * -(360 / MM),
      );
    }
    if (handSecondsRef.current) {
      handSecondsRef.current.rotation.z = MathUtils.degToRad(
        d.getSeconds() * -(360 / SS),
      );
    }
  });

  return (
    <group fontSize={2} ref={clockRef} {...props}>
      <group position={[0, 0, -0.01]}>
        <Circle args={[CLOCK.SIZE, 60]}>
          <meshBasicMaterial side={DoubleSide} />
        </Circle>
      </group>
      <group position={[0, -1, 0]}>
        <Text color={"black"} fontSize={0.25}>
          GraPGM
        </Text>
      </group>
      <group rotation={[90, 0, 0].map((deg) => MathUtils.degToRad(deg))}>
        {/* radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float */}
        <Cone args={[0.2, 0.5, 12]} />
      </group>
      <group rotation={[0, 0, 90].map((deg) => MathUtils.degToRad(deg))}>
        <group ref={handMinutesRef}>
          <Box
            args={[HAND.MM.LENGTH, HAND.THICKNESS * 2, HAND.THICKNESS].map(
              (value) => value * CLOCK.SIZE,
            )}
            position={[HAND.MM.LENGTH / 2, 0, HAND.THICKNESS * 1 * 1.5].map(
              (value) => value * CLOCK.SIZE,
            )}
          >
            <meshBasicMaterial color="red" />
          </Box>
        </group>
        <group ref={handHoursRef}>
          <Box
            args={[HAND.HH.LENGTH, HAND.THICKNESS * 3, HAND.THICKNESS].map(
              (value) => value * CLOCK.SIZE,
            )}
            position={[HAND.HH.LENGTH / 2, 0, HAND.THICKNESS * 2 * 1.5].map(
              (value) => value * CLOCK.SIZE,
            )}
          >
            <meshBasicMaterial color="green" />
          </Box>
        </group>
        <group ref={handSecondsRef}>
          <Box
            args={[HAND.SS.LENGTH, HAND.THICKNESS, HAND.THICKNESS].map(
              (value) => value * CLOCK.SIZE,
            )}
            position={[HAND.SS.LENGTH / 2, 0, HAND.THICKNESS * 3 * 1.5].map(
              (value) => value * CLOCK.SIZE,
            )}
          >
            <meshBasicMaterial color="blue" />
          </Box>
        </group>
      </group>
      <group>
        {Array(HH)
          .fill(null)
          .map((value, index) => {
            const c = new MathCircle(CLOCK.SIZE - 0.3);
            const angle = (index * 360) / HH + 90;
            const { x, y } = c.getCoordinates(angle);
            return (
              <Text
                color="black"
                key={index}
                position={[x, y, 0.01]}
                scale={Array(3).fill(2)}
              >
                {12 - index}
              </Text>
            );
          })}
      </group>
    </group>
  );
};

export default ClockAnalogue;
