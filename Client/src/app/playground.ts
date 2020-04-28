import * as BABYLON from '@babylonjs/core/Legacy/legacy'
import * as BABYLONMat from '@babylonjs/materials'
import { Teil } from './datatypes/teil'

export class Playground {
  private static engine: BABYLON.Engine
  private static canvas: HTMLCanvasElement

  public static CreateScene() {
    this.canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
    this.engine = new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true })

    //Scene:
    let scene = new BABYLON.Scene(this.engine)

    let light = new BABYLON.HemisphericLight(
      "HemiLight",
      new BABYLON.Vector3(0, 20, 10),
      scene
    )

    let camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0.8,
      100,
      new BABYLON.Vector3(0, 0, 0),
      scene
    )
    camera.attachControl(this.canvas, true)

    scene.clearColor = new BABYLON.Color4(0.0, 0.0, 0.0)

    //Wuerfelteile generieren
    let teilDT: Array<Teil> = []
    const box = []
    let teilID = 0

    for (let i = 0; i < 27; i++) {
      box[i] = BABYLON.Mesh.CreateBox('Box' + i, 10.0, scene)
      if (i === 2) {
        //Teil definieren
        teilDT[teilID] = new Teil(teilID, scene)

        //boxen zum Teil positionieren
        box[i - 2].position.x -= 10
        box[i - 1].position.z += 10

        //Material hinzufügen
        box[i].material = box[i - 1].material = box[i - 2].material = teilDT[teilID].material

        //Teil positionieren
        box[i].position.x += 40
        box[i].position.y -= 40
        box[i - 1].position.x += 40
        box[i - 1].position.y -= 40
        box[i - 2].position.x += 40
        box[i - 2].position.y -= 40

        //wuerfel zum teil hinzufügen
        teilDT[teilID].wuerfel = [box[i], box[i - 1], box[i - 2]]

        //teilID erhöhen
        teilID += 1
      }

      if (i == 6) {
        //Teil definieren
        teilDT[teilID] = new Teil(teilID, scene)

        //boxen zum Teil positionieren
        box[i - 1].position.x -= 10
        box[i - 2].position.z = box[i - 3].position.x = box[i - 3].position.z = 10

        //Material hinzufügen
        box[i].material = box[i - 1].material = box[i - 2].material = box[i - 3].material = teilDT[teilID].material

        //Teil positionieren
        box[i].position.x -= 40
        box[i].position.y -= 40
        box[i - 1].position.x -= 40
        box[i - 1].position.y -= 40
        box[i - 2].position.x -= 40
        box[i - 2].position.y -= 40
        box[i - 3].position.x -= 40
        box[i - 3].position.y -= 40

        //wuerfel zum teil hinzufügen
        teilDT[teilID].wuerfel = [box[i], box[i - 1], box[i - 2], box[i - 3]]

        //teilID erhöhen
        teilID += 1
      }

      if (i == 10) {
        //Teil definieren
        teilDT[teilID] = new Teil(teilID, scene)

        //boxen zum Teil positionieren
        box[i - 2].position.x -= 10
        box[i - 1].position.z = box[i - 3].position.y = 10

        //Material hinzufügen
        box[i].material = box[i - 1].material = box[i - 2].material = box[i - 3].material = teilDT[teilID].material

        //Teil positionieren
        box[i].position.x += 50
        box[i - 1].position.x += 50
        box[i - 2].position.x += 50
        box[i - 3].position.x += 50

        //wuerfel zum teil hinzufügen
        teilDT[teilID].wuerfel = [box[i], box[i - 1], box[i - 2], box[i - 3]]

        //teilID erhöhen
        teilID += 1
      }

      if (i == 14) {
        //Teil definieren
        teilDT[teilID] = new Teil(teilID, scene)

        //boxen zum Teil positionieren
        box[i - 2].position.x -= 10
        box[i - 1].position.z += 10
        box[i - 3].position.y += 10
        box[i - 3].position.x -= 10

        //Material hinzufügen
        box[i].material = box[i - 1].material = box[i - 2].material = box[i - 3].material = teilDT[teilID].material

        //Teil positionieren
        box[i].position.x -= 50
        box[i - 1].position.x -= 50
        box[i - 2].position.x -= 50
        box[i - 3].position.x -= 50

        //wuerfel zum teil hinzufügen
        teilDT[teilID].wuerfel = [box[i], box[i - 1], box[i - 2], box[i - 3]]

        //teilID erhöhen
        teilID += 1
      }

      if (i == 18) {
        //Teil definieren
        teilDT[teilID] = new Teil(teilID, scene)

        //boxen zum Teil positionieren
        box[i - 2].position.x -= 10
        box[i - 1].position.x = 10
        box[i - 3].position.x = 10
        box[i - 3].position.z = 10

        //Material hinzufügen
        box[i].material = box[i - 1].material = box[i - 2].material = box[i - 3].material = teilDT[teilID].material

        //Teil positionieren
        box[i].position.z += 40
        box[i - 1].position.z += 40
        box[i - 2].position.z += 40
        box[i - 3].position.z += 40

        //wuerfel zum teil hinzufügen
        teilDT[teilID].wuerfel = [box[i], box[i - 1], box[i - 2], box[i - 3]]

        //teilID erhöhen
        teilID += 1
      }

      if (i == 22) {
        //Teil definieren
        teilDT[teilID] = new Teil(teilID, scene)

        //boxen zum Teil positionieren
        box[i - 1].position.y = 10
        box[i - 2].position.z = 10
        box[i - 3].position.z = 10
        box[i - 3].position.x = 10

        //Material hinzufügen
        box[i].material = box[i - 1].material = box[i - 2].material = box[i - 3].material = teilDT[teilID].material

        //Teil positionieren
        box[i].position.z -= 40
        box[i - 1].position.z -= 40
        box[i - 2].position.z -= 40
        box[i - 3].position.z -= 40

        //wuerfel zum teil hinzufügen
        teilDT[teilID].wuerfel = [box[i], box[i - 1], box[i - 2], box[i - 3]]

        //teilID erhöhen
        teilID += 1
      }

      if (i == 26) {
        //Teil definieren
        teilDT[teilID] = new Teil(teilID, scene)

        //boxen zum Teil positionieren
        box[i - 2].position.x -= 10
        box[i - 1].position.x = 10
        box[i - 3].position.z = 10

        //Material hinzufügen
        box[i].material = box[i - 1].material = box[i - 2].material = box[i - 3].material = teilDT[teilID].material

        //Teil positionieren
        box[i].position.z -= 30
        box[i - 1].position.z -= 30
        box[i - 2].position.z -= 30
        box[i - 3].position.z -= 30
        box[i].position.y -= 40
        box[i - 1].position.y -= 40
        box[i - 2].position.y -= 40
        box[i - 3].position.y -= 40

        //wuerfel zum teil hinzufügen
        teilDT[teilID].wuerfel = [box[i], box[i - 1], box[i - 2], box[i - 3]]

        //teilID erhöhen
        teilID += 1
      }
    }

    // show axis
    let axisSize = 25
    let axis = this.showAxis(axisSize, scene)

    //grid
    let gridBox = BABYLON.Mesh.CreateBox("boxGrid", 30, scene, false)
    gridBox.isPickable = false
    let gridmat = new BABYLONMat.GridMaterial("grid", scene)
    gridmat.mainColor = new BABYLON.Color3(0, 1, 1)
    gridmat.opacity = 0.5
    gridmat.gridRatio = 10
    gridmat.gridOffset = new BABYLON.Vector3(5, 5, 5)
    gridBox.material = gridmat

    //bewegen
    let selected = null
    let selTeil: Teil = null
    const selMat = new BABYLON.StandardMaterial('selectedMat', scene)
    selMat.diffuseColor = new BABYLON.Color3(1, 1, 1) //white

    //Mesh wählen
    scene.onPointerObservable.add(function (evt) {
      if (selected) { //deselect
        selected = null
      }
      if (selTeil) { //deselect
        selTeil.wuerfel.forEach(w => {
          w.material = selTeil.material
        })
      }

      if (
        evt.pickInfo.hit &&
        evt.pickInfo.pickedMesh &&
        evt.event.button === 0
      ) { //selected

        //mesh zuweisen
        selected = evt.pickInfo.pickedMesh

        //Teil finden
        teilDT.forEach(t => {
          t.wuerfel.forEach(w => {
            //gleicher würfel?
            if (selected === w) {
              selTeil = t
              return
            }
          })
        })

        //neues Material
        if (selTeil) {
          selTeil.wuerfel.forEach(w => {
            w.material = selMat
          })
        }

        console.log("picked Info", evt.pickInfo.pickedMesh.name)

        scene.registerBeforeRender(() => {

          if (selected) {
            if (isWPressed) {
              selTeil.wuerfel.forEach(w => {
                w.position.z += 10
              })
              isWPressed = false
            }

            if (isSPressed) {
              selTeil.wuerfel.forEach(w => {
                w.position.z -= 10
              })
              isSPressed = false
            }

            if (isAPressed) {
              selTeil.wuerfel.forEach(w => {
                w.position.x -= 10
              })
              isAPressed = false
            }

            if (isDPressed) {
              selTeil.wuerfel.forEach(w => {
                w.position.x += 10
              })
              isDPressed = false
            }

            if (isRPressed) {
              selTeil.wuerfel.forEach(w => {
                w.position.y += 10
              })
              isRPressed = false
            }

            if (isFPressed) {
              selTeil.wuerfel.forEach(w => {
                w.position.y -= 10
              })
              isFPressed = false
            }

            if (isXPressed) {
              Playground.rotateX(selTeil)
              isXPressed = false
            }

            if (isYPressed) {
              Playground.rotateY(selTeil)
              isYPressed = false
            }

            if (isZPressed) {
              Playground.rotateZ(selTeil)
              isZPressed = false
            }
            Playground.pruefen(teilDT)
          }
        })
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
  private static pruefen(teilDT: Array<Teil>) {
    let fertig = true;
    let cube =
      [
        [[false, false, false], [false, false, false], [false, false, false]],
        [[false, false, false], [false, false, false], [false, false, false]],
        [[false, false, false], [false, false, false], [false, false, false]]
      ] //nix drin = false

    teilDT.forEach(t => {
      t.wuerfel.forEach(w => {
        if (w.position.x <= 10 && w.position.x >= -10
          && w.position.y <= 10 && w.position.y >= -10
          && w.position.z <= 10 && w.position.z >= -10) {

          cube[(w.position.x + 10) / 10][(w.position.y + 10) / 10][(w.position.z + 10) / 10] = true
        }

      })
    })


    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          if (!cube[x][y][z]) {//nicht komplett
            fertig = false;
            return
          }//if
        }//for z
      }//for y
    }//for x
    if (fertig) {
      alert("FERTIG!!!")
    }
  } //pruefen()

  private static rotateY(teil: Teil) {
    let gX = teil.wuerfel[0].position.x
    let kX = teil.wuerfel[0].position.x
    let kZ = teil.wuerfel[0].position.z

    teil.wuerfel.forEach(w => {
      if (w.position.x > gX) {
        gX = w.position.x
      }
      if (w.position.x < kX) {
        kX = w.position.x
      }
      if (w.position.z < kZ) {
        kZ = w.position.z
      }
    })

    teil.wuerfel.forEach(w => {

      let posX = w.position.x
      let posZ = w.position.z

      switch (posZ) {
        case kZ:
          w.position.x = kX
          break
        case kZ + 10:
          w.position.x = kX + 10
          break
        case kZ + 20:
          w.position.x = kX + 20
          break

        default:
          break
      }

      switch (posX) {
        case gX:
          w.position.z = kZ
          break
        case gX - 10:
          w.position.z = kZ + 10
          break
        case gX - 20:
          w.position.z = kZ + 20
          break

        default:
          break
      }

    })


  }

  private static rotateX(teil: Teil) {
    let gY = teil.wuerfel[0].position.y
    let kY = teil.wuerfel[0].position.y
    let kZ = teil.wuerfel[0].position.z

    teil.wuerfel.forEach(w => {
      if (w.position.y > gY) {
        gY = w.position.y
      }
      if (w.position.y < kY) {
        kY = w.position.y
      }
      if (w.position.z < kZ) {
        kZ = w.position.z
      }
    })

    teil.wuerfel.forEach(w => {

      let posY = w.position.y
      let posZ = w.position.z

      switch (posZ) {
        case kZ:
          w.position.y = kY
          break
        case kZ + 10:
          w.position.y = kY + 10
          break
        case kZ + 20:
          w.position.y = kY + 20
          break

        default:
          break
      }

      switch (posY) {
        case gY:
          w.position.z = kZ
          break
        case gY - 10:
          w.position.z = kZ + 10
          break
        case gY - 20:
          w.position.z = kZ + 20
          break

        default:
          break
      }

    })


  }

  private static rotateZ(teil: Teil) {
    let gX = teil.wuerfel[0].position.x
    let kX = teil.wuerfel[0].position.x
    let kY = teil.wuerfel[0].position.y

    teil.wuerfel.forEach(w => {
      if (w.position.x > gX) {
        gX = w.position.x
      }
      if (w.position.x < kX) {
        kX = w.position.x
      }
      if (w.position.y < kY) {
        kY = w.position.y
      }
    })

    teil.wuerfel.forEach(w => {

      let posX = w.position.x
      let posY = w.position.y

      switch (posY) {
        case kY:
          w.position.x = kX
          break
        case kY + 10:
          w.position.x = kX + 10
          break
        case kY + 20:
          w.position.x = kX + 20
          break

        default:
          break
      }

      switch (posX) {
        case gX:
          w.position.y = kY
          break
        case gX - 10:
          w.position.y = kY + 10
          break
        case gX - 20:
          w.position.y = kY + 20
          break

        default:
          break
      }

    })


  }
}