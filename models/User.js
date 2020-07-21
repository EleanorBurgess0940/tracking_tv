const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    shows: [
        {
            type: Schema.Types.ObjectId,
            ref: "Show",
            hasWatched: false
        }
    ]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;