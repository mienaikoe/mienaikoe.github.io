var skills = {
	very_familiar: [
		"JavaScript/JQuery",
		"Ruby/Rails",
		"Java",
		"MySQL & Oracle Databases",
		"HTML/CSS",
		"Web Audio API"
	],
	moderately_familiar: [
		"AngularJS",
		"BackboneJS",
		"Android",
		"Redis",
		"Apache Server",
		"Three.js",
		"PHP",
		"PostgreSQL",
		"C++",
		"Python"
	]
};


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
