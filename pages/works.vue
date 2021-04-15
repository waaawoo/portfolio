<template>
  <div class="works-section">
    <h2 class="works-title">Works</h2>
    <div class="works-area">

      <div class="works-content" @click="show('furimaApp')">
        <div class="img-effect">
          <img src="~/assets/web/furimaApp.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('protospase')">
        <div class="img-effect">
          <img src="~/assets/web/protospase.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('vueTodo')">
        <div class="img-effect">
          <img src="~/assets/web/vueTodo.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('kuriyosi')">
        <div class="img-effect">
          <img src="~/assets/web/kuriyosi.png" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('portfolio')">
        <div class="img-effect">
          <img src="~/assets/web/portfolio.png" alt="portfolio">
        </div>
      </div>
    </div>

    <!-- モーダル部分 -->
    <client-only>
      <modal name="modal-content" width="80%" height="auto" :scrolladle="treu">
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

export default {
  data(){
    return{
      contentTitle: null,
    }
  },
  methods:{
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
  }

}
</script>

<style lang="scss">
  .works-section{
    margin:250px auto 50px;
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
          transform: scale(1.1);
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

</style>
