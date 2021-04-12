import React from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import MapScene from '../../../phaser/scenes/map';
import PreloadScene from '../../../phaser/scenes/preload';

import "./play-game.styles.scss";

const PlayGame = () => {
  const state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: [PreloadScene, MapScene]
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
