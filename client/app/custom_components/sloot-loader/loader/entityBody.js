cgFixtureModel = {"rigidBodies":[{"name":"JumperRight","imagePath":"Jumper1.png","origin":{"x":0,"y":0},"polygons":[[{"x":0.42741936445236206,"y":0.3629032075405121},{"x":0.42741936445236206,"y":0.3145161271095276},{"x":0.47580644488334656,"y":0.27419352531433105},{"x":0.5322580933570862,"y":0.2822580337524414},{"x":0.5645161271095276,"y":0.33870965242385864},{"x":0.5322580933570862,"y":0.3951612710952759},{"x":0.47580644488334656,"y":0.40322577953338623}],[{"x":0.45125001668930054,"y":0.23875004053115845},{"x":0.41624999046325684,"y":0.1612500548362732},{"x":0.4287499785423279,"y":0.11375007033348083},{"x":0.48874998092651367,"y":0.09375008940696716},{"x":0.518750011920929,"y":0.15375006198883057},{"x":0.5112500190734863,"y":0.20875003933906555}],[{"x":0.26625001430511475,"y":0.14875006675720215},{"x":0.32625001668930054,"y":-0.0037499666213989258},{"x":0.3762500286102295,"y":0.04875004291534424},{"x":0.32375001907348633,"y":0.15875005722045898}],[{"x":0.5587499737739563,"y":-0.0037499666213989258},{"x":0.71875,"y":0.013750046491622925},{"x":0.71875,"y":0.05125004053115845},{"x":0.6487499475479126,"y":0.07125002145767212},{"x":0.5637499690055847,"y":0.04375004768371582}]],"circles":[],"shapes":[{"type":"POLYGON","vertices":[{"x":0.47580644488334656,"y":0.40322577953338623},{"x":0.5322580933570862,"y":0.3951612710952759},{"x":0.5645161271095276,"y":0.33870965242385864},{"x":0.5322580933570862,"y":0.2822580337524414},{"x":0.47580644488334656,"y":0.27419352531433105},{"x":0.42741936445236206,"y":0.3145161271095276},{"x":0.42741936445236206,"y":0.3629032075405121}]},{"type":"POLYGON","vertices":[{"x":0.45125001668930054,"y":0.23875004053115845},{"x":0.41624999046325684,"y":0.1612500548362732},{"x":0.4287499785423279,"y":0.11375007033348083},{"x":0.48874998092651367,"y":0.09375008940696716},{"x":0.518750011920929,"y":0.15375006198883057},{"x":0.5112500190734863,"y":0.20875003933906555}]},{"type":"POLYGON","vertices":[{"x":0.32375001907348633,"y":0.15875005722045898},{"x":0.3762500286102295,"y":0.04875004291534424},{"x":0.32625001668930054,"y":-0.0037499666213989258},{"x":0.26625001430511475,"y":0.14875006675720215}]},{"type":"POLYGON","vertices":[{"x":0.5637499690055847,"y":0.04375004768371582},{"x":0.6487499475479126,"y":0.07125002145767212},{"x":0.71875,"y":0.05125004053115845},{"x":0.71875,"y":0.013750046491622925},{"x":0.5587499737739563,"y":-0.0037499666213989258}]}]}],"dynamicObjects":[]};

var entityBody = function(shape_) {
	shape = shape_;

	var entityLoader = new slootEntityLoader(shape);

	cgEntityModel = entityLoader.load();
}

entityBody.prototype.IsValid = function() {
	return shape.editorShapeType == "ENTITY_SHAPE";
}

entityBody.prototype.Create = function(bodyDef, fixtureDef, ptmRatio) {
	var defaultEA;
	var scale = 124 / ptmRatio;

	/* Get default animation */
	$.each(cgEntityModel.animations, function(key, animation) {
		if (animation.defaultAnimation){
			defaultEA = animation;
		}
	});

	/* Resource File Empty */
	if (defaultEA.spritesheetFile.resourceFile == "") {
		return;
	}

	/* Box collision type */
	if (defaultEA.collisionType == "NONE") {
	}

	if (defaultEA.collisionType == "BOX") {
		var bb = new boxBody(shape);
		bb.Create(bodyDef, fixtureDef);
	}

	if (defaultEA.collisionType == "CIRCLE") {
		var eb = new circleBody(shape);
		eb.Create(bodyDef, fixtureDef);
	}

	/* Custom fixture */
	if (defaultEA.collisionType == "CUSTOM") {

		var position = slootScreenLoader.prototype.ScreenToWorld(shape.bounds);
		bodyDef.set_position(position);
		var body = world.CreateBody(bodyDef);

		//Go through rigid bodies. Each fixture has many rigid bodies
		$.each(cgFixtureModel.rigidBodies, function(i, rb) {

			//Go through polygons. Each rigid body has many polygons and circles.
			$.each(rb.polygons, function(j, polygon) {

				var vertices = [];

				//multiply vertices with PTM ratio; reverse the vertices by subtracting with height
				for (var v = polygon.length - 1;  v >= 0; v--) {
					polygon[v].x = polygon[v].x * scale;
					polygon[v].y = (1 * polygon[v].y) * scale;

					vertices[v] = new b2Vec2(polygon[v].x, polygon[v].y);
				}

				var polyShape = createPolygonShape(vertices);
			    fixtureDef.set_shape(polyShape);
				body.CreateFixture(fixtureDef);
			})
		})
	}

}