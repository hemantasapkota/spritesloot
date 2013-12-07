/* Circle Body */
var circleBody = function() {
}

circleBody.prototype.Create = function(shape, bodyDef, fixtureDef, returnObject, onFixtureCreated ) {
  var position = slootScreenLoader2.prototype.ScreenToWorld(shape.bounds);

  var radius = slootScreenLoader2.prototype.CalculateRadiusOfCirlce(shape.bounds.width);

  var circleShape = new b2CircleShape( radius );

  fixtureDef.shape = circleShape;

  //add the radius to the position
  position.x += radius;
  position.y += radius;

  bodyDef.position = position;

  var body = b2World.CreateBody(bodyDef);
  var fixture = body.CreateFixture(fixtureDef);

  body.SetUserData(shape);

  returnObject.fixtures.push ( fixture );
  returnObject.body = body;

  onFixtureCreated( returnObject );
}
