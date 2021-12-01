import axios from "axios";

export const LOCAL_API = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
