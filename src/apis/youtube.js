import axios from "axios";

const KEY = "AIzaSyCiizB3ya5L4hy9fhGBrEO6GTZdxXoznrU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
