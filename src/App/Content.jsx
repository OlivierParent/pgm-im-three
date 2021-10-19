import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Cube from "./components/Cube";
import ClockAnalogue from "./components/Clock/Analogue";
import ClockDigital from "./components/Clock/Digital";
import Lighting from "./components/Lighting";
import Suzanne from "./components/Suzanne";
import SuzanneMatcapTexture from "./components/Suzanne/MatcapTexture";

const components = [
  "Cube",
  "ClockAnalogue",
  "ClockDigital",
  "Suzanne",
  "SuzanneMatcapTexture",
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
        {showComponent("Suzanne") && <Suzanne />}
        {showComponent("SuzanneMatcapTexture") && <SuzanneMatcapTexture />}
      </Suspense>
    </>
  );
};

export default Content;
