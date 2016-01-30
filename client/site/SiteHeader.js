Template.SiteHeader.helpers({
    username: function(){
        return Meteor.user().username;
    }
});