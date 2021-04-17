<template>
  <div class="skill">
    <div class="skill-title">
      <h2>skill</h2>
    </div>

    <div class="card-wrapper">

      <div class="card-positin">
        <div class="card">
          <div class="skill-category"><i class="fab fa-html5" style="color: #F4772C;"></i></div>
          <div class="skill-category-text">
            <div class="skill-category-title">HTML</div>
            <div class="skill-category-level"><p class="rete rete2-5"></p></div>
          </div>
        </div>

        <div class="card">
          <div class="skill-category"><i class="fab fa-css3-alt" style="color: #146A8F;"></i></div>
          <div class="skill-category-text">
            <div class="skill-category-title">CSS</div>
            <div class="skill-category-level"><p class="rete rete2"></p></div>
          </div>
        </div>

        <div class="card">
          <div class="skill-category"><i class="fab fa-js" style="color: #F0DB50;"></i></div>
          <div class="skill-category-text">
            <div class="skill-category-title">JS</div>
            <div class="skill-category-level"><p class="rete rete2"></p></div>
          </div>
        </div>

      </div>

      <div class="card-positin">
        <div class="card">
          <div class="skill-category"><i class="fab fa-java"></i></div>
          <div class="skill-category-text">
            <div class="skill-category-title">Java</div>
            <div class="skill-category-level"><p class="rete rete2"></p></div>
          </div>
        </div>

        <div class="card">
          <div class="skill-category"><img src="~/assets/web/svg/ruby.svg" alt=""></div>
          <div class="skill-category-text">
            <div class="skill-category-title">Ruby</div>
            <div class="skill-category-level"><p class="rete rete3"></p></div>
          </div>
        </div>

        <div class="card">
          <div class="skill-category"><i class="fab fa-php" style="color: #7477AE;"></i></div>
          <div class="skill-category-text">
            <div class="skill-category-title">PHP</div>
            <div class="skill-category-level"><p class="rete rete1"></p></div>
          </div>
        </div>
      </div>

      <div class="card-positin">
        <div class="card">
          <div class="skill-category"><img src="~/assets/web/svg/rails.svg" alt=""></div>
          <div class="skill-category-text">
            <div class="skill-category-title">Ruby on Rails</div>
            <div class="skill-category-level"><p class="rete rete3"></p></div>
          </div>
        </div>

        <div class="card">
          <div class="skill-category"><img src="~/assets/web/svg/vue.svg" alt=""></div>
          <div class="skill-category-text">
            <div class="skill-category-title">Vue.js</div>
            <div class="skill-category-level"><p class="rete rete2"></p></div>
          </div>
        </div>

        <div class="card">
          <div class="skill-category"><img src="~/assets/web/svg/nuxt-icon.svg" alt=""></div>
          <div class="skill-category-text">
            <div class="skill-category-title">Nuxt.js</div>
            <div class="skill-category-level"><p class="rete rete2"></p></div>
          </div>
        </div>
      </div>

      <div class="card-positin">
        <div class="card">
          <div class="skill-category"><img src="~/assets/web/svg/mysql.svg" alt=""></div>
          <div class="skill-category-text">
            <div class="skill-category-title">MySql</div>
            <div class="skill-category-level"><p class="rete rete2"></p></div>
          </div>
        </div>
      </div>

    </div>
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

<style lang="scss" scoped>
  .skill{
    text-align: center;
    font-weight: bold;
    width: 60%;
    margin: 0 auto;
  }
  .skill-title{
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .card-positin{
    @media screen and(min-width:800px){
      display: flex;
      justify-content: space-around;
      margin-top: 50px;
    }
  }
  .card{
    @media screen and(min-width: 800px) {
      display: flex;
    }
    font-size: 2em;

    .skill-category-text{
      margin-top: 10px;
    }
    .skill-category{
      font-size: 100px;
      padding: 10px;
      img{
        width: 100px;
        height: 100px;
      }
    }
  }

  // レート
  .rete{
    position: relative;
    display: inline-block;
  }
  .rete:before,
  .rete:after{
    content: "★★★★★";
  }
  .rete:before{
    color: #ccc;
  }
  .rete:after{
    position: absolute;
    left: 0;
    top: 0;
    color: #ffa500;
    overflow: hidden;
  }
  .rete.rete0:after{
    width: 0;
  }
  .rete.rete1:after{
    width: 1em;
  }
  .rete.rete2:after{
    width: 2em;
  }
  .rete.rete3:after{
    width: 3em;
  }
  .rete.rete4:after{
    width: 4em;
  }
  .rete.rete5:after{
    width: 5em;
  }
  .rete.rete1-5:after{
    width: 1.5em;
  }
  .rete.rete2-5:after{
    width: 2.5em;
  }
  .rete.rete3-5:after{
    width: 3.5em;
  }
  .rete.rete4-5:after{
    width: 4.5em;
  }
</style>
