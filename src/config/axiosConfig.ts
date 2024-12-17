import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (optional)
apiClient.interceptors.request.use(
  (config) => {
    // You can add tokens or modify the request here
    console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("apiClient Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
