<template>
    <div class="relative text-sm">
        <div v-show="show"
            class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 z-50 bg-white shadow-xl p-2 border-4 border-solid border-green-300 flex flex-col">

            <!-- background cover when pop menu  -->
            <div class="text-2xl">注册</div>

            <div class="mt-4">
                <ValidationObserver v-slot="{valid,handleSubmit}">
                    <form @submit.prevent="handleSubmit(register)">
                        <!-- Email input  -->
                        <div class="mb-2 relative">
                            <ValidationProvider v-slot="{ errors, valid }" name="email" rules="required|email">
                                <input type="email" autocomplete="false"
                                    class="relative w-full px-4 py-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                    v-model="registerInfo.email" placeholder="Email address" />
                                <div class="text-red-500 h-3">{{ errors[0] }}</div>
                                <CountDownTimer class="absolute right-2 top-1" :time="10" :click-able="valid">
                                </CountDownTimer>
                            </ValidationProvider>
                        </div>
                        <div class="mb-2">
                            <input type="text" autocomplete="false"
                                class=" block w-full px-4 py-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                v-model="registerInfo.username" placeholder="Username" />
                        </div>
                        <!-- Password input -->
                        <div class="mb-2">
                            <ValidationObserver >
                            <ValidationProvider name="password" v-slot="{ errors, valid }" :bails="false"
                                rules="required|upperCase|lowerCase|number|length8">
                                <input type="password" autocomplete="false"
                                    class="mb-2 block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                    v-model="registerInfo.password" placeholder="Password" />
                                <div class="text-xs text-red-500">
                                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                                </div>
                            </ValidationProvider>
                            <ValidationProvider name="confirm" rules="required|password:@password" v-slot="{ errors }">
                                <input type="password" autocomplete="false" 
                                    class=" block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                v-model="passwordConfirm" placeholder="Confirm">
                                <div class="text-xs text-red-500">{{errors[0]}}</div>
                                <!-- <span>{{ errors[0] }}</span> -->
                            </ValidationProvider>

                            </ValidationObserver>

                        </div>
                        <!-- security code input -->
                        <div class="mb-2">
                            <ValidationProvider name="code" rules="required" v-slot="{errors}">
                            <input type="password" autocomplete="false"
                                class=" block w-full px-4 py-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                v-model="registerInfo.securityCode" placeholder="Security Code" />
                                <div class="text-xs text-red-500">{{errors[0]}}</div>

                            </ValidationProvider>
                        </div>

                        <div class="text-center lg:text-left">
                            <button type="submit"
                                :disabled="!valid"
                                :class="valid?'bg-green-600':'bg-gray-200'"
                                class="inline-block px-7 py-2  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                                Sign up
                            </button>
                        </div>
                    </form>

                </ValidationObserver>
                <div v-show="emailDuplicateError" class="text-red-600"> username or password error!</div>
            </div>

        </div>

        <button v-if="show" tabindex="-1" class="fixed  inset-0 h-full w-full z-40 bg-black opacity-50 cursor-default">
        </button>
    </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import CountDownTimer from './CountDownTimer.vue'
export default {
    components: { CountDownTimer, ValidationProvider, ValidationObserver },
    name: 'LabRegisterDialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            registerInfo: {
                username: '',
                password: '',
                email: ' '
            },
            passwordConfirm:'',
            emailDuplicateError: false
        }
    },
    methods: {
        p() {
            console.log(this.errors)
        },
        async register() {
            let res = await this.$userApi.register(this.registerInfo)

            if (res.data.code = 20000) {
                console.log("signed up")
                this.$emit('signupSuccess', true)
            } else {
                this.emailDuplicateError = true
                this.$emit('signupSuccess', false)
            }

        }
    },

}
</script>