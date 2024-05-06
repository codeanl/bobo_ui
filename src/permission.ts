//路由鉴权
import pinia from './store'
import router from './router/index'
import useUserStore from '../src/store/user'
let userStore = useUserStore(pinia)
// 全局前置守卫  保护访问路由的访问权限,也就是对路由权限进行控制
// 只有在允许特定的情况下才能访问某个固定的路由,具备查看某些页面的权限,
router.beforeEach(async (to:any, from:any, next:any) => {
    document.title = "啵啵社区"
    let token = userStore.token
    let username = userStore.username
    if (to.path === '/login' ) {
        next()
    } else if (token) {
        if (username) {
            next()
        } else {
                next({ path: '/404' })
        }
    } else {
        next({ path: '/404' })
    }
})
//全局后置守卫
router.afterEach((to:any, from:any, next:any) => {
})