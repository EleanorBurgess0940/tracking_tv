const mongoose = require("mongoose");
const db = require("../models");


// Empty the user collection, insert users below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/tvusers"
);

const userSeed = [
    {
        email: "asmith@google.com",
        password: "password1",
        shows: []
    },
    {
        email: "bsmith@google.com",
        password: "password2",
        shows: []

    },
    {
        email: "csmith@google.com",
        password: "password3",
        shows: []

    },
    {
        email: "dsmith@google.com",
        password: "password4",
        shows: []

    },
    {
        email: "esmith@google.com",
        password: "password5",
        shows: []

    },
    {
        email: "fsmith@google.com",
        password: "password6",
        shows: []

    },
    {
        email: "gsmith@google.com",
        password: "password7",
        shows: []

    },
    {
        email: "hsmith@google.com",
        password: "password8",
        shows: []

    },
    {
        email: "ismith@google.com",
        password: "password9",
        shows: []

    }
]

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const showSeed = [
    {
        TheMovieDBAPIshowID: 1668,
        name: "Friends",
        hasWatched: false
    },
    {
        TheMovieDBAPIshowID: 456,
        name: "The Simpsons",
        hasWatched: false
    },
    {
        TheMovieDBAPIshowID: 4614,
        name: "The Simpsons",
        hasWatched: false
    }
]


db.Show
    .remove({})
    .then(() => db.Show.collection.insertMany(showSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

