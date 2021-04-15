<template>
  <div class="home">
    <div class="home-text">
      <h1>
        KAZUYA MINATANI
      </h1>
      <p class="home-description">
        エンジニアを目指す私のポートフォリオサイトです。<br>
        皆様に是非、私のことを知っていただきたいと思い、このサイトを作成しました。<br>
        少しでも見ていただけたら幸いです。
      </p>
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
  .home{
    margin: 150px auto;
    text-align: center;
    height: 50vh;
    background-image: url("~@/assets/web/TOP.jpg");
    background-position: 50%;
    background-size: cover;
    background-color:rgba(255,255,255,0.3);
    background-blend-mode:lighten;
    .home-text{
      width: 50%;
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-flow: column;
      margin: 0 auto;

      .home-description{
        margin-top: 10px;
      }
    }
  }
</style>
