<template>
  <div>
    <Homesection />
    <WorksSection />
  </div>
</template>

<script>
  import Homesection from  "~/components/home/about.vue";
  import WorksSection from "~/pages/works.vue"

export default {

  components:{
    WorksSection,
    Homesection,
  }
}
</script>

<style lang="scss">
*{
    font-family: 'Josefin Slab', serif;
}

</style>
