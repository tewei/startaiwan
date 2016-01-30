Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function (userId, doc) {
        return (userId && doc.author === userId);
    }
});

PostSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    content: {
        type: String,
        label: "Description"
    },
    published: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
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

Posts.attachSchema(PostSchema);