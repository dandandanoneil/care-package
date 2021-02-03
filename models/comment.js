const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    comment: {
        type: String,
        required: true
    },
    created_at: { type: Date, default: Date.now },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;