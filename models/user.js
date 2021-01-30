const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
import { isEmail } from 'validator';

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        minlength: [5, 'Password must be at least 5 characters'],
        required: true
    },
    name: {
        type: String,
        required: true, 
        minlength: [5, 'Display name must be between 5 and 20 characters'],
        maxlength: [20, 'Display name must be between 5 and 20 characters']
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

UserSchema.methods.checkPassword = function(enteredPassword, cb) {
    bcrypt.compare(enteredPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

UserSchema.pre("save", async function(next) {
    const user = this;
    
    // If the password hasn't been created/modified, move on
    if (!user.isModified('password')) return next();

    // If it has, hash the password
    bcrypt.hash(user.password, 8, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;