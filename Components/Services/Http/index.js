import axios from "axios"

// Add a request interceptor
axios.interceptors.request.use(async function (config) {
    /*
    if (!config.publicUrl) {
        config.headers.Authorization = "Bearer " + decrypted(store.getState()?.persistData?.token?.value);
    }
    if(config.loading){   
        store.dispatch(openLogin(true))
    }
    */
    // Do something before request is sent
    return config;
}, function (error) {
    //store.dispatch(openLogin(false))
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    //store.dispatch(openLogin(false))
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    //store.dispatch(openLogin(false))
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

const myInterceptor = axios.interceptors.request.use(function () {
});
axios.interceptors.request.eject(myInterceptor);

export const urlMain = "https://dummyjson.com/"

export default axios


