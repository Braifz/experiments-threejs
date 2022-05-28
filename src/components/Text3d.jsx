import { Text3D } from "@react-three/drei";
import Roboto from "../assets/fonts/Roboto Black_Regular.json";

const Text3d = ({ text }) => {
  return (
    <Text3D font={Roboto} scale={2} position={[-2.5, 0, 0]}>
      {text}
      <meshNormalMaterial wireframe />
    </Text3D>
  );
};

export default Text3d;
