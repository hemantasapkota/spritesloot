'use strict';

angular.module('yoAngularApp')
.directive('b2dwebcanvas', function () {

      function initB2WebCanvasExecution( cgScreenModel, entImg) {

          var  B2VEC2 = Box2D.Common.Math.b2Vec2,
          B2AABB = Box2D.Collision.b2AABB,
          B2BODY = Box2D.Dynamics.b2Body,
          B2WORLD = Box2D.Dynamics.b2World,
          B2DEBUGDRAW = Box2D.Dynamics.b2DebugDraw,
          B2MOUSEJOINTDEF =  Box2D.Dynamics.Joints.b2MouseJointDef;

          var gravityX = cgScreenModel.screenPrefs.worldPrefs.gravityX;
          var gravityY = -cgScreenModel.screenPrefs.worldPrefs.gravityY;
          var ptmRatio = cgScreenModel.screenPrefs.worldPrefs.ptmRatio;

          var timeStep = cgScreenModel.screenPrefs.worldPrefs.timeStep;
          var velocityIterations = cgScreenModel.screenPrefs.worldPrefs.velocityIterations;
          var positionIterations = cgScreenModel.screenPrefs.worldPrefs.positionIterations;

          var world = new B2WORLD (new B2VEC2 (gravityX, gravityY),  true);                 //allow sleep

          var returnObjectMap = [];

          /* jshint newcap: false */
          var lb2d = new slootScreenLoader2(cgScreenModel, world);

          lb2d.CreateShape(function onFixtureCreated( returnObject ){
            if ( returnObject.shape.editorShapeType === 'ENTITY_SHAPE' ) {
              returnObjectMap[ returnObject.shape.id ] = returnObject;

            }
          });

         //setup debug draw
          var debugDraw = new B2DEBUGDRAW();
          debugDraw.SetSprite(document.getElementById('canvas').getContext('2d'));
          debugDraw.SetDrawScale(ptmRatio);
          debugDraw.SetFillAlpha(0.5);
          debugDraw.SetLineThickness(1.0);
          /* jshint camelcase: false */
          /* jshint bitwise: false */
          debugDraw.SetFlags(B2DEBUGDRAW.e_shapeBit | B2DEBUGDRAW.e_jointBit);
          world.SetDebugDraw(debugDraw);

          //http://js-tut.aardon.de/js-tut/tutorial/position.html
          function getElementPosition( element ) {
            var elem=element, tagname='', x=0, y=0;

            while((typeof(elem) === 'object') && (typeof(elem.tagName) !== 'undefined')) {
              y += elem.offsetTop;
              x += elem.offsetLeft;
              tagname = elem.tagName.toUpperCase();

              if(tagname === 'BODY') {
                elem = 0;
              }

              if(typeof(elem) === 'object') {
                if(typeof(elem.offsetParent) === 'object') {
                  elem = elem.offsetParent;
                }
              }
            }

            return {x: x, y: y};
          }

         
           //mouse
         
          var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
          var canvasPosition = getElementPosition(document.getElementById('canvas'));
         
          document.addEventListener('mousedown', function(e) {
            isMouseDown = true;
            handleMouseMove(e);
            document.addEventListener('mousemove', handleMouseMove, true);
          }, true);
         
          document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', handleMouseMove, true);
            isMouseDown = false;
            mouseX = undefined;
            mouseY = undefined;
          }, true);
         
          function handleMouseMove(e) {
            mouseX = (e.clientX - canvasPosition.x) / ptmRatio;
            mouseY = (e.clientY - canvasPosition.y) / ptmRatio;
          }
         
          function getBodyAtMouse() {
            mousePVec = new B2VEC2(mouseX, mouseY);
            var aabb = new B2AABB();
            aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
            aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
            
            // Query the world for overlapping shapes.

            selectedBody = null;
            world.QueryAABB(getBodyCB, aabb);
            return selectedBody;
          }

          function getBodyCB(fixture) {
            if(fixture.GetBody().GetType() !== B2BODY.b2_staticBody) {
              if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
                selectedBody = fixture.GetBody();
                return false;
              }
            }
            return true;
          }
        
        //update
          var context = document.getElementById('canvas').getContext('2d');

          function drawEntities() {

            for (var body = world.m_bodyList; body; body = body.m_next) {

              var shape = body.GetUserData();

              if ( shape === null ) { continue; }

              var shapeRetObject = returnObjectMap[ shape.id ];

              if (shape !== null && shape.editorShapeType === 'ENTITY_SHAPE') {

                var pos = body.GetPosition();

                var x = pos.x * ptmRatio;
                var y = pos.y * ptmRatio;

                var w = entImg.width;
                var h = entImg.height;

                context.save();

                context.translate(x, y);

                context.rotate( body.GetAngle()  );

                context.globalAlpha = 0.5;

                var isBoxCollisionShape = shapeRetObject.defaultEntityAnimation.collisionType == 'BOX';
                var isCircleCollisionShape = shapeRetObject.defaultEntityAnimation.collisionType == 'CIRCLE';
                var isCustomCollisionShape = shapeRetObject.defaultEntityAnimation.collisionType == 'CUSTOM';

                context.drawImage(entImg, 0, -shape.bounds.height, w, h);

                // if (isBoxCollisionShape) {
                //   context.drawImage(entImg, 0, 0, w, h);
                // } else 
                // if (isCircleCollisionShape) {
                //   context.drawImage(entImg, 0, -shape.bounds.height, w, h);
                // } else {
                //   context.drawImage(entImg, 0, -shape.bounds.height, w, h);
                // }

                context.restore();

              }

            }

          }

          function update() {

            if(isMouseDown && (!mouseJoint)) {
              var body = getBodyAtMouse();
              if(body) {
                var md = new B2MOUSEJOINTDEF();
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
                mouseJoint.SetTarget(new B2VEC2(mouseX, mouseY));
              } else {
                world.DestroyJoint(mouseJoint);
                mouseJoint = null;
              }
            }
           
            world.Step(1 / timeStep, velocityIterations, positionIterations);

            world.DrawDebugData();

            drawEntities();

            world.ClearForces();
          }

          window.setInterval(update, 1000 / 60);
          
        }


      return {
        template: '<canvas id="canvas" width="480" height="320" style="background-color:#333333;" ></canvas>',
        restrict: 'E',

        controller: function($scope, $attrs, $http) {

          $http.get($scope.screenUrl).success(function(data) {

            $scope.cgScreenModel = data;

            var entityImage = new Image();
            entityImage.src = $scope.entityImgUrl;

            entityImage.onload = function() {
              initB2WebCanvasExecution( $scope.cgScreenModel, entityImage );
            };

          });

        }

        // link: function postLink(scope, element, attrs) {
        // }

      };
    });
