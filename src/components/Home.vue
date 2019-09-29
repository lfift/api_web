<template>
    <el-container class="fillcontain">
        <el-header height="60px">
            <el-row type="flex" class="row-bg" justify="end" style="height: inherit">
                <el-col :span="1">
                    <el-dropdown style="margin-top: 10px">
                        <el-avatar fit="contain" src="http://image101.360doc.com/DownloadImg/2016/10/3009/83368228_14.jpg">
                        </el-avatar>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu :collapse="isCollapse" :router="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="/users">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
        <el-footer height="60px">
            <div>Copyright liu.ift@gmail.com</div>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                isCollapse: "true"
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key + "==" + keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key + "==" + keyPath);
            }
        }
    }
</script>

<style scoped>
   .el-header{
       box-shadow: 0 5px 5px #E0E0E0;
       background-color: #409EFF;
       padding: 0;
   }
   .el-footer{
       background-color: #f7fbfd;
       text-align: center;
       line-height: 60px;
   }
   .el-aside{
       box-shadow: 3px 0 3px #E0E0E0;
   }
   .el-menu{
       border: none;
   }
</style>