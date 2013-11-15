var boxBody = function(shape_) {
	shape = shape_
}

boxBody.prototype.Create = function(bodyDef, fixtureDef) {
	var position = slootScreenLoader.prototype.ScreenToWorld(shape.bounds);

     bodyDef.set_position(position);

     var polyShape = new b2PolygonShape;

     var hx = (shape.bounds.width / ptmRatio);
     var hy = (shape.bounds.height / ptmRatio);

     hx = hx / 2;
     hy = hy / 2;

     polyShape.SetAsBox(hx, hy, new b2Vec2(hx, hy), 0);

     fixtureDef.set_shape(polyShape);

     var body = world.CreateBody(bodyDef);
     var fixture = body.CreateFixture(fixtureDef);

     body.SetUserData(shape);	
     
     return [body, fixture];
}