<template>
    <el-container class="fillcontain">
        <el-aside width="256px">
            <LeftMenue></LeftMenue>
        </el-aside>
        <el-container>
            <el-header height="64px">
                <Header></Header>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </el-container>
</template>
<script>
import Header from "@/components/Header"
import LeftMenue from "@/components/LeftMenue"
import Footer from "@/components/Footer"
    export default {
        name: "Index",
        components: {Header, LeftMenue, Footer},
        data(){
            return {
                 isCollapse: "true"
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
   .el-aside{
       box-shadow: 3px 0 3px #E0E0E0;
   }
   .el-menu{
       border: none;
   }
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
   .el-main{
       background-color: #ccc;
   }
</style>