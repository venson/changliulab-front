<template>
  <div class="flex flex-col h-screen justify-between">
    <!-- <LayoutHeader backgroundimg="/img/forest-3.jpg" /> -->
    <LayoutHeader backgroundimg="/svg/hero-gradient.svg" />

    <nuxt class="mb-auto" />
    <InfoFooter />
  </div>
</template>
<script>
import cookie from "js-cookie";
import LayoutHeader from "../components/LayoutHeader.vue";
import InfoFooter from "../components/InfoFooter.vue";

export default {
  components: { LayoutHeader, InfoFooter },
  data() {
    return {
      navMenu: {
        index: "main",
        title: "主页",
      },
      params: "",
      token: "",
      memberInfo: "",
      registerInfo: {
        email: "",
        nickName: "",
        password: "",
        securityCode: "",
      },
      member: {
        email: "",
        password: "",
      },
      memberList: null,
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: "",
      },
      loginFormVisible: false,
      signupFormVisible: false,
      sending: true,
      second: 120,
      codeText: "Security Code",
      rules: {
        email: [
          {
            required: true,
            message: "E-mail address can not be empty",
            trigger: "blur",
          },
          { validator: this.checkEmail, trigger: "change" },
        ],
        nickName: [
          {
            required: true,
            message: "Nickname can not be empty",
            trigger: "blur",
          },
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
      },
    };
  },
  created() {
    // this.init();
    //获取路径里面token值
    // this.showInfo();
  },
  methods: {
    init() {
      this.token = this.$route.query.token;
      console.log("token");
      console.log(this.token);
      console.log("token");
      if (this.token) {
        //判断路径是否有token值
        this.wxLogin();
      }
    },
    submitLogin() {
      this.$loginApi.login(this.member).then((response) => {
        this.loginFormVisible = false;
        cookie.set("changliuLab_token", response.data.data.token, {
          domain: "localhost",
        });
        this.$loginApi.getLoginInfo().then((response) => {
          cookie.set(
            "changliuLab_member",
            JSON.stringify(response.data.data.user),
            { domain: "localhost" }
          );
          this.showInfo();
        });
        // this.$router.go()
      });
    },
    checkEmail(rule, value, callback) {
      if (
        !/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)
      ) {
        return callback(new Error("Invalid E-mail address"));
      }
      return callback();
    },
    sendCode(val) {
      if (this.codeText === "Security Code") {
        registerApi.sendCode(val).then((response) => {
          this.timeDown();
        });
      }
    },
    // submit registration info
    submitRegistration() {
      console.log(this.registerInfo);
      registerApi.register(this.registerInfo).then((response) => {
        this.$message({
          type: "success",
          message: "Registration success",
        });
        this.signupFormVisible = false;
        this.member.email = this.registerInfo.email;
        this.member.password = this.registerInfo.password;
        this.login(member);
        this.registerInfo = {};
        this.member = {};
      });
    },
    // time down for email security code
    timeDown() {
      let result = setInterval(() => {
        this.codeText = this.second;
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
      this.loginFormVisible = true;
    },
    loginVertify(val) {
      loginApi.login;
    },
    signup() {
      this.signupFormVisible = true;
    },
    handleSelect(key, keyPath) {
      this.$router.push("/" + key);
    },
    //微信登录显示的方法
    wxLogin() {
      //console.log('************'+this.token)
      //把token值放到cookie里面
      cookie.set("guli_token", this.token, { domain: "localhost" });
      cookie.set("guli_ucenter", "", { domain: "localhost" });
      //console.log('====='+cookie.get('guli_token'))
      //调用接口，根据token值获取用户信息
      loginApi.getLoginUserInfo().then((response) => {
        this.memberInfo = response.data.data.userInfo;
        cookie.set("guli_ucenter", this.loginInfo, { domain: "localhost" });
      });
    },
    //创建方法，从cookie获取用户信息
    showInfo() {
      //从cookie获取用户信息
      var userStr = cookie.get("changliuLab_member");
      // 把字符串转换json对象(js对象)
      if (userStr) {
        this.loginInfo = JSON.parse(userStr);
      } else {
        this.loginInfo = "";
      }
      // console.log("loginInfo");
      // console.log(this.loginInfo.email);
    },
    //退出
    logout() {
      //清空cookie值
      cookie.set("changliuLab_token", "", { domain: "localhost" });
      cookie.set("changliuLab_member", "", { domain: "localhost" });
      this.showInfo();
      //回到首页面
      // this.$router.go()
    },
  },
};
</script>
