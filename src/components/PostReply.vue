<template>
  <div class="post-reply border-outline">
    <div class="post-reply-header">
      <span class="user-email">{{ reply.email }}</span>
      <span class="updatedAt">{{ updatedAt }}</span>
    </div>
    <div class="post-reply-body">
      <p >{{ reply.contents }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    reply: {
      typle: Object,
      require: true,
    },
  },
  computed: {
    updatedAt () {
      return this.$moment(this.reply.updated_at).format('YYYY년 MM월 DD일')
    }
  }
}
</script>

<style scoped lang="less">
.post-reply {
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  .post-reply-header {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    .user-email {
      font-size: 14px;
      color: #00c854;
      font-weight: 800px;
    }
    .updatedAt {
      font-size: 12px;
      color: #666666;
      font-weight: 600px;
    }
  }
}
</style>