var bodyFactory = function() {

}

bodyFactory.prototype.Create = function(shape, bodyDef, fixtureDef, ptmRatio) {
	var bodyAndFixture;

	switch (shape.editorShapeType) {
	     case "SIMPLE_SHAPE_BOX":
	     var bb = new boxBody(shape);
	     bodyAndFixture = bb.Create(bodyDef, fixtureDef);
	     break;

	     case "ENTITY_SHAPE":
	     var entB = new entityBody(shape);
	     entB.Create(bodyDef, fixtureDef, ptmRatio);
	     break;

	     case "SIMPLE_SHAPE_CIRCLE":
	     var cb = new circleBody(shape);
	     bodyAndFixture = cb.Create(bodyDef, fixtureDef);
	     break;

	     case "SIMPLE_SHAPE_HEDGE":
	     case "SIMPLE_SHAPE_VEDGE":
	     var eb  = new edgeBody(shape);
	     bodyAndFixture = eb.Create(bodyDef, fixtureDef, ptmRatio);
	     break;
	}

	return bodyAndFixture;
}