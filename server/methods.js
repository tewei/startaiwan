Meteor.methods({
    publishProject: function(id, currentState) {
        Projects.update(id, {$set: {published: !currentState}});
    },
    deleteProject: function(id) {
        Projects.remove(id);
    }
});