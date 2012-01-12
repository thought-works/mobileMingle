MM = {};
MM.Chart = {   
	
	options : {
		chart: { renderTo: 'container', type: 'column', height: 250 }, 
		tooltip: { enabled: false },
		legend: { enabled: false },
		title: { text: 'User Journey Backlog'}, 
		yAxis: {title:{text:""}},
		xAxis: {categories:""},
		series: ""
	},  
	
	load : function(journies, sliderValue){ 
		                
		sliderValue = sliderValue || 'Points';
		   
		this.options.yAxis.title.text = (sliderValue == 'Points' ? '# of Points' : '# of Stories' ); 
		this.options.xAxis.categories = journies.map(function(x){ return x.get("name") });  
		  
		if(sliderValue == 'Points'){
			this.options.series = [{data: journies.map(function(x){ return parseInt(x.get("points")) })}]; 
		}   
		else{
			this.options.series = [{data: journies.map(function(x){ return parseInt(x.get("stories")) })}]; 
		}

		chart = new Highcharts.Chart(this.options);
	}
}
