if (Meteor.isClient) {
    
    var getMainColor = function(){
        var colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'amber', 'orange', 'deep-orange', 'brown'];
        return _.sample(colors);
    }
    
    Session.set('MainColor', getMainColor());
    
    Template.registerHelper('mainColor', function () { 
      return Session.get('MainColor'); 
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

/* Routes and router config for DevconSite. */

/* Landing page. */
Router.route('/', {
  name: 'home',
  template: 'home'
});

/* Admin panel login */
Router.route('/login', {
  name: 'login',
  tmeplate: 'login'
});

/* Admin panel */
Router.route('/admin', {
  name: 'admin',
  tmeplate: 'admin'
});

/* Resume checklist. */
Router.route('/resume', {
  name: 'resume',
  tmeplate: 'resume'
});

/* Projects page. */
Router.route('/projects', {
  name: 'projects',
  template: 'projects'
});

/* Games page */
Router.route('/games', {
  name: 'games',
  template: 'games'
});

/* Github page */
Router.route('/github', {
  name: 'github',
  template: 'github'
});

/* Sets the layout Template to Layout1. */
Router.configure({
  layoutTemplate: 'layout1'
});