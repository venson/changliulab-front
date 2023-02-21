<template>

    <div>
    <v-md-preview :text="markdown"></v-md-preview>
    </div>
</template>
<script>
export default{
    props:['markdown']
}

</script>