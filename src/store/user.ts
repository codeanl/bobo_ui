
import { defineStore } from 'pinia'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN} from '../utils/token'
import { userLogin,userLogout } from "../api/index";

let useUserStore = defineStore('User', {
    // 存储数据
    state: (): any => {
        return {
            id:0,
            created_at:'',
            token: '',
            username: '',
            nickname: '',
            avatar: '',
            email:'',
            uuid:''
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
                this.email = res.data.data.email
                this.uuid = res.data.data.uuid
                this.id = res.data.data.id
                this.created_at = String(res.data.data.created_at)
                // 持久化
                SET_TOKEN(res.data.data.token  as string)
            } 
            return res.data.message
        },
        async userLogout() {
            let res=await userLogout();
            if(res.data.code==200){
                this.token = ''
                this.username = ''
                this.avatar = ''
                this.nickname = ''
                this.email = ''
                this.uuid = ''
                this.id = 0
                this.created_at = ''
            }
            return res.data.message
        },
    },
    getters: {},
    persist: true,
})

export default useUserStore