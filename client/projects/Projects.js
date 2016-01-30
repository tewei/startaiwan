Meteor.subscribe('projects');

Template.Projects.helpers({
    projects: function(){
        return Projects.find({});
    }
});
