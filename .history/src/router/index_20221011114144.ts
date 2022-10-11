import {createRouter,createWebHistory,createWebHashHistory} from "vue-router"
import { defineAsyncComponent } from "vue";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'login',
            component: ()=> import(`../views/login/index.vue`),
            meta:{
                title:"登录"
            }
        }
    ]
})
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