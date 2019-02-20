<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li class="notice" v-for="notice in notices" :key="notice.no">
        title: {{ notice.title }}
        no: {{ notice.no }}
      </li>
    </ul>
    <div v-infinite-scroll="loadMore"
      infinite-scroll-distance="50"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    notices () {
      return this.$store.getters['notice/getNotices']()
    },
    accumulatedLength () {
      return this.$store.getters['notice/getAccumulatedLength']()
    }
  },
  async created () {
  },
  methods: {
    async loadMore () {
      await this.$store.dispatch('notice/fetch', {order: 'desc', category: 1, page: this.page})
      this.page++
    }
  }
}
</script>

<style scoped lang="less">
.notice {
  margin-top: 20px;
  height: 200px;
  background-color: #ffff00;
}
</style>
