Template.viewResults.helpers({
	allActivities: function() {
		return Activities.find({score: { $ne: -1 }}, {sort: {score: -1}}).fetch();
	}});
