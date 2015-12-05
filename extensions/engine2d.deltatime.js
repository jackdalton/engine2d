/*global Engine2D*/
/**
 * @author jackdalton
 */
;
(function() {
    if (typeof Engine2D == "undefined") throw new Error("engine2d.js must be included before engine2d.deltatime.js");
    Engine2D.registerExtension({
        extensionName: "engine2d.deltatime.js",
        version: "0.0.1",
        exec: function() {
            /**
             * Delta timer constructor.
             * 
             * @param {boolean} [true] autoInit - Automatically initialize timer.
             */
            Engine2D.GameScene.prototype.DeltaTimer = function(autoInit) {
                autoInit = autoInit || true;
                var self = this;
                var now = autoInit ? performance.now() : null,
                    then, delta;
                /**
                 * Updates timer.
                 * 
                 * @private
                 */
                var updateTimer = function() {
                    then = now;
                    now = performance.now();
                    delta = now - then;
                };
                /**
                 * Initializes timer.
                 */
                self.init = function() {
                    now = performance.now();
                };
                /**
                 * Updates timer.
                 * 
                 * @returns {integer} delta - Delta time in milliseconds.
                 */
                self.update = function() {
                    updateTimer();
                    return delta;
                };
                /**
                 * Gets last recorded delta without updating timer.
                 */
                self.getDelta = function() {
                    return delta;
                };
                /**
                 * Resets timer.
                 */
                self.resetTimer = function() {
                    now = null,
                        then = null,
                        delta = null;
                };
            };
        }
    })

})();