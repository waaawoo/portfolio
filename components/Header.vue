<template>
  <div>
    <header class="header" :class="headerFixed">
      <div class="container">
        <h1 class="main-title">MK portfolio</h1>

        <!-- レスポンシブ用 -->
        <nav v-if="windowWidth > 968">
          <!-- PC用 -->
          <ul class="gnav">
            <li>
              <nuxt-link :class="gnavFixed" active-class="link-active" to="/" exact>Home</nuxt-link>
            </li>
            <li>
              <nuxt-link :class="gnavFixed" active-class="link-active" to="/works">Works</nuxt-link>
            </li>
            <li>
              <nuxt-link :class="gnavFixed" active-class="link-active" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </nav>

        <!-- SP用 -->
        <div v-else class="sp-nav-btn" @click="clickNav">
          <i class="fas fa-times" v-if="spNavFlag"></i>
          <i class="fas fa-bars" v-else></i>
        </div>

      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ["spNavFlag"],
  data() {
    return {
      windowWidth: "",
      headerFixed: null,
      gnavFixed: null
    };
  },
  // DOMが作られた後実行される
  mounted() {
    // pageオープン時のwindowサイズを見ている
    this.windowWidth = window.innerWidth;
  },
  methods: {
    // クリック時反転
    clickNav(){
      this.$emit("clickSpNav")
    }

  },
};
</script>

<style lang="scss" scoped>
  .header{
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0 0 2px #333;
    position: fixed;
    width: 100%;
    z-index: 98;

    .container{
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .main-title{
        font-size: 4rem;
      }

      .gnav{
        display: flex;
        justify-content: space-between;

        & li{
          list-style: none;
          & a{
            text-decoration: none;
            color: #333;
            opacity: .8;
            font-size: 1.2rem;
            font-weight: bold;
          }
          & a:hover{
          border-bottom: 2px slid black;
          transition: 0.2s;
          opacity: 1;
          color: black;
          }
          & a:hover.gnav-fixed{
            border-bottom-color: #fff;
            opacity: 1;
            color: black;
          }
        }

        & li:not(:last-of-type){
          margin-right: 20px;
        }

      }
    }

    .link-active.gnav-fixed{
      border-bottom: 2px solid #fff;
    }

    .link-active{
      border-bottom: 2px solid black;
    }
  }
</style>
