import {scene} from "../Main.js";

export function createWall() {
  // Crée une boîte de 2m de large, 3m de haut, 0,2m d'épaisseur
  var wall = BABYLON.MeshBuilder.CreateBox(
    "wall",
    { width: 28, height: 10, depth: 0.2 },
    scene
  );

  // Applique une texture au mur
  var wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
  wallMaterial.diffuseTexture = new BABYLON.Texture("../../assets/environments/wall.jpg", scene);
  wallMaterial.diffuseTexture.uScale = 4; // Répète la texture deux fois en largeur
  wallMaterial.diffuseTexture.vScale = 2; // Répète la texture trois fois en hauteur
  wall.material = wallMaterial;

  wall.position.z = -10;
  //Position du sol
  wall.position.y = 4.5;
}

export function createGround() {
  //Crée le sol
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 100, height: 100, subdivisions: 2 },
    scene
  );

  //Ajoute une texture au sol
  var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
  groundMaterial.diffuseTexture = new BABYLON.Texture("../../assets/environments/ground.png", scene);
  groundMaterial.diffuseTexture.uScale = 50; // Répète la texture deux fois en largeur
  groundMaterial.diffuseTexture.vScale = 50; // Répète la texture trois fois en hauteur
  ground.material = groundMaterial;

  ground.receiveShadows = true;
}