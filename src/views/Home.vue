<template>
  <div class="home">
    <CategoryModal
      :categories="categories"
      :visible.sync="visibleCategoryModal"
      :selectedCategory.sync="selectedCategory"
      @resetData="resetData">
    </CategoryModal>
    <header>
      <span class="filter-category pointer-cursor" @click="toggleClickButton">필터</span>
      <div class="filter-order">
        <span class="pointer-cursor" @click="resetOrder('asc')" :class="{active: order === 'asc' }">오름차순</span>
        <span class="pointer-cursor" @click="resetOrder('desc')" :class="{active: order === 'desc' }">내림차순</span>
      </div>
    </header>
    <div class="contents">
      <div v-for="post in contents" :key="post.no + post.title">
        <PostCard v-if="!post.isAd" :post="post" :categories="categories"></PostCard>
        <AdCard v-if="post.isAd" :ad="post"></AdCard>
      </div>
    </div>
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
      order: this.$route.query.order || 'desc',
      visibleCategoryModal: false,
      visibleSignupModal: false,
      selectedCategory: this.$route.query.category || '1'
    }
  },
  computed: {
    contents () {
      return this.$store.getters['getContents']()
    },
  },
  async created () {
    const { data } = await this.axios.get(`https://comento.cafe24.com/category.php`)
    this.categories = data.list
  },
  methods: {
    async loadMore () {
      this.toggleLoading()
      await this.fetchPosts()
      this.toggleLoading()
      this.addPage()
    },
    async resetData () {
      await this.$store.dispatch('resetData')
      this.resetPage()
      await this.fetchPosts()
      this.addPage()
    },
    async resetOrder (order) {
      this.order = order
      this.$router.push({ query: {...this.$route.query, order: this.order } })
      await this.resetData()
    },
    async fetchPosts () {
      await this.$store.dispatch('fetchPosts', {order: this.order, category: this.selectedCategory, page: this.page})
    },
    toggleClickButton () {
      this.visibleCategoryModal = !this.visibleCategoryModal
    },
    toggleLoading () {
      this.isLoading = !this.isLoading
    },
    resetPage () {
      this.page = 1
    },
    addPage () {
      this.page++
    }
  }
}
</script>

<style scoped lang="less">
.home {
  padding: 20px;
  header {
    display: flex;
    justify-content: space-between;
    .filter-order {
      span {
        margin-left: 10px;
      }
      .active {
        color: #00c854;
      }
    }
  }
}
</style>
