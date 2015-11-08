/*global Engine2D*/
/**
 * @author jackdalton
 */
;(function() {
    if (typeof Engine2D == "undefined") throw new Error("engine2d.js must be included before engine2d.collision.js");
    /**
     * Rectangle collision check.
     *
     * @param {object} object - Valid Engine2D game object to detect a collision with.
     * @returns {boolean} Whether or not the parent object is colliding with the specified object.
     */
    Engine2D.Rect.prototype.isCollidingWith = function(object) {
        if (object.type == Engine2D.TYPE.RECT) {
            return (this.position.getX() <= (object.position.getX() + object.size.width) &&
                object.position.getX() <= (this.position.getX() + this.size.width) &&
                this.position.getY() <= (object.position.getY() + object.size.height) &&
                object.position.getY() <= (this.position.getY() + this.size.height));
        }
        if (object.type == Engine2D.TYPE.CIRCLE) {
            var cx = Math.abs(object.position.getX() - this.position.getX() - this.size.width / 2);
            var xDist = this.size.width / 2 + object.size.radius;
            if (cx > xDist) return false;
            var cy = Math.abs(object.position.getY() - this.position.getY() - this.size.height / 2);
            var yDist = this.size.height / 2 + object.size.radius;
            if (cy > yDist) return false;
            if (cx <= this.size.width / 2 || cy <= this.size.height / 2) return true;
            var xCornerDist = cx - this.size.width / 2;
            var yCornerDist = cy - this.size.height / 2;
            var xCornerDistSq = xCornerDist * xCornerDist;
            var yCornerDistSq = yCornerDist * yCornerDist;
            var maxCornerDistSq = object.size.radius * object.size.radius;
            return xCornerDistSq + yCornerDistSq <= maxCornerDistSq;
        }
    };
    /**
     * Circle collision check.
     *
     * @param {object} object - Valid Engine2D game object to detect a collision with.
     * @returns {boolean} Whether or not the parent object is colliding with the specified object.
     */
    Engine2D.Circle.prototype.isCollidingWith = function(object) {
        if (object.type == Engine2D.TYPE.RECT) {
            var cx = Math.abs(this.position.getX() - object.position.getX() - object.size.width / 2);
            var xDist = object.size.width / 2 + this.size.radius;
            if (cx > xDist) return false;
            var cy = Math.abs(this.position.getY() - object.position.getY() - object.size.height / 2);
            var yDist = object.size.height / 2 + this.size.radius;
            if (cy > yDist) return false;
            if (cx <= object.size.width / 2 || cy <= object.size.height / 2) return true;
            var xCornerDist = cx - object.size.width / 2;
            var yCornerDist = cy - object.size.height / 2;
            var xCornerDistSq = xCornerDist * xCornerDist;
            var yCornerDistSq = yCornerDist * yCornerDist;
            var maxCornerDistSq = this.size.radius * this.size.radius;
            return xCornerDistSq + yCornerDistSq <= maxCornerDistSq;
        }
        if (object.type == Engine2D.TYPE.CIRCLE) {
            var dx = this.position.getX() - object.position.getX();
            var dy = this.position.getY() - object.position.getY();
            var dist = Math.sqrt(dx * dx + dy * dy);
            return (dist < this.size.radius + object.size.radius);
        }
    };
})();
