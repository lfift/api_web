<template>
    <el-container class="fillcontain">
        <LeftMenu :isCollapse="isCollapse"></LeftMenu>
        <el-container>
            <Header @toggleActive="toggleActive($event)"></Header>
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
import LeftMenu from "@/components/LeftMenu"
import Footer from "@/components/Footer"
    export default {
        name: "Index",
        components: {Header, LeftMenu, Footer},
        data(){
            return {
                 isCollapse: false
            }
        },
        methods: {
            toggleActive($event) {
                this.isCollapse = $event;
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
    .el-footer{
       background-color: #f7fbfd;
       text-align: center;
       line-height: 60px;
   }
   .el-main{
       background-color: #ccc;
       min-height: 665px;
   }
</style>