const express = require("express");
const mongoose = require("mongoose");

let session = require("express-session");
let passport = require("./config/passport");
// !!!!!!!!!NOT WORKING YET!!!!!!!!!
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// !!!NOT SURE IF WE NEED THIS!!!
// const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// !!!!!!!!!NOT WORKING YET!!!!!!!!!
// // Add routes, both API and view
// app.use(routes);

// !!!NOT SURE IF WE NEED THIS!!!

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tvusers", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
