<template>
    <div>
        <span>123</span>
        <el-dropdown style="margin-top: 10px;float:right;">
            <el-avatar fit="contain" src="#">
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    
</style>