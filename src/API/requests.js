import URLS from "./urls";
import request from "./request";

let myHeaders = { "Content-Type": "application/json" };

const REQUESTS = {
  REGISTER: (body, colback, errorColback) => {
    request(URLS.register, "POST", body, myHeaders, colback, errorColback);
  },
  LOGIN: (body, colback, errorColback) => {
    request(URLS.login, "POST", body, myHeaders, colback, errorColback);
  },
  LOGOUTE: (headers, colback, errorColback) => {
    request(URLS.logoute, "POST", {}, headers, colback, errorColback);
  },
  GETPROFILE: (headers, colback, errorColback) => {
    request(URLS.profile, "GET", {}, headers, colback, errorColback);
  },
  UPDATEPROFILE: (body, headers, colback, errorColback) => {
    request(URLS.profile, "PUT", body, headers, colback, errorColback);
  },

  UPLOAD_IMG: (headers, body, colback, errorColback) => {
    request(URLS.upload_img, "POST", body, headers, colback, errorColback);
  },

  ADD_TODO: (headers, body, colback, errorColback) => {
    request(URLS.add_todo, "POST", body, headers, colback, errorColback);
  },

  GET_TODO: (headers, colback, errorColback) => {
    request(URLS.add_todo, "GET", {}, headers, colback, errorColback);
  },

  DELETE_TODO: (headers, colback, errorColback, id) => {
    request(URLS.add_todo, "DELETE", {}, headers, colback, errorColback, id);
  },

  UPDATE_TODO: (body, headers, colback, errorColback, id) => {
    request(URLS.add_todo, "PUT", body, headers, colback, errorColback, id);
  },
};

export default REQUESTS;
