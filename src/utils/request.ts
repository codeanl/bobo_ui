// 二次封装axios
import axios from 'axios'
//创建axios实例
let request = axios.create({
    baseURL: "http://localhost:5678",
    timeout: 10000, //超时时间
})

export default request