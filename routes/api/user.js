const router = require("express").Router();
const User = require("../../models/User.js");
const Show = require("../../models/Show.js");
let passport = require("../../config/passport/passport");
const tvControllers = require("../../controllers/tvControllers");

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

router.post("/show", (req, res) => {
  console.log("==========post==========");
  console.log(req.body);
  User.findOneAndUpdate(
    { email: req.body.email },
    {
      $addToSet: {
        shows: [req.body.name, req.body.TheMovieDBAPIshowID, req.body.poster],
      },
    },
    function (error, success) {
      if (error) {
        console.log("error", error);
      } else {
        console.log("sucess", success);
      }
    }
  );
});

router.get("/api/show", (req, res) => {
  console.log("============get========");
  console.log(req.body);
});

module.exports = router;
