JsHamcrest.Integration.QUnit();
JsMockito.Integration.QUnit();

// module('Backbone View')
// test('Render from template should')

module('Backbone Model')
test('Id attribute is set to _id for couch db', function(){
	
	equals(Backbone.Model.prototype.idAttribute,'_id');
})

module('Journey');

test('Should set default values', function() {

	var journey = new BB.Journey();
	equals(journey.get("name"),"");
	equals(journey.get("points"),0);
	equals(journey.get("stories"),0);
	
});

test('Should set id property to _id attribute for mongoDB', function(){

	var journey = new BB.Journey();
	journey.set({_id:1});
	equals(journey.id,1);
});

test('Should delegate delete call to prototype and append id to url', function(){

	var journey = new BB.Journey({_id:1});
	var mockedObject = mock(Backbone.Model.prototype);
	
	journey.destroy();
	//verify(mockedObject).destroy.call(journey,{url:"/journeys/1"});
});

module('JourneyList');

test('Points should return sum of points for all journeys', function(){

	var journeys = new BB.JourneyList();
	journeys.add(new BB.Journey({points:1}));
	journeys.add(new BB.Journey({points:2}));
	
	equals(journeys.points(),3);
});

test('Points should return sum of points for all journeys', function(){

	var journeys = new BB.JourneyList();
	journeys.add(new BB.Journey({stories:1}));
	journeys.add(new BB.Journey({stories:2}));
	
	equals(journeys.stories(),3);
});

module('Journey View');

test('Clear should set values of all input fields to blank', function()

	var journeyView = new BB.JourneyView();
	//the way the test should work, it is just calls to render with a new model
	//then assume binding takes place as normal
});


