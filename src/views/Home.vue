<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li class="notice" v-for="notice in contents" :key="notice.no">
        title: {{ notice.title }}
        no: {{ notice.no }}
      </li>
    </ul>
    <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="isLoading"
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
      page: 1,
      isLoading: false,
    }
  },
  computed: {
    contents () {
      return this.$store.getters['getContents']()
    },
  },
  created () {
  },
  methods: {
    async loadMore () {
      console.log('loadMore')
      this.isLoading = true
      await this.$store.dispatch('fetchPosts', {order: 'desc', category: 1, page: this.page})
      this.isLoading = false
      this.page++
    },
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
