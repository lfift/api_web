<template>
    <el-menu :collapse="false" :router="true" :default-active="$route.path" class="el-menu-vertical-demo" 
        @open="handleOpen" @close="handleClose">
        <div class="logo">
            <h1>Vue Test</h1>
        </div>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/users">
            <i class="el-icon-setting"></i>
            <span slot="title">用户列表</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            handleOpen(key, keyPath) {
                window.console.log(key + "==" + keyPath);
            },
            handleClose(key, keyPath) {
                window.console.log(key + "==" + keyPath);
            }
        }

    }
    
</script>
<style scope>
    .logo{
        height: 60px;
        line-height: 60px;
    }
    h1{
        text-align: center;
    }
    .el-aside{
       box-shadow: 3px 0 3px #E0E0E0;
    }
   .el-menu{
       border: none;
    }
</style>