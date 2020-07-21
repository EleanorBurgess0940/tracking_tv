let passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

let db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      db.user
        .findOne({
          where: {
            email: email,
          },
        })
        .then((dbuser) => {
          //if there is no user with the given email
          if (!dbuser) {
            return (
              done(null, false),
              {
                message: "Incorrect Email",
              }
            );
          } else if (!dbuser.validPassword(password)) {
            return done(null, false, {
              message: "Incorrect Password",
            });
          }
          // If none of the above, return the user
          return done(null, dbuser);
        });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});
module.exports = passport;
