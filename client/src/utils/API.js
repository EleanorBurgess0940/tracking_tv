require('dotenv').config()
import axios from "axios";

const URL = "https://api.themoviedb.org/3/tv/popular?" + "process.env.MOVIEAPIKEY"


export default {
    tvSearch: function (query) {
        return axios.get(URL + query)
    },
    // Gets all shows
    getShows: function () {
        return axios.get("/api/tv");
    },
    // Gets shows with the given id
    getShow: function (id) {
        return axios.get("/api/tv/" + id);
    }
};


