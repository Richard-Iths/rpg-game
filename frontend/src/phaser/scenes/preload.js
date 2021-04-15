import Phaser from "phaser"
import WorldTile from "../../assets/Game/World/HAS Buildings Pack 1.01/HAS Overworld Starter Pack/SP-Overworld.png"
import AshlandTile from "../../assets/Game/Map/tf_ashlands/1x/tf_A5_ashlands_1.png"

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene")
  }
  preload() {
    //this.load.tilemapTiledJSON("World", World)
    this.load.image("tf_A5_ashlands_1", AshlandTile)
    this.load.image("SP-Overworld", WorldTile)
    this.load.image(
      "Castle",
      "../../../assets/Game/World/HAS Buildings Pack 1.01/HAS Buildings Pack/Towns/Castle.png"
    )
    this.load.image(
      "Rampart",
      "../../../assets/Game/World/HAS Buildings Pack 1.01/HAS Buildings Pack//Towns/Rampart.png"
    )
    this.load.image(
      "Inferno",
      "../../../assets/Game/World/HAS Buildings Pack 1.01/HAS Buildings Pack/Towns/Inferno.png"
    )
    this.load.image(
      "Necropolis",
      "../../../assets/Game/World/HAS Buildings Pack 1.01/HAS Buildings Pack/Towns/Necropolis.png"
    )
    this.load.image(
      "Tower",
      "../../../assets/Game/World/HAS Buildings Pack 1.01/HAS Buildings Pack/Towns/Tower.png"
    )
    this.load.image(
      "Stronghold",
      "../../../assets/Game/World/HAS Buildings Pack 1.01/HAS Buildings Pack/Towns/Stronghold.png"
    )
  }

  create() {
    this.scene.start("WorldScene", { text: "hej", map: "World" })
  }
}
