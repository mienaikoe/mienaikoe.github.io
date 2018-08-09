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
		title: "Hardware Domain",
		entries: [
			{ name: "CAD (Autodesk, Solidworks)", rating: 3 },
			{ name: "Circuit Analysis", rating: 3 },
			{ name: "Arduino", rating: 2 },
			{ name: "Linux on ARM", rating: 2 },
			{ name: "Bluetooth Low-Energy", rating: 2 }
		]
	},{
		title: "Software Domain",
		entries: [
			{ name: "Full-Stack Web Development", rating: 5 },
			{ name: "JavaScript", rating: 5 },
			{ name: "React-Native", rating: 4},
			{ name: "Relational Databases", rating: 4 },
			{ name: "DevOps / Infrastructure", rating: 4 }
		]
	},{
		title: "Operations",
		entries: [
			{ name: "Software Release Management", rating: 4 },
			{ name: "UX/UI Design", rating: 3 },
			{ name: "Technical Hiring", rating: 3 },
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
