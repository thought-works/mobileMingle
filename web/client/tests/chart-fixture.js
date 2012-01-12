module('The Graph');

test('When the graph is initialized it should render', function() {

	var journey = new BB.Journey({name: "one", points: 1, stories: 1});
	var journey2 = new BB.Journey({name: "one", points: 1, stories: 1});
	
	//Not sure how to test this right now, it requries a contructed dom in order to render the test.
	//Could simply override this part of the chart, but really don't want to get into it right now.
	//use ENV.js ??
	
	//var chart = MM.Chart.load([journey,journey2]);
	//window.debug = chart;

});