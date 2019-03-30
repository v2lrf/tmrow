import axios from "axios";
import config from "../config";

export default (request = async (lat, lon, url) =>
  axios({
    headers: { "auth-token": config.TOKEN },
    method: "get",
    url: url + "?lat=" + lat + "&lon" + lon,
    timeout: 3000
  }));
