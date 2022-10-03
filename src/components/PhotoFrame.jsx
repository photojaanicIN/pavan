import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

var scene;

class PhotoFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { useWireFrame: false, shouldAnimate: true };
  }

  componentDidMount = () => {
    // start ENGINE
    this.engine = new BABYLON.Engine(this.canvas, true);

    //Create Scene
    scene = new BABYLON.Scene(this.engine);
    // scene.clearColor = BABYLON.Color3.White();

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

    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    var light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      this.scene
    );
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

    var mat = new BABYLON.StandardMaterial("mat", scene);
    var texture = new BABYLON.Texture("https://i.imgur.com/vxH5bCg.jpg", scene);
    mat.diffuseTexture = texture;

        BABYLON.SceneLoader.ImportMeshAsync("",
    "https://raw.githubusercontent.com/pavankulkarni11/3D_Meshes/main/",
    "wall_frame.glb", scene).then((frame) => {
    const meshes = frame.meshes;
        meshes[1].material = mat;

    }); 

  };
  
  render() {
    return (
      <canvas
        style={{ width: window.innerWidth, height: "500px" }}
        ref={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}
export default PhotoFrame;

// wall_frame.glb