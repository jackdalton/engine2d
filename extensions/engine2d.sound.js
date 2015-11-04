/*global Engine2D*/
/**
 * @author jackdalton
 */
;(function() {
    if (typeof Engine2D == "undefined") throw new Error("engine2d.js must be included before engine2d.collision.js");
    /**
     * Sound player constructor.
     * 
     * @constructor
     * @param {string=} audioSrc - Path to the audio file to play.
     */
    Engine2D.GameScene.prototype.SoundPlayer = function(audioSrc) {
        var self = this;
        audioSrc = audioSrc || null;
        var sound = new Audio(audioSrc);
        /**
         * Play sound.
         */
        self.playSound = function() {
            sound.play();
        };
        /**
         * Pause sound.
         */
        self.pauseSound = function() {
            sound.pause();
        };
        /**
         * Get whether or not the sound is paused.
         * 
         * @returns {boolean} paused
         */
        self.getPaused = function() {
            return sound.paused;
        };
        /**
         * Get sound ready state.
         * 
         * @returns {integer} state
         */
        self.getReadyState = function() {
            return sound.readyState;
        };
        /**
         * Get whether or not the sound is set to loop.
         * 
         * @returns {boolean} loop
         */
        self.getLoopState = function() {
            return sound.loop;
        };
        /**
         * Set whether or not the sound will loop.
         */
        self.setLoopState = function(loopState) {
            sound.loop = loopState;
        };
        /**
         * Set `SoundPlayer` audio source.
         * 
         * @param {string} src - Path to the audio file to play.
         */
        self.setSrc = function(path) {
            sound.src = path;
        };
        /**
         * Sets the current playback time.
         * 
         * @param {double} time - Time in seconds of the desired playback time.
         */
        self.setCurrentTime = function(time) {
            sound.currentTime = time;
        };
        /**
         * Gets the current playback time.
         * 
         * @returns {double} time - Current playback time.
         */
        self.getCurrentTime = function() {
            return sound.currentTime;
        };
        /**
         * Gets the current audio source.
         * 
         * @returns {DOMString} url - The absolute URL of the audio source.
         */
        self.getCurrentSrc = function() {
            return sound.currentSrc;
        };
    };
})();