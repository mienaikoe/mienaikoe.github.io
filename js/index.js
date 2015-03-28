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
			{ name: "JavaScript", rating: 4 },
			{ name: "Ruby", rating: 4 },
			{ name: "Java", rating: 4 },
			{ name: "Python", rating: 2 },
			{ name: "PHP", rating: 2 }
		]
	},
	
	{
		title: "Frameworks",
		entries: [
			{ name: "Ruby on Rails", rating: 4 },
			{ name: "Node.js", rating: 3 },
			{ name: "Google App Engine", rating: 2 },
			{ name: "Spring", rating: 1 },
			{ name: "Angular.js", rating: 1 }
		]
	},
	
	{
		title: "Tools",
		entries: [
			{ name: "JQuery", rating: 4 },
			{ name: "Backbone.js", rating: 3 },
			{ name: "Web Audio", rating: 3 },
			{ name: "Three.js", rating: 3 },
			{ name: "React", rating: 2 },
			{ name: "HTML5 Canvas", rating: 2 },
			{ name: "Apache Web Server", rating: 2 }
		]
	},
	{
		title: "Data Storage",
		entries: [
			{ name: "Redis", rating: 3 },
			{ name: "Oracle Database", rating: 3 },
			{ name: "MySQL", rating: 3 },
			{ name: "PostgreSQL", rating: 2 }
		]
	},
	{
		title: "Android",
		entries: [
			{ name: "Canvas/Custom Views", rating: 3 },
			{ name: "Bluetooth Low-Energy", rating: 2 },
			{ name: "Wi-Fi Direct", rating: 2 }
		]
	},
	{
		title: "Product",
		entries: [
			{ name: "Agile/Scrum", rating: 3 },
			{ name: "UX Interviewing", rating: 2 },
			{ name: "Graphic Design", rating: 1 }
		]
	}
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
