Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/add', {name: 'addDay'});
Router.route('/results', {name: 'viewResults'});