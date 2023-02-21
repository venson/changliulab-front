<template>
    <div class="m-4 ">
      <table class="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th class="border-b">Title</th>
            <th class="border-b">Year</th>
            <th class="border-b">Cited By</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(scholar, index) in scholars" :key="index" class="mt-4">
            <td class="border-b p-4">
              <div >
                <!-- <a :href="`/scholar/${scholar.id}`">
                {{ scholar.title }}

                </a> -->
                <nuxt-link class="text-green-800 text-base hover:text-green-600 " :to="`/scholar/${scholar.id}`">
                {{ scholar.title }}

                </nuxt-link>
              </div>
            <div class="text-gray-500 text-sm">

              {{ scholar.authors }}
            </div>
            <div class="text-gray-500 text-sm">
              {{ scholar.journal}} {{ scholar.volume}} ({{ scholar.issue}}), {{ scholar.pages }}, {{ scholar.year }}
            </div>
          </td>
            <td class="border-b text-center w-32">{{ scholar.year }}</td>
            <td class="border-b text-center w-28">{{ scholar.totalCitations}}</td>

          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: 'ScholarTable',
        props: ['scholars'],
    }
</script>

<style lang="scss" scoped>

</style>