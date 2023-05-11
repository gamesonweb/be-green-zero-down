import {createPlayer} from "./characters/Player.js";
import {createGround, createWall} from "./environments/Environments.js";


// Créer le moteur de rendu
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

// Créer une scène
export var scene = new BABYLON.Scene(engine);

// Créer la caméra
export var camera = new BABYLON.ArcRotateCamera(
  "camera",
  Math.PI / 2,
  75 * (Math.PI / 180),
  20,
  BABYLON.Vector3.Zero(),
  scene
);

// Ajouter une lumière
var light = new BABYLON.HemisphericLight(
  "light1",
  new BABYLON.Vector3(0, 1, 0),
  scene
);

createPlayer();

createGround();

createWall();

// Afficher la scène
engine.runRenderLoop(function () {
  scene.render();
});