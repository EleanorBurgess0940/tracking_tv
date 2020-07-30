let passport = require("passport");
const Username = require("../../models/Username.js");
const LocalStrategy = require("./localStrategy");

passport.serializeUser(function (user, cb) {
  cb(null, { _id: user._id });
});

passport.deserializeUser(function (user, cb) {
  Username.findOne({ user: user }, "email", (err, user) => {
    console.log("*** Deserialize user, user:");
    console.log(user);
    console.log("--------------");
    done(null, user);
  });
});

passport.use(LocalStrategy);

module.exports = passport;
