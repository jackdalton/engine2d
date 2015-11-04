var assert = require("assert");
var Engine2D = require("../src/engine2d");
var Engine2DM = require("../prod/engine2d.min");

describe("Engine2D", function() {
    describe("#GameScene()", function() {
        it("should be object", function() {
            assert.equal(typeof new Engine2D.GameScene(), "object");
        });
        it("should have an array of objects named `objects`", function() {
            assert.equal(typeof new Engine2D.GameScene().objects, "object");
        });
        it("should not have a public function named `isValidID`", function() {
            assert.equal(typeof new Engine2D.GameScene().isValidID, "undefined");
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
describe("Engine2D minified", function() {
    describe("#GameScene()", function() {
        it("should be object", function() {
            assert.equal(typeof new Engine2DM.GameScene(), "object");
        });
        it("should have an array of objects named `objects`", function() {
            assert.equal(typeof new Engine2DM.GameScene().objects, "object");
        });
        it("should not have a public function named `isValidID`", function() {
            assert.equal(typeof new Engine2DM.GameScene().isValidID, "undefined");
        });
    });
    describe("#Rect()", function() {
        it("should be object", function() {
            assert.equal(typeof new Engine2DM.Rect(), "object");
        });
    });
    describe("#Circle()", function() {
        it("should be object", function() {
            assert.equal(typeof new Engine2DM.Circle(), "object");
        });
    });
});