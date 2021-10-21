import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useControls } from "leva";
import { useHelper } from "@react-three/drei";

const LightingThreePointGui = () => {
  const { backLightColor, backLightIntensity } = useControls(
    "Lighting - Back Light",
    {
      backLightColor: { label: "Color", value: "hsl(0, 0%, 70%)" },
      backLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.75 },
    },
  );
  const { fillLightColor, fillLightIntensity } = useControls(
    "Lighting - Fill Light",
    {
      fillLightColor: { label: "Color", value: "hsl(210, 100%, 70%)" },
      fillLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.75 },
    },
  );
  const { keyLightColor, keyLightIntensity } = useControls(
    "Lighting - Key Light",
    {
      keyLightColor: { label: "Color", value: "hsl(30, 100%, 70%)" },
      keyLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.75 },
    },
  );

  const backLightRef = useRef();
  const fillLightRef = useRef();
  const keyLightRef = useRef();

  useHelper(backLightRef, SpotLightHelper, backLightColor);
  useHelper(fillLightRef, SpotLightHelper, fillLightColor);
  useHelper(keyLightRef, SpotLightHelper, keyLightColor);

  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight
        // Back Light
        castShadow={true}
        color={backLightColor}
        intensity={backLightIntensity}
        position={[4, 2, -4]}
        ref={backLightRef}
      />
      <spotLight
        // Fill Light
        castShadow={true}
        color={fillLightColor}
        intensity={fillLightIntensity}
        position={[-4, 2, 4]}
        ref={fillLightRef}
      />
      <spotLight
        // Key Light
        castShadow={true}
        color={keyLightColor}
        intensity={keyLightIntensity}
        position={[4, 2, 4]}
        ref={keyLightRef}
      />
    </>
  );
};

export default LightingThreePointGui;
