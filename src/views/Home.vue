<template>
  <div class="home">
    <CategoryModal
      :categories="categories"
      :visible.sync="visibleCategoryModal"
      :selectedCategory.sync="selectedCategory"
      @resetData="resetData"
      >
    </CategoryModal>
    category: {{selectedCategory}}
    <button @click="handleClickButton">필터</button>
      <img alt="Vue logo" src="../assets/logo_comento.png">
      <span @click="resetOrder('asc')" :class="{active: order === 'asc' }">오름차순</span>
    <PostCard v-for="post in contents" :key="post.no" :post="post"></PostCard>
    <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="isLoading"
      infinite-scroll-distance="50">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdCard from '@/components/AdCard.vue'
import CategoryModal from '@/components/CategoryModal.vue'
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'home',
  components: {
    AdCard,
    CategoryModal,
    PostCard
  },
  data () {
    return {
      page: 1,
      isLoading: false,
      categories: [],
      visibleCategoryModal: false,
      selectedCategory: this.$route.query.category || '1'
    }
  },
  computed: {
    contents () {
      return this.$store.getters['getContents']()
    },
  },
  async created () {
    const { data } = await this.axios.get(`http://comento.cafe24.com/category.php`)
    this.categories = data.list
  },
  methods: {
    async loadMore () {
      console.log('loadMore')
      this.isLoading = true
      await this.$store.dispatch('fetchPosts', {order: 'desc', category: this.selectedCategory, page: this.page})
      this.isLoading = false
      this.page++
    },
    handleClickButton () {
      this.visibleCategoryModal = !this.visibleCategoryModal
    },
    async resetData () {
      await this.$store.dispatch('resetData')
      this.page = 1
      await this.$store.dispatch('fetchPosts', {order: 'desc', category: this.selectedCategory, page: this.page})
      this.page++
    }
  }
}
</script>

<style scoped lang="less">
.post {
  margin-top: 20px;
  height: 200px;
  background-color: #ffff00;
}
</style>
