/*global Engine2D*/
;(function() {
    if (typeof Engine2D == "undefined") throw new Error("engine2d.js must be included before engine2d.ctx.js");
    /**
     * Engine2D canvas renderer constructor
     */
    Engine2D.GameScene.prototype.Renderer = function(context) {
        var self = this;
        /**
         * Render multiple Engine2D game objects, contained in a single object.
         * For example, an instance of Engine2D.GameScene's `objects` variable could be used.
         */
        self.renderObjects = function(objects) {
            for (var i in objects) {
                renderHandler(objects[i]);
            }
        };
        /**
         * Renders an Engine2D game object.
         */
        self.renderObject = function(object) {
            renderHandler(object);
        };
        /**
         * Clears the given HTML5 canvas context.
         */
        self.clear = function() {
            context.canvas.width = context.canvas.width;
        };
        /**
         * Renders a rectangle.
         */
        var renderRect = function(rect) {
            context.fillRect(rect.position.x, rect.position.y, rect.size.width, rect.size.height);
        };
        /**
         * Renders a circle.
         */
        var renderCircle = function(circle) {
            context.beginPath();
            context.arc(circle.position.x, circle.position.y, circle.size.radius, 0, 2 * Math.PI, false);
            context.fill();
        };
        /**
         * Handles rendering of any Engine2D game object.
         */
        var renderHandler = function(object) {
            if (object.type == Engine2D.TYPE.RECT)
                renderRect(object);
            else if (object.type == Engine2D.TYPE.CIRCLE)
                renderCircle(object);
            else
                throw new TypeError("\"" + object.type + "\" is not a valid Engine2D game object type.");
        };
    };
})();