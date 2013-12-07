/* Box Body */
var boxBody = function() {
}

boxBody.prototype.Create = function(shape, bodyDef, fixtureDef, returnObject, onFixtureCreated ) {
  var position = slootScreenLoader2.prototype.ScreenToWorld(shape.bounds);

  bodyDef.position = position;

  var polyShape = new b2PolygonShape;

  var hx = (shape.bounds.width / ptmRatio);
  var hy = (shape.bounds.height / ptmRatio);

  hx = hx / 2;
  hy = hy / 2;

  polyShape.SetAsOrientedBox(hx, hy, new b2Vec2(hx, hy), 0);

  fixtureDef.shape = polyShape;

  body = b2World.CreateBody(bodyDef);
  fixture = body.CreateFixture(fixtureDef);
  body.SetUserData(shape);

  returnObject.fixtures.push ( fixture );
  returnObject.body = body;

  onFixtureCreated( returnObject );
}
