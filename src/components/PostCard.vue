<template>
  <div class="post-card">
    <header>
      <span>{{ post.category_no }}</span>
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
    post: Object
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