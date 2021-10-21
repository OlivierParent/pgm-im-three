import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";

const LightingStudioGui = () => {
  const { ambientLightIntensity } = useControls("Lighting - Ambient Light", {
    ambientLightIntensity: { label: "Intensity", max: 5, min: 0, value: 0.1 },
  });
  const { frontLightColor, frontLightIntensity } = useControls(
    "Lighting - Front Light",
    {
      frontLightColor: { label: "Color", value: "hsl(0, 0%, 100%)" },
      frontLightIntensity: {
        label: "Intensity",
        max: 2,
        min: 0,
        value: 0.4,
      },
    },
  );
  const { leftLightColor, leftLightIntensity } = useControls(
    "Lighting - Left Light",
    {
      leftLightColor: { label: "Color", value: "hsl(210, 100%, 70%)" },
      leftLightIntensity: {
        label: "Intensity",
        max: 2,
        min: 0,
        value: 1,
      },
    },
  );
  const { rightLightColor, rightLightIntensity } = useControls(
    "Lighting - Right Light",
    {
      rightLightColor: { label: "Color", value: "hsl(30, 100%, 70%)" },
      rightLightIntensity: {
        label: "Intensity",
        max: 2,
        min: 0,
        value: 1,
      },
    },
  );

  const frontLightRef = useRef();
  const leftLightRef = useRef();
  const rightLightRef = useRef();
  const helperSize = 0.5;

  useHelper(frontLightRef, DirectionalLightHelper, helperSize, frontLightColor);
  useHelper(leftLightRef, DirectionalLightHelper, helperSize, leftLightColor);
  useHelper(rightLightRef, DirectionalLightHelper, helperSize, rightLightColor);

  return (
    <>
      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight
        castShadow={true}
        color={frontLightColor}
        intensity={frontLightIntensity}
        position={[0, 2, 4]}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={true}
        color={leftLightColor}
        intensity={leftLightIntensity}
        position={[-4, 0, 0]}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={true}
        color={rightLightColor}
        intensity={rightLightIntensity}
        position={[4, 0, 0]}
        ref={rightLightRef}
      />
    </>
  );
};

export default LightingStudioGui;
