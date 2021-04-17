<template>
  <div>
    <About />
    <AboutMe />
    <Skill />
  </div>
</template>

<script>
  import About from "~/components/home/about.vue";
  import AboutMe from "~/components/home/aboutMe.vue";
  import Skill from "~/components/home/skill.vue";

export default {

  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  },
  components: {
    About,
    Skill,
    AboutMe,
  }
};
</script>

<style lang="scss" scoped>

</style>
