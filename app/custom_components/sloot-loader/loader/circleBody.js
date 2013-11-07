var circleBody = function(shape_) {
	shape = shape_;
}

circleBody.prototype.Create = function(bodyDef, fixtureDef) {
	var position = slootScreenLoader.prototype.ScreenToWorld(shape.bounds);

     var radius = slootScreenLoader.prototype.CalculateRadiusOfCirlce(shape.bounds.width);

     var circleShape = new b2CircleShape;
     circleShape.set_m_radius(radius);

     fixtureDef.set_shape(circleShape);

     //add the radius to the position
     var x = position.get_x() + radius;
     var y = position.get_y() + radius;

     position.set_x(x);
     position.set_y(y);

     bodyDef.set_position(position);

     var body = world.CreateBody(bodyDef);
     var fixture = body.CreateFixture(fixtureDef);

     body.SetUserData(shape);	
     
     return [body, fixture];
}