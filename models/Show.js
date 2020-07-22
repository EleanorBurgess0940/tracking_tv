const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    TheMovieDBAPIshowID: Number,
    name: String,
    hasWatched: false
});

const Show = mongoose.model("Show", ShowSchema);

module.exports = Show;
