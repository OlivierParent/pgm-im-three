import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Cube from "./components/Cube";
import ClockAnalogue from "./components/Clock/Analogue";
import ClockDigital from "./components/Clock/Digital";
import Lighting from "./components/Lighting";
import LoremIpsum from "./components/LoremIpsum";
import Suzanne from "./components/Suzanne";
import SuzanneMatcapTexture from "./components/Suzanne/MatcapTexture";
import SuzanneNormalTexture from "./components/Suzanne/NormalTexture";
import SuzanneStandardMaterial from "./components/Suzanne/StandardMaterial";
import SuzanneToonMaterial from "./components/Suzanne/ToonMaterial";

const components = [
  "Cube",
  "ClockAnalogue",
  "ClockDigital",
  "LoremIpsum",
  "Suzanne",
  "SuzanneMatcapTexture",
  "SuzanneNormalTexture",
  "SuzanneStandardMaterial",
  "SuzanneToonMaterial",
];

const Content = () => {
  const { showStats } = useControls("General", {
    showStats: {
      label: "Stats",
      value: false,
    },
  });

  const { showAxesHelper, showGridHelper, useComponent } = useControls(
    "Helpers",
    {
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
    },
  );

  function showComponent(name) {
    return useComponent === name;
  }

  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      {showAxesHelper && <axesHelper />}
      {showGridHelper && <gridHelper />}
      {showStats && <Stats />}
      <Lighting />
      {showComponent("Cube") && <Cube />}
      {showComponent("ClockAnalogue") && <ClockAnalogue />}
      {showComponent("ClockDigital") && <ClockDigital />}
      <Suspense fallback={null}>
        {showComponent("LoremIpsum") && <LoremIpsum />}
        {showComponent("Suzanne") && <Suzanne />}
        {showComponent("SuzanneMatcapTexture") && <SuzanneMatcapTexture />}
        {showComponent("SuzanneNormalTexture") && <SuzanneNormalTexture />}
        {showComponent("SuzanneStandardMaterial") && (
          <SuzanneStandardMaterial />
        )}
        {showComponent("SuzanneToonMaterial") && <SuzanneToonMaterial />}
      </Suspense>
    </>
  );
};

export default Content;
