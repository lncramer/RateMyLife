Template.overallScore.helpers({
	getOverallScore: function() {
		var allDays = Days.find().fetch();

		if (allDays.length != 0) {
			var totalRating = 0;

			_.each(allDays, function(day) {
				totalRating += day.rating;
			});

			var averageRating = totalRating / allDays.length;
			return averageRating.toFixed(2);
		}

		return "to be determined. Go and enter some days!";
	}
});
