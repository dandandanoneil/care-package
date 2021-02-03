const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/care-package", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Configure passport
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

// Set up api routes
app.use(require('./routes'));

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
