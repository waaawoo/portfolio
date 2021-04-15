<template>
  <div class="works-section">
    <h2 class="works-title">Works</h2>
    <div class="works-area">
      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

      <div class="works-content" @click="show('MkPortfolio')">
        <div class="img-effect">
          <img src="" alt="portfolio">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
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
