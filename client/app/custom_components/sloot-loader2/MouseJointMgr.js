var
  b2Vec2 = Box2D.Common.Math.b2Vec2
,  b2AABB = Box2D.Collision.b2AABB
,  b2Body = Box2D.Dynamics.b2Body
,  b2World = Box2D.Dynamics.b2World
,  b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
;

 var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
 var canvasPosition = getElementPosition(document.getElementById("canvas"));
 var world, ptmRatio;

function MouseJointMgr(world_, ptmRatio_) {
  world = world_;
  ptmRatio = ptmRatio_;
}

 function handleMouseMove(e) {
    mouseX = (e.clientX - canvasPosition.x) / ptmRatio;
    mouseY = (e.clientY - canvasPosition.y) / ptmRatio;
 };

 function getBodyAtMouse() {
    mousePVec = new b2Vec2(mouseX, mouseY);
    var aabb = new b2AABB();
    aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
    aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);

    // Query the world for overlapping shapes.

    selectedBody = null;
    world.QueryAABB(getBodyCB, aabb);
    return selectedBody;
 }

 function getBodyCB(fixture) {
    if(fixture.GetBody().GetType() != b2Body.b2_staticBody) {
       if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
          selectedBody = fixture.GetBody();
          return false;
       }
    }
    return true;
 }

MouseJointMgr.prototype.Init = function() {
   document.addEventListener("mousedown", function(e) {
      isMouseDown = true;
      handleMouseMove(e);
      document.addEventListener("mousemove", handleMouseMove, true);
   }, true);

   document.addEventListener("mouseup", function() {
      document.removeEventListener("mousemove", handleMouseMove, true);
      isMouseDown = false;
      mouseX = undefined;
      mouseY = undefined;
   }, true);
};

MouseJointMgr.prototype.Render = function() {
    if(isMouseDown && (!mouseJoint)) {
       var body = getBodyAtMouse();
       if(body) {
          var md = new b2MouseJointDef();
          md.bodyA = world.GetGroundBody();
          md.bodyB = body;
          md.target.Set(mouseX, mouseY);
          md.collideConnected = true;
          md.maxForce = 300.0 * body.GetMass();
          mouseJoint = world.CreateJoint(md);
          body.SetAwake(true);
       }
    }

    if(mouseJoint) {
       if(isMouseDown) {
          mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
       } else {
          world.DestroyJoint(mouseJoint);
          mouseJoint = null;
       }
    }
}

//http://js-tut.aardon.de/js-tut/tutorial/position.html
function getElementPosition(element) {
  var elem=element, tagname="", x=0, y=0;

  if (!elem)
    return;

  while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
     y += elem.offsetTop;
     x += elem.offsetLeft;
     tagname = elem.tagName.toUpperCase();

     if(tagname == "BODY")
        elem=0;

     if(typeof(elem) == "object") {
        if(typeof(elem.offsetParent) == "object")
           elem = elem.offsetParent;
     }
  }
  return {x: x, y: y};
}
