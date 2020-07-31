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
  // Gets all shows
  getPopular: function () {
    return axios.get(URL + "/tv/popular?api_key=" + apiKey);
  },

  // Gets shows with the given id
  // getShow: function (id) {
  //   return axios.get("/api/tv/" + id);
  // },

  // saveShow: function (tvData) {
  //   return axios.post("/api/books", tvData);
  // },

  signUp: function (userData) {
    console.log(userData);
    return axios.post("/api/signup", userData);
  },
};
