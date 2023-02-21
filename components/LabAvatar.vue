<template>
    <div class="relative mr-2">
        <!-- login icon and  -->
        <button class=" relative flex items-center" @click="isOpen = !isOpen">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" stroke="#FFF" stroke-width="30" fill="none"
                viewBox="0 0 600 600">
                <circle cx="300" cy="300" r="265" />
                <circle cx="300" cy="230" r="115" />
                <path d="M106.81863444 481.4a205 205 1 0 1 386.36273112 0" />
            </svg>
            <span class="text-white px-2" v-if="$auth.loggedIn">{{ $auth.user.email }}</span>
        </button>
        <!-- background cover when pop menu  -->
        <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
            class="fixed  inset-0 h-full w-full z-40 bg-black opacity-50 cursor-default">
        </button>
        <!-- menus -->
        <div v-if="isOpen" class="absolute right-2 z-50 bg-green-700 w-20">
            <div v-if="$auth.loggedIn">
            <a @click="changePasswordDialogOpen = true, isOpen = false"
                class=" block px-2 py-1 sm:mt-0 text-white font-semibold rounded hover:bg-green-900">修改密码</a>
            <a @click="logOut"
                class=" block px-2 py-1 sm:mt-0 text-white font-semibold rounded hover:bg-green-900">退出登录</a>

            </div>
            <div v-else>
            <a @click="loginDialogOpen = true, isOpen = false"
                class=" block px-2 py-1 sm:mt-0 text-white font-semibold rounded hover:bg-green-900">登录</a>
            <a @click="registerDialogOpen = true, isOpen = false"
                class=" block px-2 py-1 sm:mt-0 text-white font-semibold rounded hover:bg-green-900">注册</a>

            </div>
        </div>

        <!-- login dialog  -->
        <LabLoginDialog v-model="loginDialogOpen" @loginSuccess="loginSuccess"></LabLoginDialog>
        <!-- reset password dialog -->
        <LabRegisterDialog :show="registerDialogOpen" @signupSuccess="signupSuccess"></LabRegisterDialog>
        <!-- register dialog -->


    </div>
</template>
<script>
import LabLoginDialog from './LabLoginDialog.vue';
import LabRegisterDialog from './LabRegisterDialog.vue';
export default {
    components: { LabLoginDialog ,LabRegisterDialog},
    data() {
        return {
            isLogin: false,
            isOpen: false,
            loginDialogOpen: false,
            registerDialogOpen: false,
            changePasswordDialogOpen: false
        }
    },
    methods: {
        loginSuccess(flag) {
            // console.log("log callback")
            // console.log(flag)
            if (flag) {
                this.loginDialogOpen = false
            } else {
                // this.$message("Email or password error")
            }
        },
        async logOut() {
            try{
                let res = await this.$auth.logout()
            }catch(error){
                console.log(error)
            }
            this.isOpen=false
        },
        signupSuccess(){}


    }

}
</script>