<template>
  <div>
    <div class="furimaApp">
      <div class="furima-title"><h2>ProtoSpace</h2></div>
      <div class="furima-content">
        <div class="img">
          <hr>
          <img src="~/assets/web/protospase.png" alt="parotospace">
          <hr>
        </div>
        <div class="furima-btn">
          <button class="btn"><a href="https://github.com/waaawoo/protospace-34760" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a></button>
          <button class="btn"><a href="https://protospace-34760.herokuapp.com/" target="_blank" rel="noopener noreferrer">FurimaApp</a></button>
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
  .furimaApp{
    width: 90%;
    margin: 0 auto;

    .furima-title{
      text-align: center;
      font-size: 2rem;
    }
  }
  .img{
    margin: 50px auto;
    width: 80%;
    height: auto;
    img{
      width: 100%;
    }
  }
  .furima-btn{
    text-align: center;
    margin-bottom: 20px;
    .btn{
      width: 30%;
      height: 30px;
      a{
        text-decoration: none;
        color: #333;
        font-weight: bold;
      }
    }
  }
</style>
