import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";

import Swal from "sweetalert2";

let baseurl = process.env.BASE_URL;
const Api = axios.create({
  baseURL: baseurl,
});

Api.interceptors.request.use(
  async (config) => {
    const authToken = getCookie("token");
    config.headers.Authorization = `${authToken}`;

    if (config.method === "delete") {
      // Display SweetAlert confirmation dialog
      const confirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // If user confirms, proceed with the request; otherwise, cancel it
      if (!confirmed.value) {
        return Promise.reject();
      }
    }

    // Continue with the request
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// You can also set up response interceptors if needed
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
