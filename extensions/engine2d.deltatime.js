/*global Engine2D*/
/**
 * @author jackdalton
 */
;(function() {
    /**
     * Delta timer constructor.
     * 
     * @param {boolean} [true] autoInit - Automatically initialize timer.
     */
    if (typeof Engine2D == "undefined") throw new Error("engine2d.js must be included before engine2d.collision.js");
    Engine2D.GameScene.prototype.DeltaTimer = function(autoInit) {
        autoInit = autoInit || true;
        var self = this;
        var now = autoInit ? Date.now() : null, then, delta;
        /**
         * Updates timer.
         * 
         * @private
         */
        var updateTimer = function() {
            then = now;
            now = Date.now();
            delta = now - then;
        };
        /**
         * Initializes timer.
         */
        self.init = function() {
            now = Date.now();
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
})();