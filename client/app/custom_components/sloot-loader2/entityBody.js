/* Entity Body */
var entityBody = function() {
}

entityBody.prototype.ScreenToWorldEnt = function( shape ) {
  var vx = shape.bounds.x;
  var vy = shape.bounds.y;
  var hw = (shape.bounds.width / 2);
  var hh = (shape.bounds.height / 2);
  vx = vx;
  vy = vy + shape.bounds.height;
  return new b2Vec2( vx / ptmRatio, vy / ptmRatio);
}

/*
Return Object:
{cgEntityModel, defaultEntityAnimation, fixtures }
*/
entityBody.prototype.Create = function( shape, bodyDef, fixtureDef, returnObject, onFixtureCreated ) {

	$.getJSON(shape.entityRefFile.resourceFile, function ( cgEntityModel ){

		var defaultEA;
		var scale = shape.bounds.width / ptmRatio;

		/* Set cgEntityModel to return object*/
		returnObject.cgEntityModel = cgEntityModel;

		/* Get default animation */
		$.each(cgEntityModel.animations, function(key, animation) {
			if (animation.defaultAnimation){
				defaultEA = animation;

				/* Set defaultEntityAnimation to return object */
				returnObject.defaultEntityAnimation = defaultEA;
			}
		});

		/* Resource File Empty */
		if (defaultEA.spritesheetFile.resourceFile == "") {
		}

		/* Box collision type */
		if (defaultEA.collisionType == "NONE") {
		}

		/* Define fixtures array */
		returnObject.fixtures = [];

		if (defaultEA.collisionType == "BOX") {
			var bb = new boxBody;

			returnObject.fixtures.push( bb.Create(shape, bodyDef, fixtureDef) );

		} else if (defaultEA.collisionType == "CIRCLE") {
			var eb = new circleBody;

			returnObject.fixtures.push( eb.Create(shape, bodyDef, fixtureDef) );
		}

		/* Custom fixture */
		if (defaultEA.collisionType == "CUSTOM") {

			$.getJSON(defaultEA.fixtureFile.resourceFile, function( cgFixtureModel ){

				/* Set cgFixtureModel to return object */
				returnObject.cgFixtureModel = cgFixtureModel;

				var position = entityBody.prototype.ScreenToWorldEnt( shape );

				bodyDef.position = position;

				var body = b2World.CreateBody( bodyDef );
				body.SetUserData(shape);

				//Go through rigid bodies. Each fixture has many rigid bodies
				$.each(cgFixtureModel.rigidBodies, function(i, rb) {
					//Go through polygons. Each rigid body has many polygons and circles.
					$.each(rb.polygons, function(j, polygon) {

						var vindex = 0;
						var vertices = []
						for (var v = polygon.length - 1;  v >= 0; v--) {
							polygon[v].x = polygon[v].x * scale;
							polygon[v].y = (-1 * polygon[v].y * scale);

							vertices[ vindex ] = polygon[v];
							vindex++;
						}

						var polyShape = new b2PolygonShape;
						polyShape.SetAsArray( vertices );
						fixtureDef.shape = polyShape;

						/* Create fixture */
						returnObject.fixtures.push ( body.CreateFixture( fixtureDef ) );
					})
				})

				onFixtureCreated( returnObject );

			});

		}

	});
}
