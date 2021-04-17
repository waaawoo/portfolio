<template>
  <div class="sp-header">
    <i
      class="fas fa-times"
      v-if="$store.state.spClick"
      @click="$store.commit('changFlg')"
    ></i>
    <ul class="sp-nav" @click="$store.commit('changFlg')">
      <nuxt-link active-class="link-active" to="/" exact
        ><li>Home</li></nuxt-link
      >
      <nuxt-link active-class="link-active" to="/works"
        ><li>Works</li></nuxt-link
      >
      <nuxt-link active-class="link-active" to="/contact"
        ><li>Contact</li></nuxt-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.sp-header {
  display: inline;
  position: fixed;
  top: 0;
  width: 95%;
  z-index: 98;

  .fa-times {
    top: 0px;
    display: block;
    text-align: right;
    margin: 30px 50px 10px 0;
    font-size: 2em;
  }
  .sp-nav {
    text-align: center;
    padding: 100px 0 300px 0;
    background: rgba($color: #333, $alpha: 0.6);
    a {
      text-decoration: none;
      color: #fff;
      li {
        transition: all 0.5s;
        list-style: none;
        padding: 15px;
        margin-top: 10%;
        border: 1px solid #fff;
        font-weight: bold;
        background: #333;
        }
    }
  }
}
</style>
