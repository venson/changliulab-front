<template>
  <div>
    <MethodologyTable :value="methodologyPage.records" />
  </div>
</template>
<script>
import MethodologyTable from '../../components/MethodologyTable.vue';
export default {
    asyncData({ $methodologyApi, query }) {
        const page = query.page ? query.page : 1;
        return $methodologyApi.getPageMethodology(page, 10).then((response) => {
          console.log(response)
            return {
                methodologyPage: response.data,
            };
        });
    },
    components: { MethodologyTable }
};
</script>
