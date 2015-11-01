var assert = require("assert");
var Engine2D = require("../src/engine2d");

describe("Engine2D", function() {
    describe("#GameScene()", function() {
        it("should be object", function() {
            assert.equal(typeof new Engine2D.GameScene(), "object");
        });
        it("should have an array of objects named `objects`", function() {
            assert.equal(typeof new Engine2D.GameScene().objects, "object");
        });
    });
    describe("#Rect()", function() {
        it("should be object", function() {
            assert.equal(typeof new Engine2D.Rect(), "object");
        });
    });
    describe("#Circle()", function() {
        it("should be object", function() {
            assert.equal(typeof new Engine2D.Circle(), "object");
        });
    });
});