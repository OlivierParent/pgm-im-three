import { MathUtils } from "three";
import { Plane, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import suzanneGlb from "./assets/suzanne.glb";

const SuzannePhysicalMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  const { dithering, opacity, transparent } = useControls("Material", {
    dithering: { label: "Dithering", value: false },
    opacity: { label: "Opacity", max: 1, min: 0, value: 1 },
    transparent: { label: "Transparent", value: false },
  });

  const {
    color,
    emissive,
    emissiveIntensity,
    metalness,
    refractionRatio,
    roughness,
    wireframe,
  } = useControls("StandardMaterial", {
    color: { label: "Color", value: "#ffffff" },
    emissive: { label: "Emissive", value: "#000000" },
    emissiveIntensity: {
      label: "Emissive Intensity",
      max: 5,
      min: 0,
      value: 1,
    },
    metalness: { label: "Metalness", max: 1, min: 0, value: 0 },
    refractionRatio: {
      label: "Refraction Ratio",
      max: 2,
      min: 0,
      value: 0.98,
    },
    roughness: { label: "Roughness", max: 1, min: 0, value: 1 },
    wireframe: { label: "Wireframe", value: false },
  });

  const {
    clearcoat,
    clearcoatRoughness,
    ior,
    reflectivity,
    sheen,
    sheenRoughness,
    sheenTint,
    specularIntensity,
    specularTint,
    thickness,
    transmission,
  } = useControls("Physical Material", {
    clearcoat: { label: "Clearcoat", max: 1, min: 0, value: 0 },
    clearcoatRoughness: {
      label: "Clearcoat Roughness",
      max: 1,
      min: 0,
      value: 0,
    },
    ior: { label: "Index of Refraction", max: 2.333, min: 1, value: 1.5 },
    reflectivity: { label: "Reflectivity", max: 1, min: 0, value: 0.5 },
    sheen: { label: "Sheen", max: 1, min: 0, value: 0 },
    sheenRoughness: { label: "Sheen Roughness", max: 1, min: 0, value: 1 },
    sheenTint: { label: "Sheen Tint", value: "#ffffff" },
    specularIntensity: {
      label: "Specular Intensity",
      max: 1,
      min: 0,
      value: 1,
    },
    specularTint: { label: "Specular Tint", value: "#ffffff" },
    thickness: { label: "Thickness", max: 10, min: 0, value: 0.01 },
    transmission: { label: "Transmission", max: 1, min: 0, value: 0 },
  });

  return (
    <group>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshPhysicalMaterial
          color={color}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          dithering={dithering}
          ior={ior}
          metalness={metalness}
          opacity={opacity}
          reflectivity={reflectivity}
          refractionRatio={refractionRatio}
          roughness={roughness}
          transparent={transparent}
          sheen={sheen}
          sheenRoughness={sheenRoughness}
          sheenTint={sheenTint}
          specularIntensity={specularIntensity}
          specularTint={specularTint}
          thickness={thickness}
          transmission={transmission}
          wireframe={wireframe}
        />
      </mesh>
      <Plane
        args={[2, 2]}
        position={[0, 0, -1]}
        rotation={[0, 0, 45].map((v) => MathUtils.degToRad(v))}
      />
    </group>
  );
};

export default SuzannePhysicalMaterial;
