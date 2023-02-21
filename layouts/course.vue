<template>
    <div class="relative">
        <div class="flex bg-green-700 items-center fixed top-0 z-20 w-full ">

            <div class="pl-2 text-xl font-extrabold bg-green-700 text-white italic">Changliu Lab</div>
            <div class="flex justify-between grow items-center">
            <LabMenu></LabMenu>

            <LabAvatar></LabAvatar>
            </div>
        </div>
        <nuxt />
    </div>

</template>
<script>
import LabAvatar from '../components/LabAvatar.vue';
import LabMenu from '../components/LabMenu.vue';
export default {
    components: { LabAvatar, LabMenu }
}
</script>