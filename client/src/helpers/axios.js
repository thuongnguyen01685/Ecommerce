import axios from "axios";
import store from "../store";
import { api } from "../urlConfig";

const token = window.localStorage.getItem("token");
const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `thuong ${token}` : "",
  },
});

axiosIntance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `thuong ${auth.token}`;
  }
  return req;
});

export default axiosIntance;
