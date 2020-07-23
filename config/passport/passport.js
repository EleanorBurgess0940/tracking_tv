let passport = require("passport");
const user = require("../../models/User.js");
const LocalStrategy = require("./localStrategy");

passport.serializeUser(function (user, cb) {
  cb(null, { _id: user._id });
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

module.exports = passport;
