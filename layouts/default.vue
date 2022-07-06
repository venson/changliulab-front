<template>
  <div class="in-wrap">
    <el-container class="container">
      <el-header class="page-header el-header-layout">
        <!-- <span class="header-image"></span> -->
        <h1 class="lab-title">Welcome to Chang Liu LAB</h1>
        <h2 class="lab-subtitle">Trees cell wall formation and wall signal Group</h2>
        <div class="el-menu">
          <el-menu class="main-menu" background-color="#318651" :default-active="this.$route.path.split('/')[1]" mode="horizontal"
            @select="handleSelect">
            <el-menu-item index="">主页</el-menu-item>
            <el-menu-item index="research">研究方向</el-menu-item>
            <el-menu-item index="scholar">发表论文</el-menu-item>
            <el-menu-item index="groupmember">组内成员</el-menu-item>
            <el-menu-item index="activites">近期活动</el-menu-item>
            <el-menu-item index="methdology">研究方法</el-menu-item>
            <el-menu-item index="course">公开课程</el-menu-item>
            <ul class="h-r-login c-fff">
              <li v-if="loginInfo ==='' || loginInfo.email == ''" id="no-login">
                <a title="登录" @click="loginDialog">
                  <em class="icon18 login-icon">&nbsp;</em>
                  <span class="vam ml5">登录</span>
                </a>
                |
                <a title="注册" @click="signup">
                  <span class="vam ml5">注册</span>
                </a>
              </li>
              <!-- <li> -->
    <!-- <li v-if="loginInfo.id" id="is-login-one" class="mr10">
        <a id="headerMsgCountId" href="#" title="消息">
            <em class="icon18 news-icon">&nbsp;</em>
        </a>
        <q class="red-point" style="display: none">&nbsp;</q>
    </li> -->
    <!-- <li v-if="this.loginInfo.id" id="is-login-two" class="h-r-user"> -->
    <li v-if="loginInfo !=='' && loginInfo.email !== ''" id="is-login-two" class="h-r-user">
        <a href="/ucenter" title>
            <img
                 :src="loginInfo.avatar"
                 width="30"
                 height="30"
                 class="vam picImg"
                 alt
                 >
            <span id="userName" class="vam disIb">{{ loginInfo.nickname }} </span>
        </a>
        |
        <a href="javascript:void(0);" title="退出" @click="logout()" class="ml5">Log out</a>
    </li>
            </ul>
          </el-menu>
        </div>
        <div>
        </div>
      </el-header>

      <!-- 公共头引入 -->
      <!-- /公共头引入 -->
      <el-main class="page-main">

        <nuxt />
      </el-main>
      <!-- login dialog -->
      <el-dialog title="Log in" width="35%" center :visible.sync="loginFormVisible">
        <el-form :model="member" label-width="80px">
          <el-form-item label-width="0px" prop="email">
            <el-input v-model="member.email" autocomplete="on" placeholder="E-mail"></el-input>
          </el-form-item>
          <el-form-item label-width="0px" prop="password">
            <el-input type="password" v-model="member.password" placeholder="Password"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="success" class="login-button" @click="submitLogin()">Log in</el-button>
        </div>
      </el-dialog>
      <!-- login dialog -->
      <!-- signup dialog -->
      <el-dialog title="Sign up" width="35%" center :visible.sync="signupFormVisible">
        <el-form :model="registerInfo" label-width="80px" :rules="rules">
          <el-form-item label-width="0px" prop="email">
            <el-input v-model="registerInfo.email" autocomplete="on" placeholder="E-mail">
            </el-input>
          </el-form-item>
          <el-form-item label-width="0px" prop="nickName">
            <el-input v-model="registerInfo.nickName" autocomplete="on" placeholder="Nick Name"></el-input>
          </el-form-item>
          <el-form-item label-width="0px" prop="password">
            <el-input type="password" v-model="registerInfo.password" placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item label-width="0px" prop="password">
            <el-input type="password" v-model="member.password2" placeholder="Password Repeat"></el-input>
          </el-form-item>
          <div>The code will expire in about 20 minutes.</div>
          <el-form-item label-width="0px" prop="securityCode">
            <el-input v-model="registerInfo.securityCode" autocomplete="off" placeholder="Security Code">
              <el-button slot="suffix" type="text" @click="sendCode(registerInfo.email)">{{ codeText }}</el-button>
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="success" class="login-button" @click="submitRegistration()">Sign up</el-button>
        </div>
      </el-dialog>
      <!-- signup dialog -->
      <el-footer class="page-footer">
        <h5>Copyright© Chang Liu Lab 2022-2042, All Rights Reserved Ver.1.0.0.0 Design:Venson</h5>
        <h5><i class="el-icon-location-information"></i>: 中国 黑龙江哈尔滨市香坊区和兴路26号 CHINA &nbsp;&nbsp;</h5>
        <h5>
          <i class="el-icon-phone-outline"></i>: 86-21-54924161 &nbsp;&nbsp;
          <i class="el-icon-postcard"></i>: <a href="mailto:junhuishen@cemps.ac.cn">junhuishen@cemps.ac.cn</a>
        </h5>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import '~/assets/css/reset.css'
