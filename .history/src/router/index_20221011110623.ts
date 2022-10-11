import {createRouter,createWebHistory,createWebHashHistory} from "vue-router"
import { defineAsyncComponent } from "vue";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'login',
            component: defineAsyncComponent(()=> import(`../views/login/index.vue`)),
            meta:{
                title:"登录"
            }
        }
    ]
})