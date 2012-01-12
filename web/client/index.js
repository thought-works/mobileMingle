$(function(){ 
	
	var Index = {};
	
	Index.journeys = new BB.JourneyList();   
	Index.journeys.fetch();
	
	Index.journeyView = new BB.JourneyView({model: new BB.Journey});  
	Index.journeyView.render();
	Index.summary = new BB.JourneysSummaryView({model: Index.journeys}); 
	Index.summary.render();
	                 
	$( '#viewGraph' ).live( 'pageshow',function(event){
		MM.Chart.load(Index.journeys.models, $("#slider-stories").val());
	}); 
		  
	$( "#slider-stories" ).bind( "change", function(event, ui) {  
		MM.Chart.load(Index.journeys.models, $(this).val());
	});
	
});    