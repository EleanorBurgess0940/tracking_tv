require('dotenv').config()
import axios from "axios";

const URL = "https://api.themoviedb.org/3"

export default {
    tvSearch: function (query) {
        return axios.get(URL + query)
    },
    // Gets all shows
    getShows: function () {
        return axios.get(URL + "/tv/popular?api_key=49205758457ac69b563ca3dcae265622");
    },
    // Gets shows with the given id
    getShow: function (id) {
        return axios.get("/api/tv/" + id);
    }
};


