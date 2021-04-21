import React from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
//import MapScene from "../../../phaser/scenes/map";
// import PreloadScene from '../../../phaser/scenes/preload';
import WorldScene from "../../../phaser/scenes/test/world";
import * as TestScene from "../../../phaser/scenes/test/Ashland/ashlandSceneRouter";

import "./play-game.styles.scss";

console.log(TestScene)

const PlayGame = () => {
  const state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      // scene: [PreloadScene, MapScene, WorldScene]
      scene: [WorldScene, TestScene.AshlandScenes[0], TestScene.AshlandScenes[1]],
    },
  };

  const { initialize, game } = state;

  return (
    <div className="play-game">
      <IonPhaser game={game} initialize={initialize} />
    </div>
  );
};

export default PlayGame;
