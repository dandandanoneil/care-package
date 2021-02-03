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
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;