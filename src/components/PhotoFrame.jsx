import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

var scene;

class BabylonScene extends Component {
  constructor(props) {
    super(props);
    this.state = { useWireFrame: false, shouldAnimate: true };
  }

  componentDidMount = () => {
    // start ENGINE
    this.engine = new BABYLON.Engine(this.canvas, true);

    //Create Scene
    scene = new BABYLON.Scene(this.engine);
    scene.clearColor = BABYLON.Color3.White();

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
    BABYLON.SceneLoader.ImportMesh("",
    "https://raw.githubusercontent.com/pavankulkarni11/3D_Meshes/main/",
    "wall_frame.glb", this.scene, function (newMeshes) {

        console.log(newMeshes)

        const newTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png", this.scene)
        
  
        console.log(scene.getMeshByName("Plane").material)
        const mesh = scene.getMeshByName("Plane");

        const material = new BABYLON.StandardMaterial("m", scene);
        material.diffuseTexture = newTexture;
        mesh.material = material;

        scene.createDefaultEnvironment({createGround:false, createSkybox:false})
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
export default BabylonScene;