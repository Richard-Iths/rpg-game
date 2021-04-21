import Phaser from "phaser"

export default class AshlandScene extends Phaser.Scene {
  constructor(scen, scenId, skurt) {
    super(scen)
    this.layers = {}
    console.log(skurt)
    this.scenId = scenId
  }
  preload() {
    this.load.tilemapTiledJSON(
      "ashlandMap",
      `/assets/Phaser/Maps/Ashland${this.scenId}.json`
    )
    this.load.image("ashland", "/assets/Phaser/tf_A5_ashlands_1.png")
  }
  create() {
    this.createMaps()
    this.createLayers()
  }
  createMaps() {
    this.map = this.make.tilemap({ key: "ashlandMap" })
    this.ashlandTilset = this.map.addTilesetImage("tf_A5_ashlands_1", "ashland")
  }
  createLayers() {
    this.map.createLayer("Ashland/Ground", this.ashlandTilset)
    this.map.createLayer("Ashland/Cliff", this.ashlandTilset)
    this.map.createLayer("Ashland/Bounds/CliffBounds", this.ashlandTilset)
  }
}
