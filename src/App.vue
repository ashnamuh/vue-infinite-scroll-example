<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
.modal {
  background-color: rgba(0,0,0,.7);
  top: 0; right: 0; bottom: 0; left: 0;
  position: fixed;
  overflow: auto;
  margin:  auto;
  .modal-dialog {
    margin: 30px auto;
    @media (min-width: 480px) {
      width: 480px;
    }
    @media (max-width: 480px) {
      margin: 30px 25px;
    }
  }
}
.text-red {
  color: #fa5252;
}
.border-outline {
  border: 2px solid #dee2e6;
}
.facebook-login {
  background-color: #3b5998;
  color: #ffffff;
}
.google-login {
  background-color: #ea4335;
  color: #ffffff;
}
.naver-login {
  background-color: #00bd39;
  color: #ffffff;
}
.kakao-login {
  background-color: #ffdc00;
  color: #ffffff;
}
.signup-button {
  background-color: #00c854;
  color: #ffffff;
}
.login-button {
  background-color: #dcdcdc;
  color: #000000;
}
.pointer-cursor {
  cursor: pointer;
}
.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}
body, ul, li, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
