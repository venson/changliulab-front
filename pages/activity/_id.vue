<template>
<div>

<div class="title">
  {{ activity.title}}
</div>
    <div>
        <v-md-preview :text="activity.markdown"></v-md-preview>
    </div>


</div>
</template>
<script>
export default{
    data(){
        return {
            activity: {
            },
        }
    },
    created(){
        if(this.$route.params && this.$route.params.id){
            this.activity.id=this.$route.params.id
            this.getActivity()
        }
    },
    methods: {
        getActivity(){
            activityApi.getActivity(this.activity.id)
            .then(response => {
                this.activity= response.data.data.activity
                this.activity.markdown=response.data.data.markdown.publishedMd
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.active{
  background: #bdbdbd;
}
.show {
  display: block;
}
/* .pos-rel{
  position: relative;
} */

.formStar {
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
  sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 12px;
  color: #fb0404;
  padding: 0px;
}
.formLabel {
  font-size: 12px;
  color: #333333;
  font-family: "MicrosoftYaHeiLight", "微软雅黑 Light", "微软雅黑", sans-serif;
  font-weight: 100;
  line-height: 20px;
}
.m-top-10{
  margin-top: -10;
}
.scholar-title{
  font-size: 16px;
  padding: 8px 0;
  color: #660099;
}
.title{
  font-size:30px;
  font-weight: bolder;
  text-align:center
}

</style>