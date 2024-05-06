// 二次封装axios
import axios from 'axios'
import useUserStore from '../store/user'
//创建axios实例
let request = axios.create({
    baseURL: "http://localhost:5678",
    timeout: 10000, //超时时间
})

//添加请求与响应拦截器
request.interceptors.request.use((config) => {
    //获取token携带给服务器
    let userStore = useUserStore()
    console.log(userStore.token as string)
    if (userStore.token!='') {
        // config.headers.token = userStore.token
        config.headers.Authorization = `Bearer ${userStore.token}`
    }
    //返回配置对象
    return config
})

export default request