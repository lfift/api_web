<template>
    <div>
        <div class="logo">
            <router-link to="/home">
                <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"/>
                <transition name="sidebarLogoFade">
                    <h1 v-if="!isCollapse">Vue Element Admin</h1>
                </transition>
            </router-link>
        </div>
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :router="true" :default-active="$route.path">
            <el-menu-item index="/home">
                <i class="el-icon-house"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/users">
                <i class="el-icon-user"></i>
                <span slot="title">用户列表</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default {
        props: {
            isCollapse: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        }

    }
    
</script>
<style scope>
    .logo{
        height: 50px;
    }
    .logo a{
        display: inline-block;
        height: 100%;
        width: 100%;
        line-height: 50px;
        font-weight: 600;
        color: #000;
    }
    .logo img{
        width: 32px;
        height: 32px;
        display: inline-block;
        border: none;
        vertical-align: middle;
        margin: 0px 12px;
    }
    .logo h1{
        font-size: 14px;
        display: inline-block;
        margin: 0;
    }
    h1{
        text-align: center;
    }
    .el-aside{
       box-shadow: 3px 0 3px #E0E0E0;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 210px;
        min-height: 400px;
    }
    .el-menu{
        height: 100%;
    }
    .sidebarLogoFade-enter-active, .sidebarLogoFade-leave-to {
        transition: opacity .1s;
    }
    .sidebarLogoFade-enter,.sidebarLogoFade-leave-to {
        opacity: 0;
    }
</style>