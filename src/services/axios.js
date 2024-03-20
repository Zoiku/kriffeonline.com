import axios from "axios";

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Function to get the token from local storage
const getToken = () =>
  localStorage.getItem("authState")
    ? JSON.parse(localStorage.getItem("authState")).token ?? null
    : null;

// Function to update the authorization header with the token
const updateHeaders = () => {
  const token = getToken();
  if (token) {
    headers.Authorization = `Bearer ${token.replace(/^"(.*)"$/, "$1")}`;
  } else {
    delete headers.Authorization;
  }
};

// Axios instance with dynamic headers
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Add a request interceptor to update headers before each request
axiosInstance.interceptors.request.use(
  (config) => {
    updateHeaders(); // Update headers before each request
    config.headers = { ...headers }; // Set headers for the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
