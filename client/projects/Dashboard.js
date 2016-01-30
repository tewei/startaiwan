Meteor.subscribe('projects');


Template.Dashboard.helpers({
    projects: function() {
        return Projects.find({author: Meteor.userId()});
    }
});

Template.ProjectInfo.helpers({
    editProject: function(){
        return Session.get('editProject');
    }
});

Template.ProjectInfo.events({
    'click .edit-project': function(){
        Session.set('editProject', !Session.get('editProject'));
    },
    'click .delete-project': function(){
        Meteor.call('deleteProject', this._id);
    }
});