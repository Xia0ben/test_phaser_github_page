/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Direction.ts":
/*!**************************!*\
  !*** ./src/Direction.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Direction = void 0;\nvar Direction;\n(function (Direction) {\n    Direction[\"NONE\"] = \"none\";\n    Direction[\"LEFT\"] = \"left\";\n    Direction[\"UP\"] = \"up\";\n    Direction[\"RIGHT\"] = \"right\";\n    Direction[\"DOWN\"] = \"down\";\n})(Direction = exports.Direction || (exports.Direction = {}));\n\n\n//# sourceURL=webpack:///./src/Direction.ts?");

/***/ }),

/***/ "./src/GridControls.ts":
/*!*****************************!*\
  !*** ./src/GridControls.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GridControls = void 0;\nvar GridControls = /** @class */ (function () {\n    function GridControls(input, gridPhysics) {\n        this.input = input;\n        this.gridPhysics = gridPhysics;\n    }\n    GridControls.prototype.update = function () {\n        // const cursors = this.input.keyboard.createCursorKeys();\n        // if (cursors.left.isDown) {\n        //   this.gridPhysics.movePlayer(Direction.LEFT);\n        // } else if (cursors.right.isDown) {\n        //   this.gridPhysics.movePlayer(Direction.RIGHT);\n        // } else if (cursors.up.isDown) {\n        //   this.gridPhysics.movePlayer(Direction.UP);\n        // } else if (cursors.down.isDown) {\n        //   this.gridPhysics.movePlayer(Direction.DOWN);\n        // }\n    };\n    return GridControls;\n}());\nexports.GridControls = GridControls;\n\n\n//# sourceURL=webpack:///./src/GridControls.ts?");

/***/ }),

/***/ "./src/GridPhysics.ts":
/*!****************************!*\
  !*** ./src/GridPhysics.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GridPhysics = void 0;\nvar main_1 = __webpack_require__(/*! ./main */ \"./src/main.ts\");\nvar Direction_1 = __webpack_require__(/*! ./Direction */ \"./src/Direction.ts\");\nvar Vector2 = Phaser.Math.Vector2;\nvar GridPhysics = /** @class */ (function () {\n    function GridPhysics(player, tileMap) {\n        var _a;\n        this.player = player;\n        this.tileMap = tileMap;\n        this.movementDirection = Direction_1.Direction.NONE;\n        this.speedPixelsPerSecond = main_1.GameScene.TILE_SIZE * 4;\n        this.tileSizePixelsWalked = 0;\n        this.decimalPlacesLeft = 0;\n        this.movementDirectionVectors = (_a = {},\n            _a[Direction_1.Direction.UP] = Vector2.UP,\n            _a[Direction_1.Direction.DOWN] = Vector2.DOWN,\n            _a[Direction_1.Direction.LEFT] = Vector2.LEFT,\n            _a[Direction_1.Direction.RIGHT] = Vector2.RIGHT,\n            _a);\n    }\n    GridPhysics.prototype.movePlayer = function (direction) {\n        if (this.isMoving())\n            return;\n        if (this.isBlockingDirection(direction)) {\n            this.player.setStandingFrame(direction);\n        }\n        else {\n            this.startMoving(direction);\n        }\n    };\n    GridPhysics.prototype.update = function (delta) {\n        if (this.isMoving()) {\n            this.updatePlayerPosition(delta);\n        }\n    };\n    GridPhysics.prototype.isMoving = function () {\n        return this.movementDirection != Direction_1.Direction.NONE;\n    };\n    GridPhysics.prototype.startMoving = function (direction) {\n        this.movementDirection = direction;\n    };\n    GridPhysics.prototype.tilePosInDirection = function (direction) {\n        return this.player\n            .getTilePos()\n            .add(this.movementDirectionVectors[direction]);\n    };\n    GridPhysics.prototype.isBlockingDirection = function (direction) {\n        return this.hasBlockingTile(this.tilePosInDirection(direction));\n    };\n    GridPhysics.prototype.hasNoTile = function (pos) {\n        var _this = this;\n        return !this.tileMap.layers.some(function (layer) {\n            return _this.tileMap.hasTileAt(pos.x, pos.y, layer.name);\n        });\n    };\n    GridPhysics.prototype.hasBlockingTile = function (pos) {\n        var _this = this;\n        if (this.hasNoTile(pos))\n            return true;\n        return this.tileMap.layers.some(function (layer) {\n            var tile = _this.tileMap.getTileAt(pos.x, pos.y, false, layer.name);\n            return tile && tile.properties.collides;\n        });\n    };\n    GridPhysics.prototype.updatePlayerPosition = function (delta) {\n        this.decimalPlacesLeft = this.getDecimalPlaces(this.getSpeedPerDelta(delta) + this.decimalPlacesLeft);\n        var pixelsToWalkThisUpdate = this.getIntegerPart(this.getSpeedPerDelta(delta) + this.decimalPlacesLeft);\n        if (this.willCrossTileBorderThisUpdate(pixelsToWalkThisUpdate)) {\n            this.movePlayerSpriteRestOfTile();\n        }\n        else {\n            this.movePlayerSprite(pixelsToWalkThisUpdate);\n        }\n    };\n    GridPhysics.prototype.getIntegerPart = function (float) {\n        return Math.floor(float);\n    };\n    GridPhysics.prototype.getDecimalPlaces = function (float) {\n        return float % 1;\n    };\n    GridPhysics.prototype.getSpeedPerDelta = function (delta) {\n        var deltaInSeconds = delta / 1000;\n        return this.speedPixelsPerSecond * deltaInSeconds;\n    };\n    GridPhysics.prototype.willCrossTileBorderThisUpdate = function (pixelsToWalkThisUpdate) {\n        return (this.tileSizePixelsWalked + pixelsToWalkThisUpdate >= main_1.GameScene.TILE_SIZE);\n    };\n    GridPhysics.prototype.movePlayerSpriteRestOfTile = function () {\n        this.movePlayerSprite(main_1.GameScene.TILE_SIZE - this.tileSizePixelsWalked);\n        this.stopMoving();\n    };\n    GridPhysics.prototype.movePlayerSprite = function (speed) {\n        var newPlayerPos = this.player\n            .getPosition()\n            .add(this.movementDistance(speed));\n        this.player.setPosition(newPlayerPos);\n        this.tileSizePixelsWalked += speed;\n        this.updatePlayerFrame(this.movementDirection, this.tileSizePixelsWalked);\n        this.tileSizePixelsWalked %= main_1.GameScene.TILE_SIZE;\n    };\n    GridPhysics.prototype.updatePlayerFrame = function (direction, tileSizePixelsWalked) {\n        if (this.hasWalkedHalfATile(tileSizePixelsWalked)) {\n            this.player.setStandingFrame(direction);\n        }\n        else {\n            this.player.setWalkingFrame(direction);\n        }\n    };\n    GridPhysics.prototype.hasWalkedHalfATile = function (tileSizePixelsWalked) {\n        return tileSizePixelsWalked > main_1.GameScene.TILE_SIZE / 2;\n    };\n    GridPhysics.prototype.stopMoving = function () {\n        this.movementDirection = Direction_1.Direction.NONE;\n    };\n    GridPhysics.prototype.movementDistance = function (speed) {\n        return this.movementDirectionVectors[this.movementDirection]\n            .clone()\n            .multiply(new Vector2(speed));\n    };\n    return GridPhysics;\n}());\nexports.GridPhysics = GridPhysics;\n\n\n//# sourceURL=webpack:///./src/GridPhysics.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Player = void 0;\nvar Direction_1 = __webpack_require__(/*! ./Direction */ \"./src/Direction.ts\");\nvar main_1 = __webpack_require__(/*! ./main */ \"./src/main.ts\");\nvar Player = /** @class */ (function () {\n    function Player(sprite, characterIndex, startTilePosX, startTilePosY) {\n        var _a;\n        this.sprite = sprite;\n        this.characterIndex = characterIndex;\n        this.directionToFrameRow = (_a = {},\n            _a[Direction_1.Direction.DOWN] = 0,\n            _a[Direction_1.Direction.LEFT] = 1,\n            _a[Direction_1.Direction.RIGHT] = 2,\n            _a[Direction_1.Direction.UP] = 3,\n            _a);\n        this.lastFootLeft = false;\n        this.sprite.scale = Player.SCALE_FACTOR;\n        this.sprite.setPosition(startTilePosX * main_1.GameScene.TILE_SIZE + this.playerOffsetX(), startTilePosY * main_1.GameScene.TILE_SIZE + this.playerOffsetY());\n        this.sprite.setFrame(this.framesOfDirection(Direction_1.Direction.DOWN).standing);\n    }\n    Player.prototype.getPosition = function () {\n        return this.sprite.getCenter();\n    };\n    Player.prototype.setPosition = function (position) {\n        this.sprite.setPosition(position.x, position.y);\n    };\n    Player.prototype.setWalkingFrame = function (direction) {\n        var frameRow = this.framesOfDirection(direction);\n        this.sprite.setFrame(this.lastFootLeft ? frameRow.rightFoot : frameRow.leftFoot);\n    };\n    Player.prototype.setStandingFrame = function (direction) {\n        if (this.isCurrentFrameStanding(direction)) {\n            this.lastFootLeft = !this.lastFootLeft;\n        }\n        this.sprite.setFrame(this.framesOfDirection(direction).standing);\n    };\n    Player.prototype.getTilePos = function () {\n        var x = (this.sprite.getCenter().x - this.playerOffsetX()) / main_1.GameScene.TILE_SIZE;\n        var y = (this.sprite.getCenter().y - this.playerOffsetY()) / main_1.GameScene.TILE_SIZE;\n        return new Phaser.Math.Vector2(Math.floor(x), Math.floor(y));\n    };\n    Player.prototype.isCurrentFrameStanding = function (direction) {\n        return (Number(this.sprite.frame.name) !=\n            this.framesOfDirection(direction).standing);\n    };\n    Player.prototype.playerOffsetX = function () {\n        return main_1.GameScene.TILE_SIZE / 2;\n    };\n    Player.prototype.playerOffsetY = function () {\n        return (-((Player.SPRITE_FRAME_HEIGHT * Player.SCALE_FACTOR) %\n            main_1.GameScene.TILE_SIZE) / 2);\n    };\n    Player.prototype.framesOfDirection = function (direction) {\n        var playerCharRow = Math.floor(this.characterIndex / Player.CHARS_IN_ROW);\n        var playerCharCol = this.characterIndex % Player.CHARS_IN_ROW;\n        var framesInRow = Player.CHARS_IN_ROW * Player.FRAMES_PER_CHAR_ROW;\n        var framesInSameRowBefore = Player.FRAMES_PER_CHAR_ROW * playerCharCol;\n        var rows = this.directionToFrameRow[direction] +\n            playerCharRow * Player.FRAMES_PER_CHAR_COL;\n        var startFrame = framesInSameRowBefore + rows * framesInRow;\n        return {\n            leftFoot: startFrame,\n            standing: startFrame + 1,\n            rightFoot: startFrame + 2,\n        };\n    };\n    Player.SPRITE_FRAME_WIDTH = 52;\n    Player.SPRITE_FRAME_HEIGHT = 72;\n    Player.SCALE_FACTOR = 1.5;\n    Player.CHARS_IN_ROW = 4;\n    Player.FRAMES_PER_CHAR_ROW = 3;\n    Player.FRAMES_PER_CHAR_COL = 4;\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./src/Player.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.game = exports.GameScene = void 0;\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\nvar GridControls_1 = __webpack_require__(/*! ./GridControls */ \"./src/GridControls.ts\");\nvar GridPhysics_1 = __webpack_require__(/*! ./GridPhysics */ \"./src/GridPhysics.ts\");\nvar Player_1 = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: \"Game\",\n};\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        return _super.call(this, sceneConfig) || this;\n    }\n    GameScene.prototype.create = function () {\n        var cloudCityTilemap = this.make.tilemap({ key: \"cloud-city-map\" });\n        cloudCityTilemap.addTilesetImage(\"Cloud City\", \"tiles\");\n        for (var i = 0; i < cloudCityTilemap.layers.length; i++) {\n            var layer = cloudCityTilemap.createStaticLayer(i, \"Cloud City\", 0, 0);\n            layer.setDepth(i);\n            layer.scale = 3;\n        }\n        var playerSprite = this.add.sprite(0, 0, \"player\");\n        playerSprite.setDepth(2);\n        this.cameras.main.startFollow(playerSprite);\n        this.gridPhysics = new GridPhysics_1.GridPhysics(new Player_1.Player(playerSprite, 6, 8, 8), cloudCityTilemap);\n        this.gridControls = new GridControls_1.GridControls(this.input, this.gridPhysics);\n    };\n    GameScene.prototype.update = function (_time, delta) {\n        this.gridControls.update();\n        this.gridPhysics.update(delta);\n    };\n    GameScene.prototype.preload = function () {\n        this.load.image(\"tiles\", \"assets/cloud_tileset.png\");\n        this.load.tilemapTiledJSON(\"cloud-city-map\", \"assets/cloud_city.json\");\n        this.load.spritesheet(\"player\", \"assets/characters.png\", {\n            frameWidth: Player_1.Player.SPRITE_FRAME_WIDTH,\n            frameHeight: Player_1.Player.SPRITE_FRAME_HEIGHT,\n        });\n    };\n    GameScene.CANVAS_WIDTH = 720;\n    GameScene.CANVAS_HEIGHT = 528;\n    GameScene.TILE_SIZE = 48;\n    return GameScene;\n}(Phaser.Scene));\nexports.GameScene = GameScene;\nvar gameConfig = {\n    title: \"Sample\",\n    render: {\n        antialias: false,\n    },\n    type: Phaser.AUTO,\n    scene: GameScene,\n    scale: {\n        width: GameScene.CANVAS_WIDTH,\n        height: GameScene.CANVAS_HEIGHT,\n        autoCenter: Phaser.Scale.CENTER_BOTH,\n    },\n    parent: \"game\",\n    backgroundColor: \"#48C4F8\",\n};\nexports.game = new Phaser.Game(gameConfig);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });