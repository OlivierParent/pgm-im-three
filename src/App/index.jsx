import { Canvas } from "@react-three/fiber";
import Content from "./Content";

const App = () => {
  return (
    <Canvas linear={true}>
      <Content />
    </Canvas>
  );
};

export default App;
