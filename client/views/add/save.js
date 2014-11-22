Template.save.rendered = function() {
	var options = {
		placeholder : "Rating",
		width: "15%",
		data: populateData()
	}

	$("#rating-box").select2(options);
}

var populateData = function() {
	var result = [];
	for (i = 0; i <= 10; i++) {
		result.push({id: i, text: i.toString()});
	}
	return result;
}

saveRating = function() {
	// Get the selected activities
	var activities = document.getElementById('activities-box');
	var rating = parseFloat(document.getElementById('rating-box').value);
	var date = document.getElementById('my-datepicker').value;
	var currentUser = Meteor.users.findOne()._id;

	var isValid = validateForm(activities, rating, date);

	if (isValid) {
		var activityIds = _.map(activities.selectedOptions, function(activity) {
			return getActivityId(activity.value)
		});

		Days.insert({date: date, rating: rating, activityIds: activityIds, user: currentUser});

		$('#activities-box').select2("val", "");
		$('#rating-box').select2("val", "");
		$('#my-datepicker').value = "";
		$('#save-success-alert').show();
	}

	else {
		$('#save-failed-alert').show();
	}
}

var getActivityId = function(activityName) {
	var activityDoc = Activities.findOne({name: activityName});
	return activityDoc._id;
}

var validateDate = function(date) {
	var day = Days.findOne({date: date});
	return day == null;
}

var validateForm = function(activities, rating, date) {
	// Validate that a date is selected
	if (date === "") {
		document.getElementById('save-failed-alert-message').innerHTML = "Please select a date."
		return false;
	}
	if (activities.selectedOptions.length === 0) {
		document.getElementById('save-failed-alert-message').innerHTML = "Please select at least one activity."
		return false;
	}
	if (!rating && rating !== 0) {
		document.getElementById('save-failed-alert-message').innerHTML = "Please select a rating."
		return false;
	}
	if (Days.findOne({date: date})) {
		document.getElementById('save-failed-alert-message').innerHTML = "A day with this date already exists."
		return false;
	}
	return true;
}