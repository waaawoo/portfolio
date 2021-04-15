<template>
  <div class="contact">
    <h2 class="contact-title"><i class="fas fa-envelope fa-lg"></i> Contact me</h2>
    <p class="contact-text">~お問い合わせ~</p>
    <div>
      <div class="twitter-img">
        <img src="~/assets/web/twitterimg.png" alt="">
      </div>
      <div class="contact-text">
        <p class="email">E-mail: waaawooo37ta2@gmail.com</p>
        <p class="twitter"><i class="fab fa-twitter"></i>Twitter: @output55460830</p>
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
  .contact{
    margin: 150px 0;
    text-align: center;
    &-title{
      font-size: 4rem;
      margin-bottom: 30px;
    }
    &-text{
      font-size: 2rem;
      margin-bottom: 30px;
    }
  }
  .fa-twitter{
    color: #339AF0;
  }
  .twitter-img{
    margin: 0 auto;
    width: 150px;
    img{
      width: 100%;
    }
  }
</style>
