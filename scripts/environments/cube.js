import {scene} from "../Main.js";

function generateRandomPosition() {
    var minX = -50; // Valeur minimale en X
    var maxX = 50; // Valeur maximale en X
    var minZ = -20; // Valeur minimale en Z
    var maxZ = -20; // Valeur maximale en Z
  
    var randomX = Math.random() * (maxX - minX) + minX;
    var randomY = Math.random() * (1 - 1) + 1;
    var randomZ = Math.random() * (maxZ - minZ) + minZ;
  
    return new BABYLON.Vector3(randomX, randomY, randomZ);
  }

  function randomGenerateCube(){
    var min = 1;
    var max = 10;
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;

  }
  

export function createCube(){
    if(randomGenerateCube() == 3){
        var box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);

        var material = new BABYLON.StandardMaterial("material", scene);
        material.diffuseColor = new BABYLON.Color3(0, 1, 0); // Couleur rouge

        box.material = material;

        var position = generateRandomPosition();
        box.position.x = position.x;
        box.position.y += position.y;
        box.position.z = position.z;


        var speed = 0.1; // Vitesse de déplacement du cube
        
        scene.onBeforeRenderObservable.add(function () {
            // Déplacement du cube
            box.position.z += speed;
      
        
        });
    }
    
}

export function createCube2(){
  if(randomGenerateCube() == 3){
      var box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);

      var material = new BABYLON.StandardMaterial("material", scene);
      material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Couleur rouge

      box.material = material;

      var position = generateRandomPosition();
      box.position.x = position.x;
      box.position.y += position.y;
      box.position.z = position.z;


      var speed = 0.1; // Vitesse de déplacement du cube
      
      scene.onBeforeRenderObservable.add(function () {
          // Déplacement du cube
          box.position.z += speed;
    
      
      });
  }
  
}

