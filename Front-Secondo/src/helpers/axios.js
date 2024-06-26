import axios from "axios";
import { api } from "../urlConfig";
import store from "../store"
import { authConstants } from "../actions/constants";

const token = window.localStorage.getItem('token');

const axiosIntance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
})

// Add a request interceptor
axiosIntance.interceptors.request.use((request) => {
    const { auth } = store.getState();
    if(auth.token){
      request.headers.Authorization = `Bearer ${auth.token}`;
    }
    return request;
  });

// Add a response interceptor
axiosIntance.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  }, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log(error.response)
    const { status } = error.response;
    if(status === 500){
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS })
    }

    // Do something with response error
    // console.log("Fail Here")
    // console.log(error.response.data.error);
    // console.log(error.response.status);
    
    return Promise.reject(error);
    // return error;
  });

export default axiosIntance;