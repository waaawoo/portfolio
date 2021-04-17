<template>
  <div class="works-section">
    <h2 class="works-title">My portfolio</h2>
    <div class="works-area">

      <div class="works-content" @click="show('furimaApp')">
        <p class="lang">Ruby on Rails</p>
        <div class="img-effect">
          <img src="~/assets/web/furimaApp.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('protoSpace')">
        <p class="lang">Ruby on Rails</p>
        <div class="img-effect">
          <img src="~/assets/web/protospase.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('todoApp')">
        <p class="lang">Vue.js</p>
        <div class="img-effect">
          <img src="~/assets/web/vueTodo.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('kuriyosi')">
        <p class="lang">Ruby on Rails</p>
        <div class="img-effect">
          <img src="~/assets/web/kuriyosi.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('portfolio')">
        <p class="lang">Nuxt.js</p>
        <div class="img-effect">
          <img src="~/assets/web/portfolio.png" alt="portfolio">
        </div>
      </div>
    </div>

    <!-- モーダル部分 -->
    <client-only>
      <modal name="modal-content" width="80%" height="auto">
        <p class="close-btn" @click="hide">
          <i class="fas fa-times"></i>
        </p>
        <component :is="contentTitle" />
      </modal>
    </client-only>
  </div>
</template>

<script>
import FurimaApp from "~/components/works/FurimaApp.vue";
import ProtoSpace from "~/components/works/ProtoSpace.vue";
import todoApp from "~/components/works/todoApp.vue";
import kuriyosi from "~/components/works/kurisyosi.vue";
import portfolio from "~/components/works/portfolio.vue";

export default {
  data(){
    return{
      contentTitle: null,
    }
  },
  methods:{
    // モーダル表示用
    show(contentTitle) {
      this.contentTitle = contentTitle;
      this.$modal.show("modal-content");
    },
    hide() {
      this.$modal.hide("modal-content");
      this.contentTitle = null;
    }
  },

  components: {
    FurimaApp,
    ProtoSpace,
    todoApp,
    kuriyosi,
    portfolio,
  }

}
</script>

<style lang="scss">
  .works-section{
    margin:150px auto 50px;
    width: 60%;
  }
  .works-title{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 100px;
  }
  .works-area{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .works-content{
      widows: 300px;
      box-shadow: 1px 1px 3px #333;
      overflow: hidden;
      margin-bottom: 30px;
      cursor: pointer;

      .img-effect{
        position: relative;
        width: 300px;
        height: 180px;
        // アニメーション完了までの時間
        transition-duration: 0.3s;
        &:hover{
          // ホバー時にサイズが大きくなる
          transform: scale(1.2);
          &:before{
            opacity: 1;
            transform: scale(1.2);
            // ぼかし
            filter: blur(0);
          }
        }
        &:fefore{
          content: "view more" ;
          position: absolute;
          widows: 300;
          height: 180px;
          background: radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8));
          transition-duration: .3s;
          opacity: 0;
          display: flex;
          color: #fff;
          font-size: 22px;
          text-shadow: 0 0 2px #000;
          filter: blur(4px);
        }
        img{
          width: 100%;
        }
      }
    }
  }
  .close-btn{
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 3rem;
    color: #fff;
    text-align: center;
    background-color: #333;
    cursor: pointer;
  }
  .lang{
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
  }

  .btn{
    cursor: pointer;
    transition: all .3s;
    background: #fff;
    border: 1px solid #333;
    &:hover{
      background: #333;
      color: #fff;
      transform: rotateX(360deg)
    }
  }
</style>
