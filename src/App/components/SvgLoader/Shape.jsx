import { DoubleSide } from "three";

const SvgLoaderShape = ({ color, index, shape }) => {
  return (
    <mesh position={[0, 0, -0.05 * index]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial color={color} side={DoubleSide} />
    </mesh>
  );
};

export default SvgLoaderShape;
