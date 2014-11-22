Template.resultsTable.helpers({
	allActivities: function() {
		var result = [];
		var allActivities = Activities.find().fetch();

		_.each(allActivities, function(activity) {
			var daysWithActivity = getDaysWithActivity(activity._id);

			if (daysWithActivity.length !== 0) {
				var averageRating = getAverageActivityRating(daysWithActivity);

				result.push({
					_id: activity._id, 
					name: activity.name, 
					rating: averageRating
				});
			}
		});

		return sortResultByRating(result);
}});

var getDaysWithActivity = function(activityId) {
	return Days.find({activityIds: {$in : [activityId]}}).fetch();
}

var getAverageActivityRating = function(daysWithActivity) {
	var totalRating = 0;

	_.each(daysWithActivity, function(day) {
		totalRating += day.rating;
	});

	var averageRating = totalRating / daysWithActivity.length;
	return averageRating.toFixed(2);
}

var sortResultByRating = function(result) {
	return result.sort(function(a,b) {
		return b.rating - a.rating;
	})
}