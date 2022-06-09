import axios from "axios";

const NOMINATIMAPI = axios.create({
  baseURL: "https://nominatim.openstreetmap.org/",
});

export default NOMINATIMAPI;
