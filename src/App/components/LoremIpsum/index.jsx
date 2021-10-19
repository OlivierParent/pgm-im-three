import { DoubleSide } from "three";
import { Text, useMatcapTexture } from "@react-three/drei";

import MatCap from "../../lib/MatCap";
import FontFamily from "../../lib/FontFamily";

const LoremIpsum = () => {
  const [matcap] = useMatcapTexture(MatCap.id.GREEN, MatCap.size.XL);

  return (
    <>
      <Text fontSize={1}>
        Lorem ipsum sid dolor amet.
        <meshMatcapMaterial matcap={matcap} side={DoubleSide} />
      </Text>
      <Text
        fontSize={1}
        font={FontFamily.Architects_Daughter}
        position={[0, 1, 0]}
      >
        Lorem ipsum sid dolor amet.
        <meshMatcapMaterial matcap={matcap} side={DoubleSide} />
      </Text>
      <Text fontSize={1} font={FontFamily.Press_Start_2P} position={[0, -1, 0]}>
        Lorem ipsum sid dolor amet.
        <meshBasicMaterial color={0x0000ff} />
      </Text>
      <Text fontSize={1} font={FontFamily.Lukiest_Guy} position={[0, -2, 0]}>
        Lorem ipsum sid dolor amet.
        <meshBasicMaterial color={0x00ff00} />
      </Text>
      <Text fontSize={1} font={FontFamily.Crimson_Pro} position={[0, -3, 0]}>
        Lorem ipsum sid dolor amet.
        <meshBasicMaterial color={0xff0000} side={DoubleSide} />
      </Text>
    </>
  );
};

export default LoremIpsum;
