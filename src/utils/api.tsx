import axios from "axios";
import { config } from "../config";
const api = axios.create({
  baseURL: `${config.VITE_SERVER_URL}/api/${config.apiVersion}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (tmp) => {
    // Get the current endpoint from the request URL
    const endpoint = tmp.url;

    // Skip token for login and register endpoints
    if (
      endpoint?.includes("/auth/login") ||
      endpoint?.includes("/auth/register")
    ) {
      return tmp;
    }

    // For all other requests, add the JWT token
    const token = localStorage.getItem("token");
    if (token) {
      tmp.headers.Authorization = `Bearer ${token}`;
    }
    return tmp;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
