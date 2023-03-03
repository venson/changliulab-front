<template>
    <div class="flex flex-row" v-if="value && value.length >0">
        <div class="flex items-center justify-center" v-for="(member, index) in value" :key="index">
            <nuxt-link :to="{path:`/groupmember/${member.id}`}" >
                <div class="flex p-4 items-center justify-center">
                            <nuxt-img 
                            class="rounded-full mr-2" 
                            :class="index===0? 'border-green-500 w-10 h-10 border-4 border-solid':'w-7 h-7'" 
                            :src="member.avatar"></nuxt-img>
                            <span>{{member.name}}</span>
                </div>
            </nuxt-link>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'ResearchMember',
        props:['value']
        
    }
</script>

<style lang="scss" scoped>

</style>