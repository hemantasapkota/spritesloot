cgScreenModel = {"screenPrefs": {"debugDrawPrefs": {"drawBodies": true,"drawJoints": true,"drawAABB": false,"drawInactiveBodies": true,"installMouseJoint": true,"drawDebugData": true,"drawEntities": true},"worldPrefs": {"ptmRatio": 16,"velocityIterations": 200,"positionIterations": 100,"timeStep": 60.0,"gravityX": 0.0,"gravityY": -9.0},"cardPrefs": {"cardNoX": 1,"cardNoY": 1,"cardWidth": 480,"cardHeight": 320},"backgroundColor": {"r": 234,"g": 234,"b": 234}},"layers": [{"id": 0,"name": "Layer1","visible": true,"locked": false,"shape": [{"id": "box0","visible": true,"locked": false,"background": false,"backgroundResourceFile": {"resourceFile": "","resourceFileAbsolute": ""},"editorShapeType": "SIMPLE_SHAPE_BOX","bounds": {"x": 64.0,"y": 224.0,"width": 352.0,"height": 16.0},"bodyDef": {"active": true,"allowSleep": true,"angle": 0.0,"angularDamping": 0.0,"angularVelocity": 0.0,"awake": true,"bullet": false,"fixedRotation": false,"linearDamping": 0.0,"gravityScale": 1.0,"linearVelocity": {"x": 0.0,"y": 0.0},"type": "STATIC","position": {"x": 0.0,"y": 0.0}},"fixtureDef": {"density": 1.0,"friction": 0.2,"restitution": 0.0,"sensor": false,"filter": {"categoryBits": 1,"maskBits": -1,"groupIndex": 0}},"text": ""},{"id": "circle0","visible": true,"locked": false,"background": false,"backgroundResourceFile": {"resourceFile": "","resourceFileAbsolute": ""},"editorShapeType": "SIMPLE_SHAPE_CIRCLE","bounds": {"x": 224.0,"y": 48.0,"width": 33.0,"height": 33.0},"bodyDef": {"active": true,"allowSleep": true,"angle": 0.0,"angularDamping": 0.0,"angularVelocity": 0.0,"awake": true,"bullet": false,"fixedRotation": false,"linearDamping": 0.0,"gravityScale": 1.0,"linearVelocity": {"x": 0.0,"y": 0.0},"type": "DYNAMIC","position": {"x": 0.0,"y": 0.0}},"fixtureDef": {"density": 1.0,"friction": 0.2,"restitution": 0.0,"sensor": false,"filter": {"categoryBits": 1,"maskBits": -1,"groupIndex": 0}},"text": ""},{"id": "edge0","visible": true,"locked": false,"background": false,"backgroundResourceFile": {"resourceFile": "","resourceFileAbsolute": ""},"editorShapeType": "SIMPLE_SHAPE_HEDGE","bounds": {"x": 0.0,"y": 304.0,"width": 481.0,"height": 16.0},"bodyDef": {"active": true,"allowSleep": true,"angle": 0.0,"angularDamping": 0.0,"angularVelocity": 0.0,"awake": true,"bullet": false,"fixedRotation": false,"linearDamping": 0.0,"gravityScale": 1.0,"linearVelocity": {"x": 0.0,"y": 0.0},"type": "STATIC","position": {"x": 0.0,"y": 0.0}},"fixtureDef": {"density": 1.0,"friction": 0.2,"restitution": 0.0,"sensor": false,"filter": {"categoryBits": 1,"maskBits": -1,"groupIndex": 0}},"text": ""},{"id": "edge0","visible": true,"locked": false,"background": false,"backgroundResourceFile": {"resourceFile": "","resourceFileAbsolute": ""},"editorShapeType": "SIMPLE_SHAPE_VEDGE","bounds": {"x": 480.0,"y": 0.0,"width": 16.0,"height": 321.0},"bodyDef": {"active": true,"allowSleep": true,"angle": 0.0,"angularDamping": 0.0,"angularVelocity": 0.0,"awake": true,"bullet": false,"fixedRotation": false,"linearDamping": 0.0,"gravityScale": 1.0,"linearVelocity": {"x": 0.0,"y": 0.0},"type": "STATIC","position": {"x": 0.0,"y": 0.0}},"fixtureDef": {"density": 1.0,"friction": 0.2,"restitution": 0.0,"sensor": false,"filter": {"categoryBits": 1,"maskBits": -1,"groupIndex": 0}},"text": ""},{"id": "edge1","visible": true,"locked": false,"background": false,"backgroundResourceFile": {"resourceFile": "","resourceFileAbsolute": ""},"editorShapeType": "SIMPLE_SHAPE_VEDGE","bounds": {"x": 0.0,"y": 0.0,"width": 16.0,"height": 321.0},"bodyDef": {"active": true,"allowSleep": true,"angle": 0.0,"angularDamping": 0.0,"angularVelocity": 0.0,"awake": true,"bullet": false,"fixedRotation": false,"linearDamping": 0.0,"gravityScale": 1.0,"linearVelocity": {"x": 0.0,"y": 0.0},"type": "STATIC","position": {"x": 0.0,"y": 0.0}},"fixtureDef": {"density": 1.0,"friction": 0.2,"restitution": 0.0,"sensor": false,"filter": {"categoryBits": 1,"maskBits": -1,"groupIndex": 0}},"text": ""},{"id": "entity0","visible": true,"locked": false,"background": false,"backgroundResourceFile": {"resourceFile": "","resourceFileAbsolute": ""},"editorShapeType": "ENTITY_SHAPE","bounds": {"x": 176.0,"y": 96.0,"width": 124.0,"height": 64.0},"bodyDef": {"active": true,"allowSleep": true,"angle": 0.0,"angularDamping": 0.0,"angularVelocity": 0.0,"awake": true,"bullet": false,"fixedRotation": false,"linearDamping": 0.0,"gravityScale": 1.0,"linearVelocity": {"x": 0.0,"y": 0.0},"type": "DYNAMIC","position": {"x": 0.0,"y": 0.0}},"fixtureDef": {"density": 1.0,"friction": 0.2,"restitution": 0.0,"sensor": false,"filter": {"categoryBits": 1,"maskBits": -1,"groupIndex": 0}},"entityRefFile": {"resourceFile": "/SpritesDemo/entities/Jumper.cge","resourceFileAbsolute": "/Users/anivamainali/Desktop/Projects/WS/runtime-lbd2.product/SpritesDemo/entities/Jumper.cge"},"text": ""}]}]};

