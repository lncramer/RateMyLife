Template.activities.rendered = function() {
	var options = {
		placeholder: "What did you do?",
		allowClear: true,
		width: "100%"
	}

	$("#activities-box").select2(options);
}

Template.activities.helpers({
	allActivities: function() {
		return Activities.find().fetch();
	}});