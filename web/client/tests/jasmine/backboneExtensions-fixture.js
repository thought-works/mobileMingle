describe("Backbone Model", function() {

	it("Id attribute is to to _id for couch db", function() {
		expect(Backbone.Model.prototype.idAttribute).toEqual('_id');
	});
	 
});

describe('Journey', function(){
	
	beforeEach(function(){
		this.journey = new BB.Journey();
	});
	
	it('Should set default values', function() {
		expect(this.journey.get("name")).toEqual("")
		expect(this.journey.get("points")).toEqual(0);
		expect(this.journey.get("stories")).toEqual(0);
	});

	it('Should set id property to _id attribute for mongoDB', function(){
		this.journey.set({_id:1});
		expect(this.journey.id).toEqual(1);
	});

	it('Should delegate delete call to prototype and append id to url', function(){
		
		spyOn(Backbone.Model.prototype, "destroy");
		this.journey.destroy();
		expect(Backbone.Model.prototype.destroy).toHaveBeenCalled();
		
	});
});

describe('JourneyList', function(){
	
	it('Points should return sum of points for all journeys', function(){

		var journeys = new BB.JourneyList();
		journeys.add(new BB.Journey({points:1}));
		journeys.add(new BB.Journey({points:2}));

		//it(journeys.points()).shouldEqual(3);
	});

	it('Points should return sum of points for all journeys', function(){

		var journeys = new BB.JourneyList();
		journeys.add(new BB.Journey({stories:1}));
		journeys.add(new BB.Journey({stories:2}));

		//it(journeys.stories()).shouldEqual(3);
	});
	
});

describe('Journey View', function(){
	it('Clear should set values of all input fields to blank', function(){

		var journeyView = new BB.JourneyView();
		//the way the test should work, it is just calls to render with a new model
		//then assume binding takes place as normal
	});	
});