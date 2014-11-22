Template.activityResult.rendered = function() {
	var rating = this.data.rating;
	var id = '#' + this.data._id;

	if (rating >= 0 && rating < 2) {
		setResultColor(id, '#FF0000');
	}
	else if (rating >= 2 && rating < 4) {
		setResultColor(id, '#FFAA00');
	}
	else if (rating >= 4 && rating < 6) {
		setResultColor(id, '#FFFF00');
	}
	else if (rating >= 6 && rating < 8) {
		setResultColor(id, '#AAFF00');
	}
	else {
		setResultColor(id, '#00FF00');
	}
}

var setResultColor = function(id, color) {
	$(id).css('background-color', color)
}
