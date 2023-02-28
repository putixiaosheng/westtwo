import axios from "axios"
import router from "./router"
import Element from "element-ui"
axios.defaults.baseURL = "http://39.108.145.195:3000/api/v1"

const request = axios.create({
    timeout:5000,
    headers:{
        'Content-Type':"application/json; charset=utf-8"
    }
}) 

request.interceptors.request.use(config=>{
    config.headers['Authorization'] = localStorage.getItem("token")
    return config
})

/* request.interceptors.response.use(response => {
    let res=response
    if(res.status === 200){
        return response
    }else{
        Element.Message.error(!res.msg?'系统异常':res.msg)
        return Promise.reject(response.data.msg)
    }
},error =>{

    return Promise.reject(error)
}) */
export default request