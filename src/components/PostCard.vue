<template>
  <div class="post-card border-outline">
    <header>
      <span>{{ category.name }}</span>
      <span>{{ post.no }}</span>
    </header>
    <div>
      <span>{{ post.category_no }} | {{ post.updated_at }}</span>
      <h3>{{ post.title }}</h3>
      <p>{{ post.contents }}</p>
    </div>
  </div>
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
    }
  }
}
</script>

<style scoped lang="less">
.post-card{
  margin-top: 20px;
  height: 200px;
  background-color: #ffff00;
}
</style>