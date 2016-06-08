// main.js

phina.globalize();

var ASSETS = {
  image: {
    "minami": "sprite/minami.png"
  },
  spritesheet: {
    "minami_ss": "sprite/minami.ss"
  }
};

phina.define("MainScene", {
	superClass: "DisplayScene",

	init: function() {
		this.superInit();

		var minami = Sprite("minami", 31, 32).addChildTo(this);
		minami.ss = FrameAnimation("minami_ss").attachTo(minami).gotoAndPlay("down");

		minami.x = 134;
		minami.y = 134;

		this.player = minami;
	},

	update: function(app) {
		var keyboard = app.keyboard;

		if (keyboard.getKey("left")) {
			this.player.ss.gotoAndPlay("left");
		}
		if (keyboard.getKey("right")) {
			this.player.ss.gotoAndPlay("right");
		}
		if (keyboard.getKey("up")) {
			this.player.ss.gotoAndPlay("up");
		}
		if (keyboard.getKey("down")) {
			this.player.ss.gotoAndPlay("down");
		}
	}
});

phina.main(function() {
	var app = GameApp({
		startLabel: "main",
		fit: false,
		width: 300,
		height: 300,
		assets: ASSETS
	});

	// app.enableStats();
	app.backgroundColor = "#DDDDDD";
	app.run();
});
