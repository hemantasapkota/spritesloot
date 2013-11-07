var edgeBody = function(shape_) {
	shape = shape_;
}

edgeBody.prototype.Create = function(bodyDef, fixtureDef, ptmRatio) {
	var w = shape.bounds.width / ptmRatio;
	var h = shape.bounds.height / ptmRatio;

	var v1 = slootScreenLoader.prototype.ScreenToWorld(shape.bounds);

	var v2 = new b2Vec2(v1.get_x() + w, v1.get_y());

	var v2Vertical = new b2Vec2(v1.get_x(), v1.get_y() + h);

     var edge = new b2EdgeShape;

     if (shape.editorShapeType == "SIMPLE_SHAPE_VEDGE") {
	     edge.Set(v1, v2Vertical);
     } else {
       	edge.Set(v1, v2);
     }

     fixtureDef.set_shape(edge);

     //Edge Shape not fully implemented
     var body = world.CreateBody(bodyDef);
     var fixture = body.CreateFixture(fixtureDef);

     return [body, fixture];
}