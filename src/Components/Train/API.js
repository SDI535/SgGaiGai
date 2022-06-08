import axios from "axios";

const BASE_URL = "http://datamall2.mytransport.sg/ltaodataservice";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const API = axios.create({
  baseURL: REQUEST_URL,
  headers: {
    AccountKey: "Rv2rldPdTX6R8Vo3CKpxRQ==",
    accept: "application/json",
  },
});

export default API;