var bodiesList = []

var slootScreenLoader = function() {
    //this.cgScreenModel = cgScreenModel_;

    ptmRatio   = cgScreenModel.screenPrefs.worldPrefs.ptmRatio;
    cardHeight = cgScreenModel.screenPrefs.cardPrefs.cardHeight;
    cardWidth = cgScreenModel.screenPrefs.cardPrefs.cardWidth;
    viewCenter = new b2Vec2(0, 0);
}

slootScreenLoader.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = ptmRatio;
    setViewCenterWorld( viewCenter, true );
}

slootScreenLoader.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created
    $.each(cgScreenModel, function(index, value) {

     if (index != "layers")
        return;

     var layers = value;
     $.each(layers, function(layerIndex, layer) {
        $.each(layer.shape, function(shapeIndex, shape) {
           var fixture = slootScreenLoader.prototype.CreateBody(shape);
           //onFixtureCreated(shape, fixture);
        });
     });
   });
}

slootScreenLoader.prototype.step = function() {
    //this function will be called at the beginning of every time step
}

slootScreenLoader.prototype.onKeyDown = function(canvas, evt) {
    if ( evt.keyCode == 65 ) { // 'a'
        //do something when the 'a' key is pressed
    }
}

slootScreenLoader.prototype.onKeyUp = function(canvas, evt) {
    if ( evt.keyCode == 65 ) { // 'a'
        //do something when the 'a' key is released
    }
}

/*Functions for create bodies and joints*/
//Create bodies and drawJointss
slootScreenLoader.prototype.CreateBody = function(shape)  {
  var bodyDef = new b2BodyDef;
  var fixtureDef = new b2FixtureDef;

  //Body Def
  bodyDef.set_active(shape.bodyDef.active);
  bodyDef.set_allowSleep(shape.bodyDef.set_allowSleep);
  bodyDef.set_angle(shape.bodyDef.angle);
  bodyDef.set_angularDamping(shape.bodyDef.angularDamping);
  bodyDef.set_angularVelocity(shape.bodyDef.angularVelocity);
  bodyDef.set_awake(shape.bodyDef.awake);
  bodyDef.set_bullet(shape.bodyDef.bullet);
  bodyDef.set_fixedRotation(shape.bodyDef.fixedRotation);
  bodyDef.set_linearDamping(shape.bodyDef.linearDamping);
  bodyDef.set_gravityScale(shape.bodyDef.gravityScale);
  bodyDef.set_linearVelocity(slootScreenLoader.prototype.AsVec2(shape.bodyDef.linearVelocity));
  bodyDef.set_type(slootScreenLoader.prototype.AsBodyType(shape.bodyDef.type));
  bodyDef.set_position(slootScreenLoader.prototype.AsVec2(shape.bodyDef.position));

  //fixtureDef
  fixtureDef = slootScreenLoader.prototype.AsFixtureDef(shape.fixtureDef)

  //position
  var position = slootScreenLoader.prototype.ScreenToWorld(shape.bounds);

  //{body, fixture}
  var bf  = new bodyFactory;

  var bodyAndFixture = bf.Create(shape, bodyDef, fixtureDef, ptmRatio);

  bodiesList.push ( bodyAndFixture );

  // return bodyAndFixture[1];
}  

slootScreenLoader.prototype.ScreenToWorld = function(bounds) {
  var ox = (cardWidth / 2);
  var oy = (cardHeight / 2);

  var x = bounds.x - ox;
  var y = oy - bounds.y - bounds.height;

  return new b2Vec2(x / ptmRatio, y / ptmRatio);
}  

slootScreenLoader.prototype.CalculateRadiusOfCirlce = function(width) {
  return (width / ptmRatio) / 2;
}

//Protobuf type conversion util
slootScreenLoader.prototype.AsBodyType = function(type) {
  if (type == "DYNAMIC")
     return b2_dynamicBody;

  if (type == "KINEMATIC")
     return b2_kinematicBody;

  //default
  return b2_staticBody;
}

slootScreenLoader.prototype.AsVec2 =  function(v) {
  return new b2Vec2(v.x, v.y);
}

slootScreenLoader.prototype.AsFixtureDef = function(defFix, shapeType) {
  var fixtureDef = new b2FixtureDef;

  fixtureDef.set_density(defFix.density);
  fixtureDef.set_friction(defFix.friction);
  fixtureDef.set_restitution(defFix.restitution);
  fixtureDef.set_isSensor(defFix.sensor);

  //TODO: Do not set filter bits like this. The bodies will not collide.
  // fixtureDef.filter.categoryBits = defFix.categoryBits;
  // fixtureDef.filter.maskBits = defFix.maskBits;
  // fixtureDef.filter.groupIndex = defFix.groupIndex;

  return fixtureDef;
}

slootScreenLoader.prototype.cleanup = function() {

}

