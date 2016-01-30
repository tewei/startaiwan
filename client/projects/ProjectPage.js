Meteor.subscribe('projects');

Template.ProjectPageHeader.helpers({
    thisProject: function() {
        var projectName = FlowRouter.getParam('name');
        return Projects.findOne({name: projectName});
    }
});
Template.ProjectPage.helpers({
    thisProject: function() {
        var projectName = FlowRouter.getParam('name');
        return Projects.findOne({name: projectName});
    }
});