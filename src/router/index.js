import Vue from 'vue'
import VueRouter from 'vue-router';
// 一级路由
import Login from "@/components/Login";
import Home from "@/components/Home";

// 二级路由
import Users from "@/components/Users";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path:"/", component: Login, name: 'Login'},
        {path: "/home", component: Home, name: 'Home', redirect: Users, children: [
                {path: "/users", component: Users, name: 'Users'}
            ]}
    ],
    mode: 'hash'
});