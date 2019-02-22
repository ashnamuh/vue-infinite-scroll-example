<template>
  <div class="signup-modal modal"
    v-if="visible" @click.self="closeModal">
    <div class="signup-modal-dialog modal-dialog">
      <header class="signup-modal-header">
        <a class="close pointer-cursor" @click.self="closeModal">×</a>
        <h4>회원가입</h4>
      </header>
      <div class="signup-modal-body">
        <div class="signup-modal-body-description border-outline">
          지금 꿈꾸던 기업에 재직 중인 현직자와<br><span class="text-red">익명</span>으로 대화할 수 있습니다.
        </div>
        <div class="signup-modal-body-signups">
          <div class="facebook-login border-outline"><a>페이스북 계정으로 회원가입</a></div>
          <div class="google-login border-outline"><a>구글 계정으로 회원가입</a></div>
          <div class="naver-login border-outline"><a>네이버 계정으로 회원가입</a></div>
          <div class="kakao-login border-outline"><a>카카오 계정으로 회원가입</a></div>
        </div>
      </div>
      <div class="signup-modal-footer">
        <span class="pointer-cursor" @click.self="closeModal">나중에 하기</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupModal',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped lang="less">
.signup-modal {
  .signup-modal-dialog {
    background: #fff;
  }
  .signup-modal-header {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.29;
    padding: 16px 16px 0 25px;
    position: relative;
    .close {
      float: right;
      font-size: 24px;
    }
    h4 {
      text-align: center;
    }
  }
  .signup-modal-body {
    padding: 25px;
    .signup-modal-body-description {
      padding: 20px;
    }
    .signup-modal-body-signups {
      margin-top: 30px;
      div {
        font-weight: 600;
        font-size: 16px;
        padding: 15px;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
  .signup-modal-footer {
    text-align: center;
    padding-bottom: 15px;
    span {
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>