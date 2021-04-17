<template>
  <div class="sp-header">
    <i class="fas fa-times" v-if="$store.state.spClick" @click="$store.commit('changFlg')"></i>
    <ul class="sp-nav" @click="$store.commit('changFlg')">
      <li><nuxt-link active-class="link-active" to="/" exact>Home</nuxt-link></li>
      <li><nuxt-link active-class="link-active" to="/works">Works</nuxt-link></li>
      <li class="last-li"><nuxt-link active-class="link-active" to="/contact">Contact</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="scss">
  .sp-header{
    display: inline;
    position: fixed;
    top: 0;
    width: 95%;
    z-index: 98;

    .fa-times{
      top: 0px;
      display: block;
      text-align: right;
      margin: 30px 50px 10px 0;
      font-size: 2em;
    }
    .sp-nav{
      text-align: center;
      padding: 0;
      li{
        transition: all 0.5s;
        list-style: none;
        padding: 15px;
        border: 1px solid #fff;
        border-bottom: none;
        font-weight: bold;
        background: #333;
        &:hover{
          transition: all 0.5s;
          background: #fff;
          border: 1px solid #333;
          a{
            color: #333;
          }
        }
        a{
          text-decoration: none;
          color: #fff;
        }
      }
      .last-li{
        border-bottom: 1px solid #fff;
      }
    }
  }
</style>
