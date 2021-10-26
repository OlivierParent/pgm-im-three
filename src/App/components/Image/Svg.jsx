import SvgLoader from "../SvgLoader";

const svgLogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg";

const ImageSvg = () => {
  return (
    <>
      <SvgLoader position={[0, 0, 0]} scale={0.075} source={svgLogoUrl} />
    </>
  );
};

export default ImageSvg;
