var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/User");

// Tell passport we want to use a Local Strategy
passport.use(new LocalStrategy(
  // Users will sign in using an email (rather than a username)
  { usernameField: "email" },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    User.findOne({
      where: { email: email }
    }).then(function(dbUser) {
      // If the user doesn't exist
      if (!dbUser) {
        return done(null, false, {
          message: "No account exists with this email."
        });
      }
      // If the password doesn't match
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // Otherwise, return the user and signal to let them log in
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;