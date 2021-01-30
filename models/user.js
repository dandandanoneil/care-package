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
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;