
import { defineStore } from 'pinia'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN} from '../utils/token'
import { userLogin } from "../api/index";

let useUserStore = defineStore('User', {
    // 存储数据
    state: (): any => {
        return {
            token: '',
            username: '',
            nickname: '',
            avatar: '',
        }
    },
    // 异步|逻辑的地方
    actions: {
        //用户登录方法
        async userLogin(data: any) {
            let res: any = await userLogin(data)
            if (res.data.code == 200) {
                this.token = res.data.data.token as string
                this.username = res.data.data.username
                this.nickname = res.data.data.nickname
                this.avatar = res.data.data.avatar
                // 持久化
                SET_TOKEN(res.data.data.token  as string)
            } 
            return res.data.message
        },
        async userLogout() {
            // REMOVE_TOKEN()
            this.token = ''
            this.username = ''
            this.avatar = ''
            this.nickname = ''
        },
    },
    getters: {},
    persist: true,
})

export default useUserStore