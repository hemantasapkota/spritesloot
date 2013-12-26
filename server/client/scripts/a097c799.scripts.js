"use strict";angular.module("spriteslootApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui","ui.bootstrap","ngFitText"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/cluster/:clusterID",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/sprites/:spriteID",{templateUrl:"views/spritedetail.html",controller:"SpritedetailCtrl"}).when("/sloot-editor",{templateUrl:"views/slooteditor.html",controller:"SlooteditorCtrl"}).when("/crunching",{templateUrl:"views/crunching.html"}).otherwise({redirectTo:"/crunching"})}]),angular.module("spriteslootApp").controller("HomeCtrl",["$scope","$http","$routeParams",function(a,b,c){b.get("/api/slootContent").success(function(b){a.clusters=b,a.limitQty=10,a.clusterFilter=c.clusterID,void 0!==a.clusterFilter&&angular.forEach(a.clusters,function(b){b.collectionTitle===a.clusterFilter&&(a.limitQty=b.slootItems.length)})})}]),angular.module("spriteslootApp").controller("SpritedetailCtrl",["$scope","$http","$routeParams",function(a,b,c){a.spriteID=c.spriteID;var d=a.spriteID.split("_"),e=d[0],f=d[1];a.entityUrl="public/"+e+"/"+f+".cge.json",a.entityImgUrl="public/"+e+"/"+f+".cge.png",a.screenUrl="public/"+e+"/"+f+".cgs.json",a.spriteID=f,b.get(a.entityUrl).success(function(b){a.cgEntityModel=b})}]),angular.module("spriteslootApp").controller("SearchCtrl",["$scope",function(a){a.selected=void 0,a.states=["Pigs","Blocks","Birds","Runner","Jumper","BlackBird","WhiteBird","Coins"]}]),angular.module("spriteslootApp").controller("SlooteditorCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("spriteslootApp").directive("b2webcanvas",[function(){function a(a,b){function c(a){for(var b=a,c="",d=0,e=0;"object"==typeof b&&"undefined"!=typeof b.tagName;)e+=b.offsetTop,d+=b.offsetLeft,c=b.tagName.toUpperCase(),"BODY"===c&&(b=0),"object"==typeof b&&"object"==typeof b.offsetParent&&(b=b.offsetParent);return{x:d,y:e}}function d(a){y=(a.clientX-E.x)/q,z=(a.clientY-E.y)/q}function e(){A=new i(y,z);var a=new j;return a.lowerBound.Set(y-.001,z-.001),a.upperBound.Set(y+.001,z+.001),C=null,u.QueryAABB(f,a),C}function f(a){return a.GetBody().GetType()!==k.b2_staticBody&&a.GetShape().TestPoint(a.GetBody().GetTransform(),A)?(C=a.GetBody(),!1):!0}function g(){for(var a=u.m_bodyList;a;a=a.m_next){var c=a.GetUserData();if(null!==c){{v[c.id]}if(null!==c&&"ENTITY_SHAPE"===c.editorShapeType){var d=a.GetPosition(),e=d.x*q,f=d.y*q,g=b.width,h=b.height;F.save(),F.translate(e,f),F.rotate(a.GetAngle()),F.globalAlpha=.5,F.drawImage(b,0,-c.bounds.height,g,h),F.restore()}}}}function h(){if(B&&!D){var a=e();if(a){var b=new n;b.bodyA=u.GetGroundBody(),b.bodyB=a,b.target.Set(y,z),b.collideConnected=!0,b.maxForce=300*a.GetMass(),D=u.CreateJoint(b),a.SetAwake(!0)}}D&&(B?D.SetTarget(new i(y,z)):(u.DestroyJoint(D),D=null)),u.Step(1/r,s,t),u.DrawDebugData(),g(),u.ClearForces()}var i=Box2D.Common.Math.b2Vec2,j=Box2D.Collision.b2AABB,k=Box2D.Dynamics.b2Body,l=Box2D.Dynamics.b2World,m=Box2D.Dynamics.b2DebugDraw,n=Box2D.Dynamics.Joints.b2MouseJointDef,o=a.screenPrefs.worldPrefs.gravityX,p=-a.screenPrefs.worldPrefs.gravityY,q=a.screenPrefs.worldPrefs.ptmRatio,r=a.screenPrefs.worldPrefs.timeStep,s=a.screenPrefs.worldPrefs.velocityIterations,t=a.screenPrefs.worldPrefs.positionIterations,u=new l(new i(o,p),!0),v=[],w=new slootScreenLoader2(a,u);w.CreateShape(function(a){"ENTITY_SHAPE"===a.shape.editorShapeType&&(v[a.shape.id]=a)});var x=new m;x.SetSprite(document.getElementById("canvas").getContext("2d")),x.SetDrawScale(q),x.SetFillAlpha(.5),x.SetLineThickness(1),x.SetFlags(m.e_shapeBit|m.e_jointBit),u.SetDebugDraw(x);var y,z,A,B,C,D,E=c(document.getElementById("canvas"));document.addEventListener("mousedown",function(a){B=!0,d(a),document.addEventListener("mousemove",d,!0)},!0),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",d,!0),B=!1,y=void 0,z=void 0},!0);var F=document.getElementById("canvas").getContext("2d");window.setInterval(h,1e3/60)}return{template:'<canvas id="canvas" width="480" height="320" style="background-color:#333333;" ></canvas>',restrict:"E",controller:["$scope","$attrs","$http",function(b,c,d){d.get(b.screenUrl).success(function(c){b.cgScreenModel=c;var d=new Image;d.src=b.entityImgUrl,d.onload=function(){a(b.cgScreenModel,d)}})}]}}]),angular.module("spriteslootApp").directive("carouselstatic",[function(){return{templateUrl:"views/carouselstatic.html",restrict:"E",link:function(a,b,c){a.myInterval=5e3;var d=a.slides=[];a.addSlide=function(a,b){d.push({image:a,text:b})};for(var e=c.images.split(","),f=c.description.split(","),g=0;g<e.length;g++){var h=e[g].replace("url('","").replace("')","").trim(),i=f[g].trim();a.addSlide(h,i)}}}}]);