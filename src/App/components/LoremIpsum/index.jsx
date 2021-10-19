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
    </>
  );
};

export default LoremIpsum;
