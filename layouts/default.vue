<template>
  <div class="in-wrap">
    <el-container class="container">
      <el-header class="page-header">
          <!-- <span class="header-image"></span> -->
        <h1 class="lab-title">Welcome to Chang Liu LAB</h1>
        <h2 class="lab-subtitle">Trees cell wall formation and wall signal Group</h2>
        <div class="el-menu">
        <el-menu class="main-menu" background-color="#318651" default-active="1" mode="horizontal" @select="handleSelect">
          <el-menu-item index="">主页</el-menu-item>
          <el-menu-item index="research">研究方向</el-menu-item>
          <el-menu-item index="publication">发表论文</el-menu-item>
          <el-menu-item index="groupmember">组内成员</el-menu-item>
          <el-menu-item index="activites">近期活动</el-menu-item>
          <el-menu-item index="methdology">研究方法</el-menu-item>
          <el-menu-item index="course">公开课程</el-menu-item>
          <!-- <a href="/login" title="登录" class="ml5 vam h-r-login">
            <span>登录</span>
          </a>
          |
          <a href="/login" title="注册" class="ml5 vam h-r-login">
            <span>注册</span>
          </a> -->
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

      <el-footer class="page-footer">
        <h5>Copyright© Chang Liu Lab 2022-2042, All Rights Reserved  Ver.1.0.0.0  Design:Venson</h5>
        <h5><i class="el-icon-location-information"></i>: 中国 黑龙江哈尔滨市香坊区和兴路26号 CHINA &nbsp;&nbsp;</h5>
        <h5>
        <i class="el-icon-phone-outline"></i>: 86-21-54924161 &nbsp;&nbsp; 
        <i class="el-icon-postcard"></i>: <a href="mailto:junhuishen@cemps.ac.cn">junhuishen@cemps.ac.cn</a></h5>
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

export default {
  data() {
    return {
      navMenu: {
        index: "main",
        title: "主页"
      },
      token: '',
      loginInfo: {
        id: '',
        age: '',
        avatar: '',
        mobile: '',
        nickname: '',
        sex: ''
      }
    }
  },
  created() {
    //获取路径里面token值
    this.token = this.$route.query.token
    console.log(this.token)
    if (this.token) {//判断路径是否有token值
      this.wxLogin()
    }

    this.showInfo()
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push("/"+key)
      console.log(key, keyPath);
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
          // console.log('################'+response.data.data.userInfo)
          this.loginInfo = response.data.data.userInfo
          cookie.set('guli_ucenter', this.loginInfo, { domain: 'localhost' })
        })
    },
    //创建方法，从cookie获取用户信息
    showInfo() {
      //从cookie获取用户信息
      var userStr = cookie.get('guli_ucenter')
      // 把字符串转换json对象(js对象)
      if (userStr) {
        this.loginInfo = JSON.parse(userStr)
      }
    },

    //退出
    logout() {
      //清空cookie值
      cookie.set('guli_token', '', { domain: 'localhost' })
      cookie.set('guli_ucenter', '', { domain: 'localhost' })
      //回到首页面
      window.location.href = "/";
    }

  }
};
</script>