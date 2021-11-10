import { Canvas } from "@react-three/fiber";

import Content from "./Content";

const App = () => {
  return (
    <Canvas>
      <Content linear={false} shadows={true} />
    </Canvas>
  );
};

export default App;
