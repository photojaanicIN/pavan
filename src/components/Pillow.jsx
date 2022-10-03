import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

var scene;

class Pillow extends Component {
  constructor(props) {
    super(props);
    this.state = { useWireFrame: false, shouldAnimate: false };
  }

  componentDidMount = () => {
    // start ENGINE
    this.engine = new BABYLON.Engine(this.canvas, true);

    //Create Scene
    scene = new BABYLON.Scene(this.engine);

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
      new BABYLON.Vector3(0, 10, 0),
      scene
    );
  };

  /* Add Camera */
  addCamera = () => {
    // ---------------ArcRotateCamera or Orbit Control----------
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 4,
      4,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.inertia = 0;
    camera.angularSensibilityX = 250;
    camera.angularSensibilityY = 250;

    // This attaches the camera to the canvas
    camera.attachControl(this.canvas, true);
    camera.setPosition(new BABYLON.Vector3(5, 5, 5));
  };


  /*** Add Models */
  addModels = () => {

    BABYLON.SceneLoader.ImportMesh("",
    "https://raw.githubusercontent.com/pavankulkarni11/3D_Meshes/main/",
    "Pillow.glb", scene, function (newMeshes) {

        console.log(newMeshes)

        const newTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png")

        console.log(scene.getMeshByName("pollow_poly").material)

        scene.getMeshByName("pollow_poly").material.albedoTexture = newTexture
        scene.createDefaultEnvironment({createGround:false, createSkybox:false})
    });
 
    // var myMaterial = BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/pavankulkarni11/3D_Meshes/main/Pillow.glb", this.scene);
    // myMaterial.diffuseTexture = new BABYLON.Texture("textures/albedo.png", this.scene);

    // https://github.com/pavankulkarni11/3D_Meshes/blob/main/Photo_Frame_5x5.glb
    // BABYLON.SceneLoader.ImportMesh("Pillow", "../../public/models/","Pillow.glb", this.scene);
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
export default Pillow;