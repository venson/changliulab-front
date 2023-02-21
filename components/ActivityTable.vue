
<template>
    <div class="m-4 ">
      <table class="table-auto border-collapse w-full">
        <tbody>
          <tr v-for="(activity, index) in value" :key="index" class="mt-4">
            <td class="border-b p-4">
              <div >
                <nuxt-link class="text-green-800 text-base hover:text-green-600 " :to="`/activity/${activity.id}`">
                {{ activity.title }}

                </nuxt-link>
                <!-- <a :href="`/activity/${activity.id}`">
                {{ activity.title }}

                </a> -->
              </div>
            <div class="text-gray-500 text-sm">
              {{ activity.autherMemberName }}
            </div>
            <div class="text-gray-500 text-sm">
              {{ activity.activityDate}}
            </div>
          </td>

          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: 'ActivityTable',
        props: ['value'],
    }
</script>

<style lang="scss" scoped>

</style>