<template>
  <div>
    <TopSection />
    <WorksSection />
  </div>
</template>

<script>
  import TopSection from  "~/pages/top.vue";
  import WorksSection from "~/pages/works.vue"

export default {

  components:{
    WorksSection,
    TopSection,
  }
}
</script>

<style lang="scss">
*{
    font-family: 'Josefin Slab', serif;
}

</style>
