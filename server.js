const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

let session = require("express-session");
let passport = require("./config/passport/passport");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "taco cat",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://tvShows:tvtrack1@ds163330.mlab.com:63330/heroku_wd9lqp1n",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

// // Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
