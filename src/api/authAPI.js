import axios from "axios";

// Get the API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Check if the base URL is not defined
if (!API_BASE_URL) {
  console.log("API_BASE_URL is not defined. Using an empty string.");
}

// Create a base Axios instance
const auth = axios.create({
  baseURL: API_BASE_URL,
  timeout: 4000, // Adjust the timeout as needed
});

// Create an instance for multipart/form-data requests
const apiFormData = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Function to create an instance with token-based JSON requests
const apiWithToken = (token) => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Set default Content-Type for JSON requests
    },
  });
};

// Function to create an instance for multipart/form-data requests with a token
const apiFormDataWithToken = (token) => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// Interceptors for request logging and attaching tokens
const addRequestInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // Modify request config before sending it
      console.log("Request sent with config:", config);
      return config;
    },
    (error) => {
      // Handle request errors
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );
};

// Interceptors for response handling and error logging
const addResponseInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      // Handle successful response
      return response;
    },
    (error) => {
      // Handle errors (network, server, unauthorized)
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          console.error("Unauthorized: Please login.");
        } else if (status >= 500) {
          console.error("Server error: Try again later.");
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup error:", error.message);
      }
      return Promise.reject(error);
    }
  );
};

// Attach interceptors to the base and form-data API instances
addRequestInterceptor(auth);
addResponseInterceptor(auth);
addRequestInterceptor(apiFormData);
addResponseInterceptor(apiFormData);

// Factory function for API instances with token and interceptors attached
export const apiWithTokenWithInterceptors = (token) => {
  const instance = apiWithToken(token);
  addRequestInterceptor(instance);
  addResponseInterceptor(instance);
  return instance;
};

export const apiFormDataWithTokenWithInterceptors = (token) => {
  const instance = apiFormDataWithToken(token);
  addRequestInterceptor(instance);
  addResponseInterceptor(instance);
  return instance;
};

// Export base API instance by default
export default auth;