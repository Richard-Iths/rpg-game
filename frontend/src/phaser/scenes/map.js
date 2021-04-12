import Phaser from "phaser"
import bild from "../../assets/mainSvg.svg"

export default class MapScene extends Phaser.Scene {
  constructor() {
    super("MapScene")
  }

  preload() {
    this.load.svg("test", bild)

    // this.load.image("test", bild)
  }

  create() {
    this.add.image(0, 0, "test").setOrigin(0.5)
  }
}
