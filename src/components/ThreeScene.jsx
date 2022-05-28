import { Canvas } from "@react-three/fiber";

const ThreeScene = ({ children, props }) => {
  return <Canvas {...props}>{children}</Canvas>;
};

export default ThreeScene;
