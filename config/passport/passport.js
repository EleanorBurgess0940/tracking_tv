let passport = require("passport");
var User = require("../../models/User");
const LocalStrategy = require("passport-local").Strategy;

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

passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // not necessary, DEFAULT
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        if (!user.checkPassword(password)) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      });
    }
  )
);

module.exports = passport;
