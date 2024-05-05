//对外暴露配置路由
export const constantRoute = [
    {
        path: '/',
        component: () => import('../views/layout/index.vue'),
        name: 'layout',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('../views/home/index.vue'),
            },
            {
                path: '/test',
                component: () => import('../views/test/index.vue'),
            },
            {
                path: '/setting',
                component: () => import('../views/setting/index.vue'),
            },
            {
                path: '/profile',
                component: () => import('../views/profile/index.vue'),
            },
            {
                path: '/artical',
                component: () => import('../views/artical/index.vue'),
            },
        ],
    },
    {
        path: '/404',
        component: () => import('../views/404/index.vue'),
        name: '404',
        
    },
]
