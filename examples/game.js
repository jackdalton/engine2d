// uses engine2d.ctx.js extension

(function() {
    var scene = new Engine2D.GameScene();
    var ctx = document.getElementById("cnv").getContext("2d");
    var renderer = new scene.Renderer(ctx);
    var keysDown = {};
    var player = new Engine2D.Rect({
        width: 100,
        height: 100,
        id: "player",
        x: 250,
        y: 250
    });
    var testObject = new Engine2D.Circle({
        radius: 25,
        id: "testObject",
        x: 100,
        y: 100
    });
    scene.addObject(player);
    scene.addObject(testObject);
    var soundPlayer = new scene.SoundPlayer("sound.wav");
    var then = Date.now();
    console.log("play");
    soundPlayer.playSound();
    setTimeout(function() {
        console.log("pause");
        soundPlayer.pauseSound();
        setTimeout(function() {
            console.log(soundPlayer.getPaused());
            console.log("unpause");
            soundPlayer.playSound();
            console.log("set loop");
            soundPlayer.setLoopState(true);
        }, 1000);
    }, 2000);
    updateLoop();
    function updateLoop() {
        var now = Date.now();
        var delta = now - then;
        then = now;
        if (scene.objects.player.isCollidingWith(scene.objects.testObject)) {
            console.log("Collision!");
        }
        (function(d) {
            if (37 in keysDown) {
                // left
                scene.objects.player.position.x -= 180 * d;
            }
            if (38 in keysDown) {
                // up
                scene.objects.player.position.y -= 180 * d;
            }
            if (39 in keysDown) {
                // right
                scene.objects.player.position.x += 180 * d;
            }
            if (40 in keysDown) {
                // down
                scene.objects.player.position.y += 180 * d;
            }
        })(delta / 1000);
        renderer.clear();
        renderer.renderObjects(scene.objects);
        window.requestAnimationFrame(updateLoop);
    }
    addEventListener("keydown", function(ev) {
        keysDown[ev.keyCode] = true;
    }, false);
    addEventListener("keyup", function(ev) {
        delete keysDown[ev.keyCode];
    }, false);
})();