import '~/assets/css/theme.css'
import '~/assets/css/global.css'
import '~/assets/css/web.css'
import '~/assets/css/header.scss'
import '~/assets/css/base.css'
import '~/assets/css/activity_tab.css'
import '~/assets/css/bottom_rec.css'
import '~/assets/css/nice_select.css'
import '~/assets/css/order.css'
// import "~/assets/css/pages-weixinpay.css"

import cookie from 'js-cookie'
import loginApi from '@/api/login'
import registerApi from "@/api/registration"


export default {
  data() {
    return {
      navMenu: {
        index: "main",
        title: "主页"
      },
      params: '',
      token: '',
      memberInfo: '',
      registerInfo: {
        email: '',
        nickName: '',
        password: '',
        securityCode: '',
      },
      member: {
        email: '',
        password: '',
      },
      memberList: null,
      loginInfo: {
        id: '',
        age: '',
        avatar: '',
        mobile: '',
        nickname: '',
        sex: ''
      },
      loginFormVisible: false,
      signupFormVisible: false,
      sending: true,
      second: 120,
      codeText: "Security Code",
      rules: {
        email: [
          { required: true, message: 'E-mail address can not be empty', trigger: 'blur' },
          { validator: this.checkEmail, trigger: 'change' }
        ],
        nickName: [
          { required: true, message: 'Nickname can not be empty', trigger: 'blur' },
          // { validator: this.checkNickName, triger: 'change' }
        ],
        password: [
          // {required: true, message: 'Password can not be empty', trigger: 'blur' },
          // { validator: this.checkPassword, trigger: 'change' }
        ],
        checkpassword: [
          // {required: true, message: 'Please retype your password', trigger: 'blur' },
          // { validator: this.checkRtypePassword, trigger: 'change' }
        ],
        securityCode: [
          // { required: true, message: 'Security Code can not be empty', trigger: 'change' }
        ],
      }
    }
  },
  created() {
    this.init()
    //获取路径里面token值
    this.showInfo()
  },
  methods: {
    init(){
    this.token = this.$route.query.token
    console.log("token")
    console.log(this.token)
    console.log("token")
    if (this.token) {//判断路径是否有token值
      this.wxLogin()
    }

    },
    submitLogin() {
      loginApi.login(this.member)
        .then(response => {
          this.loginFormVisible = false;
          cookie.set("changliuLab_token", response.data.data.token, { domain: 'localhost' })
          loginApi.getLoginInfo()
            .then(response => {
              cookie.set("changliuLab_member", JSON.stringify(response.data.data.user), { domain: 'localhost' })
              this.showInfo()
            })
            // this.$router.go()
        })
    },
    checkEmail(rule, value, callback) {
      if (!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value))) {
        return callback(new Error('Invalid E-mail address'))
      }
      return callback()

    },
    sendCode(val) {
      if (this.codeText === "Security Code") {
        registerApi.sendCode(val)
          .then(response => {
            this.timeDown();
          })
      }
    },
    // submit registration info
    submitRegistration() {
      console.log(this.registerInfo)
      registerApi.register(this.registerInfo)
        .then(response => {
          this.$message({
            type: 'success',
            message: 'Registration success'
          })
          this.signupFormVisible= false
          this.member.email = this.registerInfo.email
          this.member.password = this.registerInfo.password
          this.login(member)
          this.registerInfo = {}
          this.member = {}
        })

    },
    // time down for email security code
    timeDown() {
      let result = setInterval(() => {
        this.codeText = this.second
        --this.second;
        if (this.second < 1) {
          clearInterval(result);
          this.sending = true;
          this.second = 120;
          this.codeText = "Security Code";
        }
      }, 1000);
    },
    loginDialog() {
      this.loginFormVisible = true
    },
    loginVertify(val) {
      loginApi.login

    },
    signup() {
      this.signupFormVisible = true
    },
    handleSelect(key, keyPath) {
      this.$router.push("/"+key)
    },
    //微信登录显示的方法
    wxLogin() {
      //console.log('************'+this.token)
      //把token值放到cookie里面
      cookie.set('guli_token', this.token, { domain: 'localhost' })
      cookie.set('guli_ucenter', '', { domain: 'localhost' })
      //console.log('====='+cookie.get('guli_token'))
      //调用接口，根据token值获取用户信息
      loginApi.getLoginUserInfo()
        .then(response => {
          this.memberInfo = response.data.data.userInfo
          cookie.set('guli_ucenter', this.loginInfo, { domain: 'localhost' })
        })
    },
    //创建方法，从cookie获取用户信息
    showInfo() {
      //从cookie获取用户信息
      var userStr = cookie.get('changliuLab_member')
      // 把字符串转换json对象(js对象)
      if (userStr) {
        this.loginInfo = JSON.parse(userStr)
      }else{
        this.loginInfo = ''
      }
        console.log("loginInfo")
        console.log(this.loginInfo.email)
    },

    //退出
    logout() {
      //清空cookie值
      cookie.set('changliuLab_token', '', { domain: 'localhost' })
      cookie.set('changliuLab_member', '', { domain: 'localhost' })
      this.showInfo()
      //回到首页面
      // this.$router.go()
    },

  }
};
</script>