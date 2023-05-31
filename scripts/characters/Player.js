import {camera, scene} from "../Main.js";

export function createPlayer() {
  BABYLON.SceneLoader.ImportMesh(
    "",
    "../../assets/characters/",
    "player.glb",
    scene,
    function (meshes, particleSystems, skeletons, animationGroups) {
      // Le premier mesh dans la liste est le mesh du personnage
      var playerMesh = meshes[0];
      // Désactiver le mesh du personnage par défaut
      playerMesh.setEnabled(true);
      // Les squelettes du personnage sont stockés dans un tableau
      var playerSkeletons = skeletons;

      // Faire suivre la caméra au personnage
      camera.lockedTarget = playerMesh;

      let animationName = "player";

      let isForward = false;
      let isBackward = false;
      let isLeft = false;
      let isRight = false;

      // Tourner le mesh de 180 degrés autour de l'axe Y
      playerMesh.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);

      let isLooking = "forward";

      scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
          case BABYLON.KeyboardEventTypes.KEYDOWN:
            switch (kbInfo.event.key) {
              case "ArrowUp":
                if (!isBackward && !isLeft && !isRight) {
                  rotationForward(playerMesh, isForward, isLooking);
                  isLooking = "forward";
                  isForward = true;
                }
                break;
              case "ArrowDown":
                if (!isForward && !isLeft && !isRight) {
                  rotationBackward(playerMesh, isBackward, isLooking);
                  isLooking = "backward";
                  isBackward = true;
                }
                break;
              case "ArrowLeft":
                if (!isForward && !isBackward && !isRight) {
                  rotationLeft(playerMesh, isLeft, isLooking);
                  isLooking = "left";
                  isLeft = true;
                }
                break;
              case "ArrowRight":
                if (!isForward && !isLeft && !isBackward) {
                  rotationRight(playerMesh, isRight, isLooking);
                  isLooking = "right";
                  isRight = true;
                }
                break;
            }
        }
      });

      scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
          case BABYLON.KeyboardEventTypes.KEYUP:
            switch (kbInfo.event.key) {
              case "ArrowUp":
                isForward = false;
                break;
              case "ArrowDown":
                isBackward = false;
                break;
              case "ArrowLeft":
                isLeft = false;
                break;
              case "ArrowRight":
                isRight = false;
                break;
            }
        }
      });

      scene.registerBeforeRender(function () {
        if (isForward || isBackward || isLeft || isRight) {
          playerMesh.setEnabled(false);
        } else {
          playerMesh.setEnabled(true);
        }
        movePlayer(
          animationName,
          isForward,
          isBackward,
          isLeft,
          isRight,
          animationGroups,
          playerMesh
        );
      });
    }
  );

   BABYLON.SceneLoader.ImportMesh(
    "",
    "../../assets/characters/",
    "walking.glb",
    scene,
    function (meshes, particleSystems, skeletons, animationGroups) {
      // Le premier mesh dans la liste est le mesh du personnage
      var playerMesh = meshes[0];
      // Désactiver le mesh du personnage par défaut
      playerMesh.setEnabled(false);
      // Les squelettes du personnage sont stockés dans un tableau
      var playerSkeletons = skeletons;

      let animationName = "walking";

      let isForward = false;
      let isBackward = false;
      let isLeft = false;
      let isRight = false;

      let isLooking = "forward";

      // Faire suivre la caméra au personnage
      camera.lockedTarget = playerMesh;

      scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
          case BABYLON.KeyboardEventTypes.KEYDOWN:
            switch (kbInfo.event.key) {
              case "ArrowUp":
                if (!isBackward && !isLeft && !isRight) {
                  rotationForward(playerMesh, isForward, isLooking);
                  isLooking = "forward";
                  isForward = true;
                }
                break;
              case "ArrowDown":
                if (!isForward && !isLeft && !isRight) {
                  rotationBackward(playerMesh, isBackward, isLooking);
                  isLooking = "backward";
                  isBackward = true;
                }
                break;
              case "ArrowLeft":
                if (!isForward && !isBackward && !isRight) {
                  rotationLeft(playerMesh, isLeft, isLooking);
                  isLooking = "left";
                  isLeft = true;
                }
                break;
              case "ArrowRight":
                if (!isForward && !isLeft && !isBackward) {
                  rotationRight(playerMesh, isRight, isLooking);
                  isLooking = "right";
                  isRight = true;
                }
                break;
            }
        }
      });

      scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
          case BABYLON.KeyboardEventTypes.KEYUP:
            switch (kbInfo.event.key) {
              case "ArrowUp":
                isForward = false;
                break;
              case "ArrowDown":
                isBackward = false;
                break;
              case "ArrowLeft":
                isLeft = false;
                break;
              case "ArrowRight":
                isRight = false;
                break;
            }
        }
      });

      scene.registerBeforeRender(function () {
        if (isForward || isBackward || isLeft || isRight) {
          playerMesh.setEnabled(true);
        } else {
          playerMesh.setEnabled(false);
        }

        movePlayer(
          animationName,
          isForward,
          isBackward,
          isLeft,
          isRight,
          animationGroups,
          playerMesh
        );
      });

      // Tourner le mesh de 180 degrés autour de l'axe Y
      playerMesh.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
    }
  );
}

function rotationForward(playerMesh, isForward, isLooking) {
  if (!isForward && isLooking == "backward") {
    playerMesh.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
  } else if (!isForward && isLooking == "left") {
    playerMesh.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
  } else if (!isForward && isLooking == "right") {
    playerMesh.rotate(BABYLON.Axis.Y, -Math.PI / 2, BABYLON.Space.LOCAL);
  }
}

function rotationBackward(playerMesh, isBackward, isLooking) {
  if (!isBackward && isLooking == "forward") {
    playerMesh.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
  } else if (!isBackward && isLooking == "left") {
    playerMesh.rotate(BABYLON.Axis.Y, -Math.PI / 2, BABYLON.Space.LOCAL);
  } else if (!isBackward && isLooking == "right") {
    playerMesh.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
  }
}

function rotationLeft(playerMesh, isLeft, isLooking) {
  if (!isLeft && isLooking == "right") {
    playerMesh.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
  } else if (!isLeft && isLooking == "forward") {
    playerMesh.rotate(BABYLON.Axis.Y, -Math.PI / 2, BABYLON.Space.LOCAL);
  } else if (!isLeft && isLooking == "backward") {
    playerMesh.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
  }
}

function rotationRight(playerMesh, isRight, isLooking) {
  if (!isRight && isLooking == "left") {
    playerMesh.rotate(BABYLON.Axis.Y, -Math.PI, BABYLON.Space.LOCAL);
  } else if (!isRight && isLooking == "forward") {
    playerMesh.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.LOCAL);
  } else if (!isRight && isLooking == "backward") {
    playerMesh.rotate(BABYLON.Axis.Y, -Math.PI / 2, BABYLON.Space.LOCAL);
  }
}

function movePlayer(
  animationName,
  isForward,
  isBackward,
  isLeft,
  isRight,
  animationGroups,
  playerMesh
) {
  if (isForward) {
    animationGroups[0].play();
    playerMesh.position.z -= 0.1;
  } else if (isBackward) {
    animationGroups[0].play();
    playerMesh.position.z += 0.1;
  } else if (isLeft) {
    animationGroups[0].play();
    playerMesh.position.x += 0.05;
  } else if (isRight) {
    animationGroups[0].play();
    playerMesh.position.x -= 0.05;
  } else if (animationName == "walking") {
    animationGroups[0].pause();
  }
}