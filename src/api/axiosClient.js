import axios from 'axios';


  const api = axios.create({
    baseURL: 'https://alkaram-cloths-backend.vercel.app',
    withCredentials: true,
  });

  // Response interceptor (errors handle)
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        console.error("Network error, please check your connection");
      } else if (error.response.status === 401) {
        console.log("Unauthorized, redirect to login");
      }
      return Promise.reject(error);
    }
  );

  

// Correct export
export default api;
