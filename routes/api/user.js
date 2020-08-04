const router = require("express").Router();
const User = require("../../models/User.js");
let passport = require("../../config/passport/passport");

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.json("not authenticated");
}

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  // ADD VALIDATION
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the email: ${email}`,
      });
    } else {
      const newUser = new User({
        email: email,
        password: password,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect("/login?info=" + info);
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      console.log("logged in", req.user);
      var userInfo = {
        username: req.user.username,
      };
      res.send(userInfo);
    });
  })(req, res, next);
});

router.get("/user", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
