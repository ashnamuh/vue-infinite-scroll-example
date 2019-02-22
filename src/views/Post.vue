<template>
  <div class="post-detail">
    <SignupModal
      :visible.sync="visibleSignupModal">
    </SignupModal>
    <div class="post-detail-wrapper border-outline">
      <header>
        <span>글번호: {{ post.no }}</span>
      </header>
      <div class="post-body">
        <span>{{ post.email }} | {{ updatedAt }}</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.contents }}</p>
      </div>
    </div>
    <div class="post-detail-replies">
      <span>댓글 {{ replies.length }}</span>
      <PostReply v-for="reply in replies" :key="reply.no" :reply="reply"></PostReply>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostReply from '@/components/PostReply.vue'
import SignupModal from '@/components/SignupModal.vue'

export default {
  name: 'Post',
  components: {
    PostReply,
    SignupModal
  },
  data () {
    return {
      post: {},
      replies: [],
      visibleSignupModal: false,
    }
  },
  computed: {
    updatedAt () {
      return this.$moment(this.post.updated_at).format('YYYY년 MM월 DD일')
    }
  },
  async created () {
    const { article, replies } = await this.getPost()
    this.post = article
    this.replies = replies
  },
  mounted () {
    this.visibleSignupModal = true
  },
  methods: {
    async getPost () {
      const postNo = this.$route.params.id
      const detailRequestUrl = `http://comento.cafe24.com/detail.php?req_no=${postNo}`
      const { data } = await this.axios.get(detailRequestUrl)
      return data.detail
    }
  }
}
</script>

<style scoped lang="less">
.post-detail {
  padding: 20px;
  .post-detail-wrapper {
    margin: 0px auto;
    max-width: 600px;
    min-width: 150px;
    @media (max-width: 480px) {
    }
    header {
      background-color: #00c854;
      color: #ffffff;
      font-weight: 600;
      padding: 5px 10px;
    }
    .post-body {
      padding: 5px 10px;
    }
  }
  .post-detail-replies {
    margin: 20px auto;
    max-width: 600px;
    min-width: 150px;
  }
}
</style>
