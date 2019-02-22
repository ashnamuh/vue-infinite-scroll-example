<template>
  <div class="signup-bottom-popup border-outline" v-if="visible">
    <div class="signup-bottom-popup-body">
      <div class="signup-bottom-popup-description">
        지금 꿈꾸던 기업에 재직 중인 현직자와 <span class="text-red">익명</span>으로 대화할 수 있습니다.
      </div>
      <div class="signup-bottom-popup-buttons-desktop">
        <div class="signup-button border-outline"><a @click.self="closeModal">SNS계정으로 빠른 회원가입</a></div>또는
        <div class="login-button border-outline"><a @click.self="closeModal">로그인</a></div>
      </div>
      <div class="signup-bottom-popup-buttons-mobile">
        <div class="signup-button border-outline"><a @click.self="closeModal">회원가입</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupBottomPopup',
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
.signup-bottom-popup {
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  background-color: #ffffff;
  opacity: 0.9;
  height: 150px;
  .signup-bottom-popup-body {
    padding: 15px 30px;
    .signup-bottom-popup-description {
      text-align: center;
    }
    .signup-bottom-popup-buttons-desktop {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;

      @media (max-width: 480px) {
        display: none;
      }
      div {
        width: 180px;
        text-align: center;
        padding: 10px 5px;
        a {
          font-size: 14px;
        }
        &:first-child {
          margin-right: 15px;
        }
        &:last-child {
          margin-left: 15px;
        }
      }
    }
    .signup-bottom-popup-buttons-mobile {
      margin: 10px auto;
      @media (min-width: 481px) {
        display: none;
      }
      div {
        text-align: center;
        padding: 10px 5px;
      }
    }
  }
}
</style>