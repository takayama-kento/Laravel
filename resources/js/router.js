import Vue from 'vue'
import VueRouter from 'vue-router'

// ページのコンポーネントをインポートする
import Photolist from './pages/Photolist.vue'
import Login from './pages/Login.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
    {
        path: '/',
        component: Photolist
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
