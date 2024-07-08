import axios from "axios";
import { getLocalStorage } from "../helpers";
import { LOGIN_USER } from "../constants";

// console.log(import.meta.env.VITE_BEARER);
const fetcher = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MSIsIkhldEhhblN0cmluZyI6IjA3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyODI1OTIwMDAwMCIsIm5iZiI6MTY5ODUxMjQwMCwiZXhwIjoxNzI4NDA2ODAwfQ.SQTYsMRTWBFJDbt4U59qJzAJXaFEdPSIUv3dFj73h1M",
    Authorization: import.meta.env.VITE_ACCESS_TOKEN,
  },
  timeout: 30000,
});

fetcher.interceptors.request.use((config) => {
  // console.log("config: ", config)
  const user = getLocalStorage(LOGIN_USER);

  //* Thêm Authorization vào header
  if (user) {
    config.headers["Authorization"] = user.accessToken;
  }

  // console.log("login-user: ", user)
  return config;
});

fetcher.interceptors.response.use((response) => {
  return response;
});

export default fetcher;
