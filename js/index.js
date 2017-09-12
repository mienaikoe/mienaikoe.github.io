String.prototype.titlecase = function() {
	capwords = [];
	var words = this.split("_");
	for (var idx in words) {
		var word = words[idx];
		capwords.push(word.charAt(0).toUpperCase() + word.substr(1, word.length));
	}
	return capwords.join(" ");
};
Number.prototype.times = function(fxn) {
	for (var i = 0; i < this; i++) {
		fxn();
	}
};

// Sticker Headers - Needs More Work
/*
$(document).ready(function(){
	var headers = $("h2");
	var stuckHeader = null;
	var stickyHeader = $("#stickyHeader");
	var stickyPaper = stickyHeader.find(".paper");
	
	$(document).scroll(function(ev){
		var scrollTop = $(window).scrollTop();
		var bestHeader = null;
		var bestDiff = -100000;
		headers.each(function(_i, header){
			if( header === stuckHeader ){
				return;
			}
			var hOffset = $(header).offset();
			var hDiff = hOffset.top - scrollTop;
			if( hDiff < 0 && hDiff > bestDiff ){
				bestHeader = $(header);
				bestDiff = hDiff;
			}
		});
		if( bestHeader !== null ){
			stickyPaper.text(bestHeader.text());
			stickyHeader.show();
		} else {
			stickyHeader.hide();
		}
	});
});
*/



var skillSets = [
	{
		title: "Languages",
		entries: [
			{ name: "JavaScript", rating: 5 },
			{ name: "Java", rating: 3 },
			{ name: "Scala", rating: 3 },
			{ name: "Ruby", rating: 2 },
			{ name: "Python", rating: 2 },
			{ name: "PHP", rating: 2 }
		]
	},
	
	{
		title: "Frameworks",
		entries: [
			{ name: "React", rating: 4 },
			{ name: "React Native", rating: 4 },
			{ name: "Node/Express", rating: 4 },
			{ name: "Play Framework", rating: 3 },
			{ name: "Ruby on Rails", rating: 2 },
		]
	},
	{
		title: "DB & Devops",
		entries: [
			{ name: "PostgreSQL", rating: 4 },
			{ name: "Google Cloud", rating: 3 },
			{ name: "Redis", rating: 3 },
			{ name: "Docker/Kubernetes", rating: 2 },
			{ name: "Load Balancing/CDNs", rating: 2 },
		]
	},
	{
		title: "CS Topics",
		entries: [
			{ name: "Geo & Maps", rating: 4 },
			{ name: "Audio & Signals", rating: 4 },
			{ name: "Graphics", rating: 2 },
			{ name: "Linear Algebra", rating: 2 },
		]
	},
	{
		title: "Product Concepts",
		entries: [
			{ name: "Release Cycles", rating: 3 },
			{ name: "Agile/Scrum", rating: 3 },
			{ name: "UX Feedback Cycle", rating: 3 },
			{ name: "Design", rating: 2 }
		]
	},{
		title: "Hardware",
		entries: [
			{ name: "Circuit Design & Engineering", rating: 3 },
			{ name: "Arduino", rating: 3 },
			{ name: "Thermal and Fluid Mechanics", rating: 3 },
			{ name: "Bluetooth Low-Energy", rating: 2 }
		]
	},
];


function initSkills(container){
	for( var i in skillSets ){
		var skillSet = skillSets[i];
		
		var columnDiv = $("<div/>",{
			"class":"column"
		}).appendTo(container);
		
		$("<h3/>",{
			text: skillSet.title
		}).appendTo(columnDiv);
		
		for( var j in skillSet.entries ){
			var skill = skillSet.entries[j];
			
			var entryDiv = $("<div/>",{
				"class":"entry"
			}).appendTo(columnDiv);
			
			var ratingDiv = $("<div/>",{
				"class": "rating"
			}).appendTo(entryDiv);
			
			for( var k = 0; k < skill.rating; k++ ){
				$("<div/>",{
					"class":"bar"
				}).appendTo(ratingDiv);
			}
			
			$("<div/>",{
				"class": "name",
				"text": skill.name
			}).appendTo(entryDiv);
		}
	}
}
