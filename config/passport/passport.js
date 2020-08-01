let passport = require("passport");
var User = require("../../models/User");
const LocalStrategy = require("./localStrategy");

passport.serializeUser(function (user, cb) {
  cb(null, { _id: user._id });
});

passport.deserializeUser(function (user, cb) {
  User.findById(user, function (err, user) {
    console.log("*** Deserialize user, user:");
    console.log(user);
    console.log("--------------");
    cb(err, user);
  });
});

passport.use(LocalStrategy);

module.exports = passport;
