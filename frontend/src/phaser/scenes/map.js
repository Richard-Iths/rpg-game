import Phaser from "phaser"


export default class MapScene extends Phaser.Scene {
  constructor() {
    super("MapScene")
  }
  init(data) {
    if (data) {
      this.TileMap = require(`../../assets/Phaser/Maps/${data.map}.json`)
    }
  }

  preload() {
    this.load.tilemapTiledJSON("AshlandLevel1", this.TileMap)
  }

  create() {
    let map = this.add.tilemap("AshlandLevel1")
    let tileset = map.addTilesetImage("tf_A5_ashlands_1", "tf_A5_ashlands_1")

    map.createLayer("Ashland/Ground", tileset)
    map.createLayer("Ashland/Cliff", tileset)
    map.createLayer("Ashland/Bounds/CliffBounds", tileset)
  }
}
