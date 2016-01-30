Projects = new Mongo.Collection('projects');

Projects.allow({
    insert: function (userId, doc) {
        return (userId && doc.author === userId);
    },
    update: function (userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return (userId && doc.author === userId);
    }
});

MemberSchema = new SimpleSchema({
    name: {
        type: String
    },
    school: {
        type: String
    },
    grade: {
        type: String
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    }
});

ProjectSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    slogan: {
        type: String,
        label: "Slogan",
        optional: true,
        max: 200
    },
    description: {
        type: String,
        label: "Description",
        max: 2000,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 10
            }
        }
    },
    name: {
        type: String,
        label: "Name",
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        unique: true
    },
    members: {
        type: [MemberSchema],
        minCount: 1,
        maxCount: 5
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Projects.attachSchema(ProjectSchema);