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
        position: new Engine2D.Vector2(250, 250)
    });
    var testObject = new Engine2D.Circle({
        radius: 25,
        id: "testObject",
        position: new Engine2D.Vector2(100, 100)
    });
    var timer = new scene.DeltaTimer();
    scene.addObject(player);
    scene.addObject(testObject);
    var soundPlayer = new scene.SoundPlayer("sound.wav");
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
        var delta = timer.update();
        if (scene.objects.player.isCollidingWith(scene.objects.testObject)) {
            console.log("Collision!");
        }
        (function(d) {
            if (37 in keysDown) {
                // left
                scene.objects.player.position.translate(-(180 * d), 0);
            }
            if (38 in keysDown) {
                // up
                scene.objects.player.position.translate(0, -(180 * d));
            }
            if (39 in keysDown) {
                // right
                scene.objects.player.position.translate(180 * d, 0);
            }
            if (40 in keysDown) {
                // down
                scene.objects.player.position.translate(0, 180 * d);
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
