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
};

export default REQUESTS;
