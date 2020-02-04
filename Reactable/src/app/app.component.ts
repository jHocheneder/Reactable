import { Component } from '@angular/core';

import * as BABYLON from '@babylonjs/core/Legacy/legacy';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactable';
  canvas: any;
  engine: any;
  box: any;

  ngOnInit(){
      this.canvas = document.getElementById("renderCanvas");
  

      this.engine = new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true });
      var createScene = function () {
      var scene = new BABYLON.Scene(this.engine);

      //var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
      var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
      var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(this.canvas, true);
      this.scene.clearColor = new BABYLON.Color3(0.1, 0.1, 0.1);

      //Boxes
      //var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
      //box1.position.x = 0;

      var box = [];
      for (let i = 0; i < 27; i++) {
          box[i] = BABYLON.Mesh.CreateBox("Box" + i, 10.0, scene);
          if (i == 2) {
              box[i - 2].position.x -= 10;
              box[i - 1].position.z = 10;
              BABYLON.Mesh.MergeMeshes([box[i], box[i - 1], box[i - 2]]);
          }

          if (i == 6) {
              box[i - 1].position.x = -10;
              box[i - 2].position.z -= -10;
              box[i - 3].position.z = 10;
              box[i - 3].position.x -= -10;
              box[i - 3].position.x = 10;
              BABYLON.Mesh.MergeMeshes([box[i], box[i - 1], box[i - 2], box[i - 3]]);
          }

          if (i == 10) {
              box[i - 2].position.x -= 10;
              box[i - 1].position.z = 10;
              box[i - 3].position.y = 10;
              BABYLON.Mesh.MergeMeshes([box[i], box[i - 1], box[i - 2], box[i - 3]]);
          }

          if (i == 14) {
              box[i - 2].position.x -= 10;
              box[i - 1].position.z = 10;
              box[i - 3].position.y = 10;
              box[i - 3].position.x -= 10;
              BABYLON.Mesh.MergeMeshes([box[i], box[i - 1], box[i - 2], box[i - 3]]);
          }

          if (i == 18) {
              box[i - 2].position.x -= 10;
              box[i - 1].position.x = 10;
              box[i - 3].position.x = 10;
              box[i - 3].position.z = 10;
              BABYLON.Mesh.MergeMeshes([box[i], box[i - 1], box[i - 2], box[i - 3]]);
          }

          if (i == 22) {
              box[i - 1].position.y = 10;
              box[i - 2].position.z = 10;
              box[i - 3].position.z = 10;
              box[i - 3].position.x = 10;
              BABYLON.Mesh.MergeMeshes([box[i], box[i - 1], box[i - 2], box[i - 3]]);
          }

          if (i == 26) {
              box[i - 2].position.x -= 10;
              box[i - 1].position.x = 10;
              box[i - 3].position.z = 10;
              BABYLON.Mesh.MergeMeshes([box[i], box[i - 1], box[i - 2], box[i - 3]]);
          }
      }

      /*var items = [[[]]];
      
      items[0][0][0] = 0
      items[0][0][1] = 1
      items[0][0][2] = 2

      var pointarray = [[[]]]
      for (const i of items) {
          for (const j of i) {
              for (const k of j) {
                  
                  pointarray[i][j][k] = new BABYLON.Vector3(10, 10, 10);
                  console.log('k = ', k)
              }
          }
      }*/

      var point = new BABYLON.Vector3(10, 10, 10);

      var points = [];
      points[0] = new BABYLON.Vector3(10, 10, 10);





      for (var i = 0; i < box.length; i++) {
          for (var j = 0; j < points.length; j++) {
              if (box[i].intersectsPoint(points[j])) {
                  console.log("Your point is in a mesh");
              }
          }
      }
      //var box2 = BABYLON.Mesh.CreateBox("Box2", 10.0, scene);
      //var box3 = BABYLON.Mesh.CreateBox("Box3", 10.0, scene);
      //var box4 = BABYLON.MeshBuilder.CreateBox("Box4", { height: 30, width: 7.5, depth: 2.5 }, scene);
      /*
      var boxQ = BABYLON.Mesh.CreateBox("BoxQ", 10.0, scene);
      var boxQ2 = BABYLON.Mesh.CreateBox("BoxQ2", 10.0, scene);
      boxQ2.position.z = 10;
      boxQ2.position.y -= 10;
      boxQ.position.y -=10;

      var boxes = BABYLON.Mesh.MergeMeshes([boxQ, boxQ2, box1]);
      */
      var materialBox = new BABYLON.StandardMaterial("texture1", scene);
      materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);//Green
      var materialBox1 = new BABYLON.StandardMaterial("texture1", scene);
      materialBox1.diffuseColor = new BABYLON.Color3(1, 1, 1);//Green
      var materialBoxN = new BABYLON.StandardMaterial("texture1", scene);
      materialBoxN.diffuseColor = new BABYLON.Color3(0, 0, 0);//Green
      var materialBox2 = new BABYLON.StandardMaterial("texture2", scene);

      this.box = BABYLON.Mesh.CreateBox("box", 30, scene, false);
      this.box.isPickable = false;
      var actbox;


      //boxes.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);
      var size = 5;

      // show axis
      var showAxis = function (size) {
          var makeTextPlane = function (text, color, size) {
              var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
              dynamicTexture.hasAlpha = true;
              dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
              var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
              var material =new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
              plane.material = material;
              material.backFaceCulling = false;
              material.specularColor = new BABYLON.Color3(0, 0, 0);
              material.diffuseTexture = dynamicTexture;
              return plane;
          };

          var axisX = BABYLON.Mesh.CreateLines("axisX", [
              BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
              new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
          ], scene);
          axisX.color = new BABYLON.Color3(1, 0, 0);
          var xChar = makeTextPlane("X", "red", size / 10);
          xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
          var axisY = BABYLON.Mesh.CreateLines("axisY", [
              BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
              new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
          ], scene);
          axisY.color = new BABYLON.Color3(0, 1, 0);
          var yChar = makeTextPlane("Y", "green", size / 10);
          yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
          var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
              BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
              new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
          ], scene);
          axisZ.color = new BABYLON.Color3(0, 0, 1);
          var zChar = makeTextPlane("Z", "blue", size / 10);
          zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
      };

      showAxis(25);


      /*box1.actionManager = new BABYLON.ActionManager(scene);
      box1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
          alert('box1 clicked');
      }));

      box2.actionManager = new BABYLON.ActionManager(scene);
      box2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
          alert('box1 clicked');
      }));*/

      /*var onPointerDown = function (evt) {
          // check if we are under a mesh
          var pickInfo = scene.pick(scene.pointerX, scene.pointerY);           
          if (pickInfo.hit) {
          console.log('picked Info', pickInfo.pickedMesh.name);
          }
      }

      canvas.addEventListener("pointerdown", onPointerDown, false);*/

      var selected = null;
      var safe = null;
      scene.onPointerObservable.add(function (evt) {
          if (selected) {
              selected.material.diffuseColor = BABYLON.Color3.Gray();
              selected.material = materialBox1;
              selected = null;
          }

          if (evt.pickInfo.hit && evt.pickInfo.pickedMesh && evt.event.button === 0) {
              selected = evt.pickInfo.pickedMesh;

              console.log('picked Info', evt.pickInfo.pickedMesh.name);
              evt.pickInfo.pickedMesh.material = materialBox;
              //evt.pickInfo.pickedMesh.position.x += 10;
              //evt.pickInfo.pickedMesh.material.diffuseColor = BABYLON.Color3.Green();

              scene.registerBeforeRender(function () {
                  if (selected) {

                      if (isWPressed) {
                          //if(box1.position.z < 10) { 
                          selected.position.z += 10;
                          isWPressed = false;
                          //}
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
                          selected.rotation.x += BABYLON.Tools.ToRadians(90);;
                          isXPressed = false;
                      }

                      if (isYPressed) {
                          selected.rotation.y += BABYLON.Tools.ToRadians(90);;
                          isYPressed = false;
                      }

                      if (isZPressed) {
                          selected.rotation.z += BABYLON.Tools.ToRadians(90);;
                          isZPressed = false;
                      }
                  }
              });
          }
      }, BABYLON.PointerEventTypes.POINTERUP);



      /*var gridmat = new BABYLON.GridMaterial("grid", scene);
      gridmat.mainColor = new BABYLON.Color4(0, 1, 1, 1);
      gridmat.opacity = 0.5;
      gridmat.gridRatio = 10;
      gridmat.gridOffset = new BABYLON.Vector3(5, 5, 5)
      //var mat = new BABYLON.StandardMaterial("grid", scene);
      //mat.specularColor = new BABYLON.Color3(0, 1, 1);
      box.material = gridmat;*/



      //Applying materials

      // box2.material = materialBox2;

      //Positioning box
      //box2.position.x = 10;
      //box3.position.x = 20;
      //box4.position.y = 10;
      // Creation of a basic animation with box 1
      //----------------------------------------

      //Create a scaling animation at 30 FPS

      //Here we have chosen a loop mode, but you can change to :
      //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
      //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
      //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

      // Animation keys
      var keys = [];
      //At the animation key 0, the value of scaling is "1"
      keys.push({
          frame: 0,
          value: 1
      });

      //At the animation key 20, the value of scaling is "0.2"
      keys.push({
          frame: 20,
          value: 0.2
      });

      //At the animation key 100, the value of scaling is "1"
      keys.push({
          frame: 100,
          value: 1
      });

      //Adding keys to the animation object


      //Then add the animation object to box1


      //Finally, launch animations on box1, from key 0 to key 100 with loop activated


      // Creation of a manual animation with box 2
      //------------------------------------------

      let isWPressed = false;
      let isSPressed = false;
      let isAPressed = false;
      let isDPressed = false;
      let isRPressed = false;
      let isFPressed = false;

      let isXPressed = false;
      let isYPressed = false;
      let isZPressed = false;


      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 87 && selected) { isWPressed = true; }
      });

      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 83 && selected) { isSPressed = true; }
      });

      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 65 && selected) { isAPressed = true; }
      });

      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 68 && selected) { isDPressed = true; }
      });

      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 82 && selected) { isRPressed = true; }
      });

      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 70 && selected) { isFPressed = true; }
      });


      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 88 && selected) { isXPressed = true; }
      });
      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 89 && selected) { isYPressed = true; }
      });
      document.addEventListener('keydown', (e) => {
          if (e.keyCode == 90 && selected) { isZPressed = true; }
      });


      /*
                  setInterval(function () {
      
                      //The color is defined at run time with random()
                      //box2.material.diffuseColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
      
                  }, 1000); */

      var a = 0; // for oscillation


      return scene;
  }

  var scene = createScene();



  this.engine.runRenderLoop(function () {
      if (scene) {
          scene.render();
      }
  });

  // Resize
  /*window.addEventListener("resize", function () {
      this.engine.resize();
  });*/
  }
  
}
