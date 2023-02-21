<template>
    <div class="relative">
        <div v-show="show"
            class="fixed top-1/2 left-1/2 -mt-48 -ml-40 h-96 w-80 z-50 bg-white shadow-xl p-2 border-4 border-solid border-green-300 flex flex-col">

            <!-- background cover when pop menu  -->
            <div class="text-2xl">重置密码</div>

            <div class="mt-4">
                <!-- Email input  -->
                <div class="mb-6">
                    <input type="text"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                        v-model="loginInfo.username" placeholder="Email address" />
                </div>
                <!-- Password input -->
                <div class="mb-6">
                    <input type="password"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                        v-model="loginInfo.password" placeholder="Password" />
                </div>
                <div v-show="usernamePasswordError" class="text-red-600"> username or password error!</div>
                <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                        <input type="checkbox"
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck2" />
                    </div>
                </div>
                <div class="text-center lg:text-left">
                    <button type="submit"
                        class="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        @click="login()" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Reset Password
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                        Don't have an account?
                        <a href="#!"
                            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Register</a>
                    </p>
                </div>
            </div>

        </div>

        <button v-if="show" tabindex="-1" class="fixed  inset-0 h-full w-full z-40 bg-black opacity-50 cursor-default">
        </button>
    </div>
</template>
<script>
export default {
    name: 'LabLoginDialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            loginInfo: {
                username: '',
                password: '',
            },
            usernamePasswordError: false
        }
    },
    methods: {
        async resetPassword() {
            try {
                let res = await this.$auth.loginWith('local', { data: this.loginInfo })
                console.log(this.$auth)
            } catch (error) {
                console.log(error)

            }
            if (this.$auth.loggedIn) {
                console.log("logged in")
                this.$emit('loginSuccess', true)
            } else {
                this.usernamePasswordError = true
                this.$emit('loginSuccess', false)
            }

        }
    },

}
</script>