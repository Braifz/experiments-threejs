import { OrbitControls, Stars } from "@react-three/drei";
import "./App.css";
import ThreeScene from "./components/ThreeScene";
import Header from "./components/Header";
import Content from "./components/Content";
import Text3d from "./components/Text3d";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <div className="scene">
        <ThreeScene>
          <Text3d text={"hola"} />
          <Stars />
          <OrbitControls cursor={false} autoRotate />
        </ThreeScene>
      </div>
    </div>
  );
}

export default App;
