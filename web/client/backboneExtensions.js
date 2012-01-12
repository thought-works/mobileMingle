var BB = (function(Backbone){

var module = {};

_.extend(Backbone.View.prototype,{
	renderFromTemplate: function(file,element,obj){
	   	var that = this;
		var view = $.get(file, function(data){ 
			var template = _.template(data);     
		    element.html(template(obj));  
		   	$.mobile.activePage.trigger('create');
		});          
	}
});

_.extend(Backbone.Model.prototype,{
	idAttribute: "_id",
});

module.Journey = Backbone.Model.extend(
{   
	destroy: function(){ Backbone.Model.prototype.destroy.call(this,{url:this.url+'/'+this.id}) },
	url: '/journeys',
	initialize: function(attributes) { this.id = attributes['_id']; },//with line 16-18, not sure if this line is needed
	defaults: {
	    "name": "",
	    "points": 0,
	    "stories": 0
   	}
});  

module.JourneyList = Backbone.Collection.extend({ 
	//localStorage: new Store("Journeys"),
	url: '/journeys',
	model: module.Journey,
	points: function(){ 
		return _.reduce(this.models, function(total, num){ return total + parseInt(num.get("points")); }, 0);
	},
	stories: function(){
        return _.reduce(this.models, function(total, num){ return total + parseInt(num.get("stories")); }, 0); 
	}
});


module.JourneyView = Backbone.View.extend({

	initialize: function(){
		this.el = $("#journeyView");
	},

	clear: function(){   
		_.each($(this.el).find("input"),function(y){$(y).val("");})         
	},
	render: function(){ 
		this.renderFromTemplate("_journeyView.html",$('#journeyView'),this.model.attributes);                             
		return this; 
	},
});	 

module.JourneysSummaryView = Backbone.View.extend({
	
	events: {
	    "click #add" : "addJourney",
		"click #erase" : "eraseAll"
	},
	initialize: function(){
		this.model.bind('all', this.render, this);  
		this.el = $("body");
		//hack: however if I put the context lower, I'm not sure how to subscribe to the events within another view
		this.delegateEvents();
	},
	render: function(){ 
		this.$("#totalPoints").html(this.model.points());
	  	this.$("#totalStories").html(this.model.stories());
	  	this.$("#totalJournies").html(this.model.length);   
	},
	eraseAll: function(){  
		_.each($.extend(true, [], this.model.models),function(x){ 
			x.destroy({
				success: function(model, response) { console.log('success'); }
			})
		});
	},
	addJourney: function(){
		var journey = new module.Journey();
		journey.set({name: this.$("#name").val() || journey.get("name")});
		journey.set({points: this.$("#points").val() || journey.get('points')});
		journey.set({stories: this.$("#storyCount").val() || journey.get('stories')});
		journey.save();
		this.model.add(journey);
	}
});	

return module;

}(window.Backbone));

