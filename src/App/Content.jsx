import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Cube from "./components/Cube";
import ClockAnalogue from "./components/Clock/Analogue";
import ClockDigital from "./components/Clock/Digital";

const components = ["Cube", "ClockAnalogue", "ClockDigital"];

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
      {showComponent("Cube") && <Cube />}
      {showComponent("ClockAnalogue") && <ClockAnalogue />}
      {showComponent("ClockDigital") && <ClockDigital />}
    </>
  );
};

export default Content;
