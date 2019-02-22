<template>
  <router-link class="post-card border-outline" :to="`posts/${post.no}`" tag="div">
    <header>
      <span v-if="category">카테고리: {{ category.name }}</span>
      <span>글번호: {{ post.no }}</span>
    </header>
    <div class="post-card-body">
      <span>{{ post.email }} | {{ updatedAt }}</span>
      <h3 class="ellipsis">{{ post.title }}</h3>
      <div class="post-contents-wrapper">
        <p class="ellipsis">{{ post.contents }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      typle: Object,
      require: true,
    },
    categories: {
      type: Array,
      require: true,
    },
  },
  computed: {
    category () {
      return this.categories.find(o => o.no === this.post.category_no)
    },
    updatedAt () {
      return this.$moment(this.post.updated_at).format('YYYY년 MM월 DD일')
    }
  }
}
</script>

<style scoped lang="less">
.post-card{
  margin-top: 20px;
  header {
    background-color: #00c854;
    color: #ffffff;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    span {
      margin: 5px 0;
      padding: 0 10px;
    }
  }
  .post-card-body {
    padding: 5px 10px;
    span {
      font-size: 14px;
      color: #666666;
      font-weight: 600px;
    }
    h3 {
      margin: 0;
      -webkit-line-clamp: 1;
    }
    .post-contents-wrapper {
      height: 90px;
      p {
        margin: 0;
        -webkit-line-clamp: 4;
      }
    }
  }
}
</style>