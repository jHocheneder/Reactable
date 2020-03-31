import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import * as BABYLONMat from '@babylonjs/materials';
//import * as BABYLONMat from 'babylonjs-materials';

export class Playground {

  // private static scene : BABYLON.Scene;
  private static engine: BABYLON.Engine;
  private static canvas: HTMLCanvasElement;

  public static CreateScene(/*engine: BABYLON.Engine, canvas: HTMLCanvasElement*/)/*: BABYLON.Scene*/ {

    this.canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    this.engine = new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true });

    //Scene:
    let scene = new BABYLON.Scene(this.engine);

    var light = new BABYLON.HemisphericLight(
      "HemiLight",
      new BABYLON.Vector3(0, 10, 5),
      scene
    );

    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0.8,
      100,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(this.canvas, true);

    scene.clearColor = new BABYLON.Color4(0.1, 0.1, 0.1);

    var box = [];
    for (let i = 0; i < 27; i++) {
      box[i] = BABYLON.Mesh.CreateBox('Box' + i, 10.0, scene);
      if (i === 2) {
        box[i - 2].position.x -= 10;
        box[i - 1].position.z = 10;
        var wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2]
        ]);
        var materialBox = new BABYLON.StandardMaterial(
          "texture" + i,
          scene
        );
        materialBox.diffuseColor = new BABYLON.Color3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        wuerfel.material = materialBox;
        wuerfel.position.x = 40;
        wuerfel.position.y -= 40;
      }

      if (i == 6) {
        box[i - 1].position.x = -10;
        box[i - 2].position.z -= -10;
        box[i - 3].position.z = 10;
        box[i - 3].position.x -= -10;
        box[i - 3].position.x = 10;
        var wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        var materialBox = new BABYLON.StandardMaterial(
          "texture" + i,
          scene
        );
        materialBox.diffuseColor = new BABYLON.Color3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        wuerfel.material = materialBox;
        wuerfel.position.x -= 40;
        wuerfel.position.y -= 40;
      }

      if (i == 10) {
        box[i - 2].position.x -= 10;
        box[i - 1].position.z = 10;
        box[i - 3].position.y = 10;
        var wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        var materialBox = new BABYLON.StandardMaterial(
          "texture" + i,
          scene
        );
        materialBox.diffuseColor = new BABYLON.Color3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        wuerfel.material = materialBox;
        wuerfel.position.x = 50;
      }

      if (i == 14) {
        box[i - 2].position.x -= 10;
        box[i - 1].position.z = 10;
        box[i - 3].position.y = 10;
        box[i - 3].position.x -= 10;
        var wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        var materialBox = new BABYLON.StandardMaterial(
          "texture" + i,
          scene
        );
        materialBox.diffuseColor = new BABYLON.Color3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        wuerfel.material = materialBox;
        wuerfel.position.x -= 50;
      }

      if (i == 18) {
        box[i - 2].position.x -= 10;
        box[i - 1].position.x = 10;
        box[i - 3].position.x = 10;
        box[i - 3].position.z = 10;
        var wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        var materialBox = new BABYLON.StandardMaterial(
          "texture" + i,
          scene
        );
        materialBox.diffuseColor = new BABYLON.Color3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        wuerfel.material = materialBox;
        wuerfel.position.z = 40;
      }

      if (i == 22) {
        box[i - 1].position.y = 10;
        box[i - 2].position.z = 10;
        box[i - 3].position.z = 10;
        box[i - 3].position.x = 10;
        var wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        var materialBox = new BABYLON.StandardMaterial(
          "texture" + i,
          scene
        );
        materialBox.diffuseColor = new BABYLON.Color3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        wuerfel.material = materialBox;
        wuerfel.position.z -= 40;
      }

      if (i == 26) {
        box[i - 2].position.x -= 10;
        box[i - 1].position.x = 10;
        box[i - 3].position.z = 10;
        var wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        var materialBox = new BABYLON.StandardMaterial(
          "texture" + i,
          scene
        );
        materialBox.diffuseColor = new BABYLON.Color3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        wuerfel.material = materialBox;
        wuerfel.position.z -= 30;
        wuerfel.position.y -= 40;
      }
    }

    // show axis
    var size = 25;
    var axis = this.showAxis(size, scene);



    //grid
    var gridBox = BABYLON.Mesh.CreateBox("boxGrid", 30, scene, false);
    gridBox.isPickable = false;
    var gridmat = new BABYLONMat.GridMaterial("grid", scene);
    gridmat.mainColor = new BABYLON.Color3(0, 1, 1);
    gridmat.opacity = 0.5;
    gridmat.gridRatio = 10;
    gridmat.gridOffset = new BABYLON.Vector3(5, 5, 5);

    gridBox.material = gridmat;

    //bewegen
    var selected = null;
    var safe = null;
    scene.onPointerObservable.add(function (evt) {
      if (selected) {
        selected.material.alpha = 1;
        selected = null;
      }
      if (
        evt.pickInfo.hit &&
        evt.pickInfo.pickedMesh &&
        evt.event.button === 0
      ) {
        selected = evt.pickInfo.pickedMesh;

        console.log("picked Info", evt.pickInfo.pickedMesh.name);
        selected.material.alpha = 0.8;

        scene.registerBeforeRender(() => {
          if (selected) {
            if (isWPressed) {
              selected.position.z += 10;
              isWPressed = false;
            }

            if (isSPressed) {
              selected.position.z -= 10;
              isSPressed = false;
            }

            if (isAPressed) {
              selected.position.x -= 10;
              isAPressed = false;
            }

            if (isDPressed) {
              selected.position.x += 10;
              isDPressed = false;
            }

            if (isRPressed) {
              selected.position.y += 10;
              isRPressed = false;
            }

            if (isFPressed) {
              selected.position.y -= 10;
              isFPressed = false;
            }

            if (isXPressed) {
              selected.rotation.x += BABYLON.Tools.ToRadians(90);
              isXPressed = false;
            }

            if (isYPressed) {
              selected.rotation.y += BABYLON.Tools.ToRadians(90);
              isYPressed = false;
            }

            if (isZPressed) {
              selected.rotation.z += BABYLON.Tools.ToRadians(90);
              isZPressed = false;
            }
          }
        });
      }
    }, BABYLON.PointerEventTypes.POINTERUP);

    let isWPressed = false;
    let isSPressed = false;
    let isAPressed = false;
    let isDPressed = false;
    let isRPressed = false;
    let isFPressed = false;

    let isXPressed = false;
    let isYPressed = false;
    let isZPressed = false;

    document.addEventListener("keydown", e => {
      if (selected) {
        switch (e.keyCode) {
          case 87:
            isWPressed = true;
            break;
          case 83:
            isSPressed = true;
            break;
          case 65:
            isAPressed = true;
            break;
          case 68:
            isDPressed = true;
            break;
          case 82:
            isRPressed = true;
            break;
          case 70:
            isFPressed = true;
            break;
          case 88:
            isXPressed = true;
            break;
          case 89:
            isYPressed = true;
            break;
          case 90:
            isZPressed = true;
            break;
        }
      }
    });
    this.build(this.engine, scene);
    // return scene;
  }

  private static showAxis(size, scene) {//.isPickable = false;

    var axisX = BABYLON.Mesh.CreateLines(
      "axisX",
      [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
      ],
      scene
    );
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = this.makeTextPlane("X", "red", size / 10, scene);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = BABYLON.Mesh.CreateLines(
      "axisY",
      [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
      ],
      scene
    );
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = this.makeTextPlane("Y", "green", size / 10, scene);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = BABYLON.Mesh.CreateLines(
      "axisZ",
      [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
      ],
      scene
    );
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = this.makeTextPlane("Z", "blue", size / 10, scene);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);

      axisX.isPickable = false;
      axisY.isPickable = false;
      axisZ.isPickable = false;
      
      yChar.isPickable = false;
      xChar.isPickable = false;
      zChar.isPickable = false;
 
  }//showAxis(size)

  private static makeTextPlane(text, color, size, scene) {
    var dynamicTexture = new BABYLON.DynamicTexture(
      "DynamicTexture",
      50,
      scene,
      true
    );
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(
      text,
      5,
      40,
      "bold 36px Arial",
      color,
      "transparent",
      true
    );
    var plane = BABYLON.Mesh.CreatePlane(
      "TextPlane",
      size,
      scene,
      true
    );

    var material = new BABYLON.StandardMaterial(
      "TextPlaneMaterial",
      scene
    );
    plane.material = material;
    material.backFaceCulling = false;
    material.specularColor = new BABYLON.Color3(0, 0, 0);
    material.diffuseTexture = dynamicTexture;
    return plane;
  }//makeTextPlane(text, color, size)


  private static build(engine, scene) {
    engine.runRenderLoop(function () {
      if (scene) {
        scene.render();
      }
    });

    // Resize
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }
}
