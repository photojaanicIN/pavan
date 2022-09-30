import {
    Scene,
    Engine,
    FreeCamera,
    Vector3,
    MeshBuilder,
    CubeTexture,
    Texture,
    PBRMaterial,
    SceneLoader,
  } from "@babylonjs/core";
  import "@babylonjs/loaders";
  
  export default class pillow {
    scene: Scene;
    engine: Engine;
  
    constructor(private canvas: HTMLCanvasElement) {
      this.engine = new Engine(this.canvas, true);
      this.scene = this.CreateScene();
      this.CreatePillow();
  
      this.engine.runRenderLoop(() => {
        this.scene.render();
      });
    }
  
    CreateScene(): Scene {
      const scene = new Scene(this.engine);
      const camera = new FreeCamera(
        "camera",
        new Vector3(0, 0.75, -8),
        this.scene
      );
      camera.attachControl();
      camera.speed = 0.25;
   
      return scene;
    }
  
  
    async CreatePillow(): Promise<void> {
      // SceneLoader.ImportMesh(
      //   "",
      //   "./models/",
      //   "Pillow.glb",
      //   this.scene,
      //   (meshes) => {
      //     console.log("meshes", meshes);
      //   }
      // );
  
      const { meshes } = await SceneLoader.ImportMeshAsync(
        "./models/",
        "Pillow.glb"
      );
  
      console.log("meshes", meshes);
    }
  
  }
  