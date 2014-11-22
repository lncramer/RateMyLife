dismissAlerts = function() {
	$('#save-activity-success-alert').hide();
	$('#save-activity-failed-alert').hide();
}

saveActivity = function() {
	var currentUser = Meteor.users.findOne()._id;
	var activityName = document.getElementById('activity-name').value;

	var isValid = validateActivity(activityName);

	if (isValid) {
		Activities.insert({name: activityName, user: currentUser});
		document.getElementById('activity-name').value = "";
		$('#save-activity-success-alert').show();
	}
	else {
		$('#save-activity-failed-alert').show();
	}
}

var validateActivity = function(activityName) {
	if (activityName === "") {
		document.getElementById('save-activity-failed-alert-message').innerHTML = "Please enter an activity name.";
		return false;
	}
	if (Activities.findOne({name: activityName})) {
		document.getElementById('save-activity-failed-alert-message').innerHTML = "An activity with this name already exists.";
		return false;
	}
	return true;
}