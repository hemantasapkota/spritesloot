cgEntityModel = {"animations": [{"animationName": "JumperRight","animationDuration": 0.05,"defaultAnimation": true,"collisionType": "CUSTOM","spritesheetFile": {"resourceFile": "/SpritesDemo/textures/Jumper.png","resourceFileAbsolute": "/Users/anivamainali/Desktop/Projects/WS/runtime-lbd2.product/SpritesDemo/textures/Jumper.png"},"spritesheetJsonFile": {"resourceFile": "","resourceFileAbsolute": ""},"fixtureFile": {"resourceFile": "/SpritesDemo/textures/spandex.json","resourceFileAbsolute": "/Users/anivamainali/Desktop/Projects/WS/runtime-lbd2.product/SpritesDemo/textures/spandex.json"},"spritesheetItems": [{"extractBounds": {"x": 0.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 27},{"extractBounds": {"x": 124.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 28},{"extractBounds": {"x": 248.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 29},{"extractBounds": {"x": 372.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 30},{"extractBounds": {"x": 496.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 31},{"extractBounds": {"x": 620.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 32},{"extractBounds": {"x": 744.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 33},{"extractBounds": {"x": 868.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 34},{"extractBounds": {"x": 992.0,"y": 192.0,"width": 124.0,"height": 64.0},"frameIndex": 35}]}]};

var slootEntityLoader = function(shape) {
	var isEntity = shape.editorShapeType == "ENTITY_SHAPE";
	if (!isEntity) {
		throw new Error('Not an entity');
	}
}

slootEntityLoader.prototype.load = function() {
	return cgEntityModel;
}
