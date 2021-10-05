import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

import Cube from "./components/Cube";

const Content = () => {
  const { showStats } = useControls("General", {
    showStats: {
      label: "Stats",
      value: false,
    },
  });

  const { showAxesHelper, showGridHelper } = useControls("Helpers", {
    showAxesHelper: {
      label: "Axes Helper",
      value: false,
    },
    showGridHelper: {
      label: "Grid Helper",
      value: false,
    },
  });

  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      {showAxesHelper && <axesHelper />}
      {showGridHelper && <gridHelper />}
      {showStats && <Stats />}
      <Cube />
    </>
  );
};

export default Content;
