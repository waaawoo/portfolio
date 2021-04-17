<template>
  <div>
    <div class="aboutMe">
      <h2 class="aboutMe-title">about Me</h2>

      <div class="aboutMe-content">
        <div class="aboutMe-img">
          <img src="~/assets/web/myimg.png" alt="">
        </div>
        <div class="aboutMe-state">
          <p>maen: kazuya minatani</p>
          <hr>
          <p>Birthday: 1990/06/29</p>
          <hr>
          <p>Strengths: 継続力</p>
          <hr>
          <p>weakness: 大型犬</p>
          <hr>
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
.aboutMe{
    margin: 15px auto;
    text-align: center;
    margin-bottom: 50px;
    width: 60%;
    > p{
      margin-bottom: 3px;
    }
  }
  .aboutMe-title{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .aboutMe-content{
    @media screen and(min-width : 768px){
      display: flex;
      justify-content: space-around;
      align-items: center;
    }


    .aboutMe-img{
      width: 300px;
      img{
        width: 100%;
      }
    }

    .aboutMe-state{
      width: 40%;
      font-size: 2rem;
      text-align: left;

    }
  }
</style>
