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
	
	beforeEach(function(){
		this.journeys = new BB.JourneyList();
		this.journeys.add(new BB.Journey({points:1,stories:2}));
		this.journeys.add(new BB.Journey({points:2,stories:4}));
	});
	
	it('Points should return sum of points for all journeys', function(){
		expect(this.journeys.points()).toEqual(3);
	});

	it('Points should return sum of points for all journeys', function(){
		expect(this.journeys.stories()).toEqual(6);
	});
	
});

describe('JourneyList', function(){
	
	it('Points should return sum of points for all journeys', function(){

		var journeyView = new BB.JourneyView();
		//the way the test should work, it is just calls to render with a new model
		//then assume binding takes place as normal
	});	
});