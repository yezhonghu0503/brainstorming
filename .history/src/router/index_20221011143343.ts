import {createRouter,createWebHistory,createWebHashHistory,RouteRecordRaw} from "vue-router"
import { defineAsyncComponent } from "vue";

const history = createWebHashHistory();
const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'login',
        component: ()=> import("../views/login/index.vue"),
        meta:{
            title:"登录"
        }
    }
]
const router = createRouter({
    history:history,
    routes:routes
})
//路由守卫
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if(to.meta.title){
        document.title = `${to.meta.title}`
    }
})
router.afterEach((to, from) => {
    // to and from are both route objects.
})

export default router;