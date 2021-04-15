import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  }
  init(data) {
    if (data) {
      this.TileMap = require(`../../assets/Phaser/Maps/${data.map}.json`);
    }
  }
  preload() {
    this.load.tilemapTiledJSON("World", this.TileMap);
    this.load.tilemapTiledJSON("Levels", this.TileMap);
    this.load.image(
      "Castle",
      // "../../../assets/Game/World/HAS Buildings Pack 1.01/HAS Buildings Pack/Towns/Castle.png"
      "../../assets/Phaser/Castle.png"
    );
  }

  create() {
    this.map = this.add.tilemap("World");
    this.map2 = this.add.tilemap("Levels");
    console.log(this.map2, "map2");
    let tileset = this.map.addTilesetImage("SP-Overworld", "SP-Overworld");
    //let rampart = map.addTilesetImage("Rampart", "Rampart")
    //let stronghold = map.addTilesetImage("StrongHold", "StrongHold")
    //let tower = map.addTilesetImage("Tower", "Tower")
    //let necropolis = map.addTilesetImage("Necropolis", "Necropolis")
    //let inferno = map.addTilesetImage("Inferno", "Inferno")

    this.map.createLayer("World/Background", tileset);
    this.map.createLayer("World/Water", tileset);
    this.map.createLayer("World/Path", tileset);
    this.map.createLayer("World/Mountains", tileset);
    this.map.createLayer("World/Mines", tileset);
    this.map.createLayer("World/Bridges", tileset);
    this.map.createLayer("World/Woods/Woods", tileset);
    this.map.createLayer("World/Woods/Woods2", tileset);
    console.log(this.map);
    let woods = this.map.createLayer("World/Woods/Woods3", tileset);
    this.castle = this.map.createLayer("Levels/Castle", "Castle");
    console.log(this.castle, "castle");
    //castle.setInteractive()
    //console.log(castle)
    console.log(woods);
    //map.createLayer("Levels/Rampart", tileset)
    //map.createLayer("World/Levels/Stronghold", tileset)
    //map.createLayer("World/Levels/Tower", tileset)
    //map.createLayer("World/Levels/Necro", tileset)
    //map.createLayer("World/Levels/Inferno", tileset)
    this.text = this.add.text(200, 100, "hej", {
      fontSize: "20px",
      color: "red",
    });
    this.text.setInteractive();
    this.text.on(
      "pointerdown",
      () => {
        this.scene.start("MapScene", { text: "hej", map: "Ashland" });
        // map => name of json map scene ex "Ashland"
      },
      this
    );

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
