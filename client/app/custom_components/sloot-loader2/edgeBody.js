/* Edge shape */
var edgeBody = function() {
}

edgeBody.prototype.Create = function(shape, bodyDef, fixtureDef, returnObject, onFixtureCreated ) {
  var w = shape.bounds.width / ptmRatio;
  var h = shape.bounds.height / ptmRatio;

  var v1 = slootScreenLoader2.prototype.ScreenToWorld(shape.bounds);

  var v2 = new b2Vec2(v1.x + w, v1.y);

  var v2Vertical = new b2Vec2(v1.x, v1.y + h);

  /*
  Note: Edge Shapes are not fully implemented in Box2DWeb.
  In Kripken's box2d.js (https://github.com/kripken/box2d.js), you don't see this problem.
  The current workaround for box2dweb is to use b2PolygonShape.SetAsEdge() method.
  */
  fixtureDef.shape =  new b2PolygonShape;

   if (shape.editorShapeType == "SIMPLE_SHAPE_VEDGE") {
     fixtureDef.shape.SetAsEdge(v1, v2Vertical);
   } else {
    fixtureDef.shape.SetAsEdge(v1, v2);
   }

   var body = b2World.CreateBody(bodyDef);
   var fixture = body.CreateFixture(fixtureDef);

   body.SetUserData(shape);

   returnObject.body = body;
   returnObject.fixtures.push ( fixture );

   onFixtureCreated( returnObject );
}
