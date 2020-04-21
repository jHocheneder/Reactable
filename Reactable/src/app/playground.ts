import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import * as BABYLONMat from '@babylonjs/materials';
import { Wuerfel } from './wuerfel';
import { Teil } from './teil';

export class Playground {

  // private static scene : BABYLON.Scene;
  private static engine: BABYLON.Engine;
  private static canvas: HTMLCanvasElement;

  public static CreateScene() {
    let wuerfelDT: Array<Wuerfel>
    wuerfelDT = []
    let teilDT: Array<Teil>
    teilDT = []
    document.getElementById("fertigButton").addEventListener("click", pruefen)
    //pruefen ob fertig 
    function pruefen() {
      let cube =
        [
          [[false, false, false], [false, false, false], [false, false, false]],
          [[false, false, false], [false, false, false], [false, false, false]],
          [[false, false, false], [false, false, false], [false, false, false]]
        ]

      /*
      x:
      -10  0  10

      y:
      -10  
        0  
       10 

       z:
       10
       0
       -10

      */

      /*
      0 -10    0*10-10     -10=x*10-10
      1   0    1*10-10       0=x*10
      2  10    2*10-10       0=x
      
      */


      teilDT.forEach(t => {
        t.wuerfel.forEach(w => {
          if (w.box.position.x <= 10 && w.box.position.x >= -10
            && w.box.position.y <= 10 && w.box.position.y >= -10
            && w.box.position.z <= 10 && w.box.position.z >= -10) {
              alert(w.id)
            cube[(w.box.position.x + 10) / 10][(w.box.position.y + 10) / 10][(w.box.position.z + 10) / 10] = true
          }
         // alert(w.box.position.x)
        })
      });
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          for (let z = 0; z < 3; z++) {
            alert(x + " | " + y + " | " + z + ": " + cube[x][y][z])
          }
        }
      }
    }


    this.canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    this.engine = new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true });

    // Scene:
    const scene = new BABYLON.Scene(this.engine);

    const light = new BABYLON.HemisphericLight(
      'HemiLight',
      new BABYLON.Vector3(0, 10, 5),
      scene
    );

    const camera = new BABYLON.ArcRotateCamera(
      'Camera',
      0,
      0.8,
      100,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(this.canvas, true);

    scene.clearColor = new BABYLON.Color4(0.1, 0.1, 0.1);
    //modell erstellen alt

    //let box: Array<BABYLON.Mesh>
    const box = []
    let tId = 0
    for (let i = 0; i < 27; i++) {
      box[i] = BABYLON.Mesh.CreateBox('Box' + i, 10.0, scene)
      wuerfelDT[i] = new Wuerfel(i)
      wuerfelDT[i].box = box[i]
      if (i === 2) {
        teilDT[tId] = new Teil(tId)
        wuerfelDT[i - 2].teilId = wuerfelDT[i - 1].teilId = wuerfelDT[i].teilId = tId
        box[i - 2].position.x = wuerfelDT[i - 2].x_pos = -10
        box[i - 1].position.z = wuerfelDT[i - 1].z_pos = 10
        teilDT[tId].wuerfel = [wuerfelDT[i - 2], wuerfelDT[i - 1], wuerfelDT[i]]
     //   box[i].position.x = 50

    /*    const wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2]
        ])*/
        const materialBox = new BABYLON.StandardMaterial(
          'texture' + i,
          scene
        )

        materialBox.diffuseColor = teilDT[tId].farbe

        box[i].material = materialBox;
        box[i].position.x = 40;
        box[i].position.y -= 40;
        box[i-1].material = materialBox;
        box[i-1].position.x = 40;
        box[i-1].position.y -= 40;
        box[i-2].material = materialBox;
        box[i-2].position.x = 40;
        box[i-2].position.y -= 40;
        tId += 1
      }

      if (i === 6) {
        teilDT[tId] = new Teil(tId)
        wuerfelDT[i - 3].teilId = wuerfelDT[i - 2].teilId = wuerfelDT[i - 1].teilId = wuerfelDT[i].teilId = tId
        wuerfelDT[i - 1].x_pos = box[i - 1].position.x = -10
        wuerfelDT[i - 2].z_pos = wuerfelDT[i - 3].z_pos = box[i - 2].position.z = box[i - 3].position.z = box[i - 3].position.x = 10
        teilDT[tId].wuerfel = [wuerfelDT[i - 3], wuerfelDT[i - 2], wuerfelDT[i - 1], wuerfelDT[i]]

        const wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        const materialBox = new BABYLON.StandardMaterial(
          'texture' + i,
          scene
        );
        materialBox.diffuseColor = teilDT[tId].farbe
        wuerfel.material = materialBox;
        wuerfel.position.x -= 40;
        wuerfel.position.y -= 40;
        tId += 1
      }

      if (i === 10) {
        teilDT[tId] = new Teil(tId)
        wuerfelDT[i - 3].y_pos = box[i - 3].position.y = wuerfelDT[i - 1].z_pos = box[i - 1].position.z = 10
        wuerfelDT[i - 2].x_pos = box[i - 2].position.x = -10
        teilDT[tId].wuerfel = [wuerfelDT[i - 3], wuerfelDT[i - 2], wuerfelDT[i - 1], wuerfelDT[i]]

        const wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        const materialBox = new BABYLON.StandardMaterial(
          'texture' + i,
          scene
        );
        materialBox.diffuseColor = teilDT[tId].farbe
        wuerfel.material = materialBox;
        wuerfel.position.x = 50;
        tId += 1
      }

      if (i === 14) {
        teilDT[tId] = new Teil(tId)

        wuerfelDT[i - 2].x_pos = wuerfelDT[i - 3].x_pos = box[i - 2].position.x = box[i - 3].position.x = -10
        wuerfelDT[i - 1].z_pos = wuerfelDT[i - 3].y_pos = box[i - 1].position.z = box[i - 3].position.y = 10
        teilDT[tId].wuerfel = [wuerfelDT[i - 3], wuerfelDT[i - 2], wuerfelDT[i - 1], wuerfelDT[i]]


        const wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        const materialBox = new BABYLON.StandardMaterial(
          'texture' + i,
          scene
        );
        materialBox.diffuseColor = teilDT[tId].farbe
        wuerfel.material = materialBox;
        wuerfel.position.x -= 50;
        tId += 1
      }

      if (i === 18) {
        teilDT[tId] = new Teil(tId)
        wuerfelDT[i - 2].x_pos = box[i - 2].position.x = -10;
        wuerfelDT[i - 3].z_pos = box[i - 3].position.z = wuerfelDT[i - 3].x_pos = box[i - 3].position.x = wuerfelDT[i - 1].x_pos = box[i - 1].position.x = 10;
        teilDT[tId].wuerfel = [wuerfelDT[i - 3], wuerfelDT[i - 2], wuerfelDT[i - 1], wuerfelDT[i]]

        const wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        const materialBox = new BABYLON.StandardMaterial(
          'texture' + i,
          scene
        );
        materialBox.diffuseColor = teilDT[tId].farbe
        wuerfel.material = materialBox;
        wuerfel.position.z = 40;
        tId += 1
      }

      if (i === 22) {
        teilDT[tId] = new Teil(tId)
        wuerfelDT[i - 1].y_pos = box[i - 1].position.y = wuerfelDT[i - 2].z_pos = box[i - 2].position.z = wuerfelDT[i - 3].z_pos = box[i - 3].position.z = wuerfelDT[i - 3].x_pos = box[i - 3].position.x = 10;
        teilDT[tId].wuerfel = [wuerfelDT[i - 3], wuerfelDT[i - 2], wuerfelDT[i - 1], wuerfelDT[i]]

        const wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        const materialBox = new BABYLON.StandardMaterial(
          'texture' + i,
          scene
        );
        materialBox.diffuseColor = teilDT[tId].farbe
        wuerfel.material = materialBox;
        wuerfel.position.z -= 40;
        tId += 1
      }

      if (i === 26) {
        teilDT[tId] = new Teil(tId)
        wuerfelDT[i - 2].x_pos = box[i - 2].position.x = -10
        wuerfelDT[i - 1].x_pos = box[i - 1].position.x = wuerfelDT[i - 3].z_pos = box[i - 3].position.z = 10
        teilDT[tId].wuerfel = [wuerfelDT[i - 3], wuerfelDT[i - 2], wuerfelDT[i - 1], wuerfelDT[i]]
        const wuerfel = BABYLON.Mesh.MergeMeshes([
          box[i],
          box[i - 1],
          box[i - 2],
          box[i - 3]
        ]);
        const materialBox = new BABYLON.StandardMaterial(
          'texture' + i,
          scene
        );
        materialBox.diffuseColor = teilDT[tId].farbe
        wuerfel.material = materialBox;
        wuerfel.position.z -= 30;
        wuerfel.position.y -= 40;
        tId += 1
      }
    }

    // show axis
    const size = 25;
    const axis = this.showAxis(size, scene);



    // grid
    const gridBox = BABYLON.Mesh.CreateBox('boxGrid', 30, scene, false);
    gridBox.isPickable = false;
    const gridmat = new BABYLONMat.GridMaterial('grid', scene);
    gridmat.mainColor = new BABYLON.Color3(0, 1, 1);
    gridmat.opacity = 0.5;
    gridmat.gridRatio = 10;
    gridmat.gridOffset = new BABYLON.Vector3(5, 5, 5);

    gridBox.material = gridmat;

    // bewegen
    let selected = null;
    const safe = null;
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

        console.log('picked Info', evt.pickInfo.pickedMesh.name);
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

    document.addEventListener('keydown', e => {
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

  private static showAxis(size, scene) {// .isPickable = false;

    const axisX = BABYLON.Mesh.CreateLines(
      'axisX',
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
    const xChar = this.makeTextPlane('X', 'red', size / 10, scene);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    const axisY = BABYLON.Mesh.CreateLines(
      'axisY',
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
    const yChar = this.makeTextPlane('Y', 'green', size / 10, scene);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    const axisZ = BABYLON.Mesh.CreateLines(
      'axisZ',
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
    const zChar = this.makeTextPlane('Z', 'blue', size / 10, scene);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);

    axisX.isPickable = false;
    axisY.isPickable = false;
    axisZ.isPickable = false;

    yChar.isPickable = false;
    xChar.isPickable = false;
    zChar.isPickable = false;

  }// showAxis(size)

  private static makeTextPlane(text, color, size, scene) {
    const dynamicTexture = new BABYLON.DynamicTexture(
      'DynamicTexture',
      50,
      scene,
      true
    );
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(
      text,
      5,
      40,
      'bold 36px Arial',
      color,
      'transparent',
      true
    );
    const plane = BABYLON.Mesh.CreatePlane(
      'TextPlane',
      size,
      scene,
      true
    );

    const material = new BABYLON.StandardMaterial(
      'TextPlaneMaterial',
      scene
    );
    plane.material = material;
    material.backFaceCulling = false;
    material.specularColor = new BABYLON.Color3(0, 0, 0);
    material.diffuseTexture = dynamicTexture;
    return plane;
  }// makeTextPlane(text, color, size)


  private static build(engine, scene) {
    engine.runRenderLoop(function () {
      if (scene) {
        scene.render();
      }
    });

    // Resize
    window.addEventListener('resize', function () {
      engine.resize();
    });
  }
}
