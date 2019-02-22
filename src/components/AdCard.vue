<template>
  <div class="ad-card border-outline">
    <header>
      <span>Sponsored</span>
    </header>
    <div class="ad-card-body">
      <img :alt="ad.img" :src="adImageUrl">
      <div class="ad-card-body-text">
        <h3 class="ellipsis">{{ ad.title }}</h3>
        <p class="ellipsis">{{ ad.contents }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdCard',
  props: {
    ad: {
      type: Object,
      require: true
    }
  },
  computed: {
    adImageUrl () {
      return `https://comento.cafe24.com/public/images/${this.ad.img}`
    }
  }
}
</script>

<style scoped lang="less">
.ad-card {
  margin-top: 20px;
  header {
    background-color: #f4f5f7;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    span {
      margin: 5px 0;
      padding: 0 10px;
    }
  }
  .ad-card-body {
    padding: 10px;
    display: flex;

    @media (max-width: 480px) {
      align-items: baseline;
      flex-direction: column;
    }
    img {
      width: 100%;
      height: 100%;
      min-width: 150px;
      max-width: 350px;
      @media (max-width: 480px) {
        max-width: 450px;
      }
    }
    .ad-card-body-text {
      margin-left: 10px;
      padding-top: 10px;
      display: inline-block;
      h3 {
        -webkit-line-clamp: 1;
        @media (max-width: 480px) {
          -webkit-line-clamp: 2;
        }
      }
      p {
        margin: 0;
        -webkit-line-clamp: 4;
        @media (max-width: 480px) {
          -webkit-line-clamp: 2;
        }
      }
    }
  }
}
</style>