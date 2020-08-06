import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const apiKey = "49205758457ac69b563ca3dcae265622";

export default {
  tvSearch: function (search) {
    return axios.get(
      URL +
        "/search/tv?api_key=" +
        apiKey +
        "&language=en-US&page=1&query=" +
        search
    );
  },
  // Gets popular shows
  getPopular: function () {
    return axios.get(URL + "/tv/popular?api_key=" + apiKey);
  },

  //Gets specific show by id
  getShow: function (id) {
    return axios.get(
      URL + "/tv/" + id + "?api_key=" + apiKey + "&language=en-US"
    );
  },

  getSavedShows: function (id) {
    return axios.get("/api/show", id);
  },

  deleteShow: function (id) {
    return axios.delete("/api/show/" + id);
  },

  saveShow: function (id) {
    console.log("maybe");
    return axios.post("/api/show", id);
  },
};
