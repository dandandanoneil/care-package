const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    email: {
        type: Schema.Types.Email,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: [3, 'Password must be at least 3 characters'],
        required: true
    },
    name: {
        type: String,
        required: true, 
        minlength: [1, 'Display name must be between 1 and 20 characters'],
        maxlength: [20, 'Display name must be between 1 and 20 characters']
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    memberSince: { type: Date, default: Date.now },
    bio: String, 
    facebookLink: String,
    instagramLink: String,
    twitterLink: String,
    linkedInLink: String
});

UserSchema.methods.validPassword = function(enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password);
};

UserSchema.pre('save', async function(next) {
    // If the password hasn't been created/modified, move on
    if (!this.isModified('password')) return next();

    // If it has, hash the password, then call the 'next' function
    this.password = bcrypt.hashSync(this.password, 8);
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;