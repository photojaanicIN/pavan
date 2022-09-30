import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

var scene;

class Mug extends Component {
  constructor(props) {
    super(props);
    this.state = { useWireFrame: false, shouldAnimate: false };
  }

  componentDidMount = () => {
    // start ENGINE
    this.engine = new BABYLON.Engine(this.canvas, true);

    //Create Scene
    scene = new BABYLON.Scene(this.engine);
    scene.clearColor = new BABYLON.Color3.Gray();

    //--Light---
    this.addLight();

    //--Camera---
    this.addCamera();

    //--Meshes---
    this.addModels();

    // Add Events
    window.addEventListener("resize", this.onWindowResize, false);

    // Render Loop
    this.engine.runRenderLoop(() => {
      scene.render();
    });

  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize, false);
  }

  onWindowResize = event => {
    this.engine.resize();
  };

  /* Add Lights */
  addLight = () => {

    var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, -1, 0), scene);
    
    // var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, -1, 0), scene);
    // light1.intensity = 0.5;
  };

  /* Add Camera */
  addCamera = () => {
    // create a camera pointing at your model.
    scene.createDefaultCameraOrLight(true, true, true);
    var camera = scene.getCameraByID("default camera");
    camera.beta = 1.4;
    camera.alpha = 1.2;
    camera.attachControl(this.canvas, true)
  };


  /*** Add Models */
  addModels = () => {

    // Adding texture to model
    var mat = new BABYLON.StandardMaterial("mat", scene);
    var texture = new BABYLON.Texture("https://i.imgur.com/vxH5bCg.jpg", scene);
    mat.diffuseTexture = texture;

    // Importing model from git hub
    BABYLON.SceneLoader.ImportMeshAsync("",
    "https://raw.githubusercontent.com/pavankulkarni11/3D_Meshes/main/",
    "mug_glb_itr4.glb", scene).then((frame) => {
    const meshes = frame.meshes;
        meshes[1].material = mat;
    });
  };
 
  render() {
    return (
      <canvas
        style={{ width: window.innerWidth, height: window.innerHeight }}
        ref={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}
export default Mug;