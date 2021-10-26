import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Cube from "./components/Cube";
import ClockAnalogue from "./components/Clock/Analogue";
import ClockDigital from "./components/Clock/Digital";
import ImageSvg from "./components/Image/Svg";
import Lighting from "./components/Lighting";
import LightingGui from "./components/Lighting/indexGui";
import LightingStudio from "./components/Lighting/Studio";
import LightingStudioGui from "./components/Lighting/StudioGui";
import LightingThreePoint from "./components/Lighting/ThreePoint";
import LightingThreePointGui from "./components/Lighting/ThreePointGui";
import LoremIpsum from "./components/LoremIpsum";
import Suzanne from "./components/Suzanne";
import SuzanneMatcapTexture from "./components/Suzanne/MatcapTexture";
import SuzanneNormalTexture from "./components/Suzanne/NormalTexture";
import SuzannePhysicalMaterial from "./components/Suzanne/PhysicalMaterial";
import SuzanneStandardMaterial from "./components/Suzanne/StandardMaterial";
import SuzanneToonMaterial from "./components/Suzanne/ToonMaterial";

const components = [
  "Cube",
  "ClockAnalogue",
  "ClockDigital",
  "ImageSvg",
  "LoremIpsum",
  "Suzanne",
  "SuzanneMatcapTexture",
  "SuzanneNormalTexture",
  "SuzannePhysicalMaterial",
  "SuzanneStandardMaterial",
  "SuzanneToonMaterial",
];

const lightings = [
  "Lighting",
  "LightingGui",
  "LightingStudio",
  "LightingStudioGui",
  "LightingThreePoint",
  "LightingThreePointGui",
];

const Content = () => {
  const { showStats } = useControls("General", {
    showStats: {
      label: "Stats",
      value: false,
    },
  });

  const { showAxesHelper, showGridHelper, useComponent, useLighting } =
    useControls("Helpers", {
      showAxesHelper: {
        label: "Axes Helper",
        value: false,
      },
      showGridHelper: {
        label: "Grid Helper",
        value: false,
      },
      useComponent: {
        label: "Component",
        options: components,
        value: "Cube",
      },
      useLighting: {
        label: "Lighting",
        options: lightings,
        value: "LightingStudio",
      },
    });

  function showComponent(name) {
    return useComponent === name;
  }

  function showLighting(name) {
    return useLighting === name;
  }

  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      {showAxesHelper && <axesHelper />}
      {showGridHelper && <gridHelper />}
      {showStats && <Stats />}

      {showLighting("Lighting") && <Lighting />}
      {showLighting("LightingGui") && <LightingGui />}
      {showLighting("LightingStudio") && <LightingStudio />}
      {showLighting("LightingStudioGui") && <LightingStudioGui />}
      {showLighting("LightingThreePoint") && <LightingThreePoint />}
      {showLighting("LightingThreePointGui") && <LightingThreePointGui />}
      {showComponent("Cube") && <Cube />}
      {showComponent("ClockAnalogue") && <ClockAnalogue />}
      {showComponent("ClockDigital") && <ClockDigital />}
      <Suspense fallback={null}>
        {showComponent("ImageSvg") && <ImageSvg />}
        {showComponent("LoremIpsum") && <LoremIpsum />}
        {showComponent("Suzanne") && <Suzanne />}
        {showComponent("SuzanneMatcapTexture") && <SuzanneMatcapTexture />}
        {showComponent("SuzanneNormalTexture") && <SuzanneNormalTexture />}
        {showComponent("SuzannePhysicalMaterial") && (
          <SuzannePhysicalMaterial />
        )}
        {showComponent("SuzanneStandardMaterial") && (
          <SuzanneStandardMaterial />
        )}
        {showComponent("SuzanneToonMaterial") && <SuzanneToonMaterial />}
      </Suspense>
    </>
  );
};

export default Content;
