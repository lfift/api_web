import Vue from 'vue'
import VueRouter from 'vue-router';
import Index from "@/components/Index"

// 二级路由
import Home from "@/components/Home"
import Users from "@/views/users/Users";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path:"/", component: () => import('@/components/Login'), name: 'Login', meta: {requireAuth: true}},
        {path: "/index", component: Index, name: 'Index', redirect: Home, children: [
                {path: "/home", component: Home, name: 'Home'},
                {path: "/users", component: Users, name: 'Users'}
            ]}
    ],
    mode: 'history'
});