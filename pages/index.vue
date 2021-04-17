<template>
  <div>
    <TopSection />
    <WorksSection />
    <Contact  />
  </div>
</template>

<script>
  import TopSection from  "~/pages/top.vue";
  import WorksSection from "~/pages/works.vue"
  import Contact from "~/pages/contact.vue";

export default {

  components:{
    WorksSection,
    TopSection,
    Contact,
  }
}
</script>

<style lang="scss">
*{
    font-family: 'Josefin Slab', serif;
}

</style>
