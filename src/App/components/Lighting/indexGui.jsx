import { useRef } from "react";
import {
  DirectionalLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useControls } from "leva";
import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const LightingGui = () => {
  const {
    directionalLightColor,
    directionalLightIntensity,
    directionalLightPosition,
  } = useControls("Lighting - Directional Light", {
    directionalLightColor: { label: "Color", value: "#ffffff" },
    directionalLightIntensity: {
      label: "Intensity",
      max: 20,
      min: 0,
      value: 0.5,
    },
    directionalLightPosition: { label: "Position XZ", value: { x: 4, z: 1 } },
  });
  const { pointLightColor, pointLightIntensity, pointLightPosition } =
    useControls("Lighting - Point Light", {
      pointLightColor: { label: "Color", value: "#ffcc77" },
      pointLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.5 },
      pointLightPosition: { label: "Position XZ", value: { x: -4, z: -4 } },
    });
  const {
    spotLightColor,
    spotLightIntensity,
    spotLightPenumbra,
    spotLightPosition,
    spotLightTarget,
  } = useControls("Lighting - Spotlight", {
    spotLightColor: { label: "Color", value: "#ffcc77" },
    spotLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.5 },
    spotLightPenumbra: { label: "Penumbra", value: 0.5 },
    spotLightPosition: { label: "Position XZ", value: { x: -4, z: -4 } },
    spotLightTarget: { label: "Target XZ", value: { x: 0, z: 0 } },
  });

  const { scene } = useThree();
  const target = new Object3D();
  scene.add(target);

  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();
  const helperSize = 0.5;

  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLightColor,
  );
  useHelper(pointLightRef, PointLightHelper, helperSize, pointLightColor);
  useHelper(spotLightRef, SpotLightHelper, spotLightColor);

  useFrame(() => {
    target.translateX(spotLightTarget.x);
    target.translateZ(spotLightTarget.z);
  });

  return (
    <>
      <ambientLight color={0xffffff} intensity={0.1} />
      <directionalLight
        castShadow={true}
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[directionalLightPosition.x, 4, directionalLightPosition.z]}
        ref={directionalLightRef}
      />
      <pointLight
        castShadow={true}
        color={pointLightColor}
        intensity={pointLightIntensity}
        position={[pointLightPosition.x, 1, pointLightPosition.z]}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color={spotLightColor}
        intensity={spotLightIntensity}
        penumbra={spotLightPenumbra}
        position={[spotLightPosition.x, 4, spotLightPosition.z]}
        ref={spotLightRef}
        target={target}
      />
    </>
  );
};

export default LightingGui;
