<template>
  <div>
    <header class="header" :class="headerFixed" v-if="!$store.state.spClick">
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
        <div v-else class="sp-nav-btn" @click="$store.commit('changFlg')">
          <i class="fas fa-bars" v-if="!$store.state.spClick"></i>
        </div>
      </div>
    </header>
    <template v-if="$store.state.spClick">
      <Spnav />
    </template>
  </div>
</template>

<script>
import Spnav from "~/components/Spnav.vue"
export default {
  data() {
    return {
      windowWidth: "",
      headerHeight: "",
      headerFixed: null,
      gnavFixed: null,
    };
  },
  // DOMが作られた後実行される
  mounted() {
    // pageオープン時のwindowサイズを見ている
    this.windowWidth = window.innerWidth;
    // スクロール管理 $refs=headerHeightへ現在のいちを取得
    // this.headerHeight = this.$refs.header.clientHeight;
    // window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
  },

  components:{
    Spnav,
  }
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
    top: 0;
    background-color: #fff;
    .container{
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      @media screen and(min-width : 768px){
        .main-title{
          font-size: 4rem;
        }
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
    .fa-bars{
      font-size: 2em;
    }
  }
</style>
