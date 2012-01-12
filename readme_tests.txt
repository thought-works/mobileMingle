= ON CLIENT

=== The Graph
	# load: test the object has information it needs to render.
	#try various parameters for expected results	
	
=== Backbone
	# Backbone.View.Prototype extension
	# Backbone.Model.Prototype extension
		
=== Journey (bb.model)
	# destroy (delegates call to backbone model delete, fixes what I think a bug, where the generated url does not include the id)
	# url
	# initialize

=== JourneyList (bb.collection)
	# points should sum
	# stories should sum
	# model contains the initialized model
	
=== JourneyView (bb.view)
	# add journey 
	# erase all
	# clear
	# render
	# verify all events are registered properly
	
=== JourneySummaryView (bb.view)
	# initialize
	# render
	
= ON SERVER

=== app.js
	# That the server starts and responds !
	# Verify some smoke test
	
=== index.js in Routes
	# GET: journeys
	# DELETE: journey
	# Put: journey
	

