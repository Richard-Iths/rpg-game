import Phaser from "phaser";

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
    this.layers = {};
  }

  preload() {
    this.load.tilemapTiledJSON("worldMap", "/assets/Phaser/Maps/World.json");
    this.load.image("world", "/assets/Phaser/SP-Overworld.png");
    this.load.image("castle", "/assets/Phaser/Towns/Castle.png");
    this.load.image("inferno", "/assets/Phaser/Towns/Inferno.png");
    this.load.image("necropolis", "/assets/Phaser/Towns/Necropolis.png");
    this.load.image("rampart", "/assets/Phaser/Towns/Rampart.png");
    this.load.image("stronghold", "/assets/Phaser/Towns/Stronghold.png");
    this.load.image("tower", "/assets/Phaser/Towns/Tower.png");
  }

  create() {
    this.createMaps();
    this.createLayers();
  }

  createMaps() {
    this.map = this.make.tilemap({ key: "worldMap" });
    this.worldTilset = this.map.addTilesetImage("SP-Overworld", "world");
    this.levelTilset = {
      castle: this.map.addTilesetImage("Castle", "castle"),
      inferno: this.map.addTilesetImage("Inferno", "inferno"),
      necropolis: this.map.addTilesetImage("Necropolis", "necropolis"),
      rampart: this.map.addTilesetImage("Rampart", "rampart"),
      stronghold: this.map.addTilesetImage("Stronghold", "stronghold"),
      tower: this.map.addTilesetImage("Tower", "tower"),
    };
  }

  createLayers() {
    this.layers.background = this.map.createLayer(
      "World/Background",
      this.worldTilset
    );
    this.layers.mines = this.map.createLayer("World/Mines", this.worldTilset);
    this.layers.water = this.map.createLayer("World/Water", this.worldTilset);
    this.layers.bridges = this.map.createLayer(
      "World/Bridges",
      this.worldTilset
    );
    this.layers.path = this.map.createLayer("World/Path", this.worldTilset);
    this.layers.mountains = this.map.createLayer(
      "World/Mountains",
      this.worldTilset
    );
    this.layers.woods = {
      woods: this.map.createLayer("World/Woods/Woods", this.worldTilset),
      woods2: this.map.createLayer("World/Woods/Woods2", this.worldTilset),
      woods3: this.map.createLayer("World/Woods/Woods3", this.worldTilset),
    };

    this.layers.levels = {
      castle: this.map.createLayer("Levels/Castle", this.levelTilset.castle),
      inferno: this.map.createLayer("Levels/Inferno", this.levelTilset.inferno),
      necropolis: this.map.createLayer(
        "Levels/Necro",
        this.levelTilset.necropolis
      ),
      rampart: this.map.createLayer("Levels/Rampart", this.levelTilset.rampart),
      stronghold: this.map.createLayer(
        "Levels/Stronghold",
        this.levelTilset.stronghold
      ),
      tower: this.map.createLayer("Levels/Tower", this.levelTilset.tower),
    };
  }
}
