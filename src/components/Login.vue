<template>
    <div class="container">
        <div class="form">
            <el-form :model="loginForm" ref="loginForm" :rules="rules">
                <el-form-item prop="username">
                    <el-input placeholder="用户名" v-model="loginForm.username" clearable autofocus></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="loginForm.password" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login" @keyup.enter="$event.target.click">登 录</el-button>
                </el-form-item>
            </el-form>
            <div class="title">
                <span>其他登录方式</span>
            </div>
            <div id="icon">
                <el-col :span="6" :offset="8">
                    <i class="iconfont icon-QQ" @click="qqLogin"></i>
                </el-col>
                <el-col :span="6">
                    <i class="iconfont icon-weixin" @click="weixinLogin"></i>
                </el-col>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: 'admin',
                    rememberMe: true
                },
                rules: {
                    username: [
                        {required: true, trigger: 'blur', message: '请输入用户名'}
                    ],
                    password: [
                        {required: true, trigger: 'blur', message: '请输入密码'}
                    ]
                }
            }
        },
        methods: {
            login() {
                if (this.loginForm.username == "admin" && this.loginForm.password == "admin") {
                    this.$router.push("/index");
                } else {
                    this.$message.error("用户名或密码不正确！");
                }
            },
            qqLogin() {
                this.$message.info("QQ登录暂未开通！");
                this.$notify.info("22");
            },
            weixinLogin() {
                this.$message.info("微信登录暂未开通！");
            }
        }
    }
</script>

<style scoped>
    @import url('../assets/css/iconfont.css');
    .container{
        min-height: 758px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form{
        width:450px;
        height:350px;
        box-shadow: 0px 0px 10px #ccc;
        border-radius: 10px;
        background-color: #ffffff;
    }
    .el-form-item{
        margin: 20px auto;
        width: 80%;
    }
    .el-button--primary{
        width: 100%;
        border: none;
        border-radius: 20px;
    }
    .el-form{
        padding-top: 40px;
    }
    .title{
        font-family: "Microsoft YaHei";
        text-align: center;
        font-size: .5em;
        color: #ccc;
    }
    div#icon{
        margin-top: 15px;
    }
    .iconfont{
        border-radius: 50%;
    }
    .iconfont:hover{
        box-shadow: 2px 2px 20px #ccc;
        color: #f2cf08;
        transition: all .3s;
    }
</style>