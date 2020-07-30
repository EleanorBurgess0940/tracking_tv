const Username = require("../../models/Username.js");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
  function (email, password, done) {
    Username.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!username) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (!username.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, username);
    });
  }
);

module.exports = strategy;
