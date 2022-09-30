import React from "react";
import ReactDOM from "react-dom";
import DefaultPlayground from "./components/DefaultPlayground";
import Pillow from "./components/Pillow";
import Mug from './components/Mug';
import PhotoFrame from './components/PhotoFrame'
import textureExample from './components/textureExample'
import CanvModel from './components/CanvModel'


export default function App() {
  return (
    <div className="App">

     {/* <textureExample/> */}
      {/* <PhotoFrame /> */}
      {/* <DefaultPlayground/> */}
      {/* <Pillow /> */}
      <Mug />
      {/* <CanvModel /> */}


    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
