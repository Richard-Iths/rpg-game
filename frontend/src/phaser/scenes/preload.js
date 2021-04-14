import Phaser from "phaser"
import World from "../../assets/Phaser/Maps/World.json"
import WorldTile from "../../assets/Game/World/HAS Buildings Pack 1.01/HAS Overworld Starter Pack/SP-Overworld.png"

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene")
  }

  preload() {
    this.load.tilemapTiledJSON("World", World)
    this.load.image("SP-Overworld", WorldTile)
  }

  create() {
    let map = this.add.tilemap("World")
    let tileset = map.addTilesetImage("SP-Overworld", "SP-Overworld")

    map.createLayer("World/Background", tileset)
    map.createLayer("World/Water", tileset)
    map.createLayer("World/Path", tileset)
    map.createLayer("World/Mountains", tileset)
    map.createLayer("World/Mines", tileset)
    map.createLayer("World/Bridges", tileset)
    map.createLayer("World/Woods/Woods", tileset)
    map.createLayer("World/Woods/Woods2", tileset)
    map.createLayer("World/Woods/Woods3", tileset)
    this.text = this.add.text(200, 100, "hej", {
      fontSize: "20px",
      color: "red",
    })
    this.text.setInteractive()

    this.text.on(
      "pointerdown",
      () => {
        this.scene.start("MapScene", { text: "hej", map: "Ashland" })
        // map => name of json map scene ex "Ashland"
      },
      this
    )

    /*
  
    missing => 
    map.createLayer("World/Levels/Castle")
    map.createLayer("World/Levels/Rampart")
    map.createLayer("World/Levels/Stronghold")
    map.createLayer("World/Levels/Tower")
    map.createLayer("World/Levels/Necro")
    map.createLayer("World/Levels/Inferno")
    */
  }
}
