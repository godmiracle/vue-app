import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { // 登录
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'tabbar',
    component: () => import('@/views/tabbar'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  { // 搜索
    name: 'search',
    path: '/search',
    component: () => import('@/views/search')
  },
  { // 文章详情
    name: 'article',
    path: '/article/:articleId',
    component: () => import('@/views/article'),
    props: true
  },
  { // 个人资料
    name: 'user-profile',
    path: '/user/profile',
    component: () => import('@/views/user-profile')
  }
]

const router = new VueRouter({
  routes
})

export default router
