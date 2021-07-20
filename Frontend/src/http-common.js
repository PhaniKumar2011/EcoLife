import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:2010/api/v1/products",
    headers:{
        "content-type": "application.json"
    }
});