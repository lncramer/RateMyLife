Meteor.publish('activities', function() {
	return Activities.find({user: this.userId});
});

Meteor.publish('days', function() {
	return Days.find({user: this.userId});
})