import axios from "axios";


function apiInstance() {

    const instance = axios.create({
        baseURL:  "http://3.36.131.59:8080/",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin":"*",
        }
    });

    return instance;

}

export { apiInstance };