
<template>
  <div class="login-infos">
    <div v-if="!isLogin" class="login-infos__default user-no-login fl" data-v-2ab9bd10=""><span
        data-v-2ab9bd10="">您好，欢迎访问，</span> <a href="/login.html" data-v-2ab9bd10="" class="">我要登录</a> <a
        href="/register.html" data-v-2ab9bd10="" class="">我要注册</a></div>
    <div v-else class="login-infos__done">
      <div data-v-2ab9bd10="" class="user-info fl"><img data-v-2ab9bd10=""
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/QAicByIiaNqEYUbVlMtmAEhzCSebrkACiaxsdqLceHYXJmlyYgXg6Np7X8Wup9YNVDvBrzDNxgCanlnpz01W46NkfrzibkickwdmlGSE0p3F8b58/132"
          alt="用户头像" title="用户头像" class="user-img"> <span data-v-2ab9bd10="" class="nickname">跟随系统</span>
      </div>
      <div data-v-2ab9bd10="" class="msg-num-box fl">
        <div data-v-2ab9bd10="" class="img-wrap"><img data-v-2ab9bd10=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAFFQTFRFAAAAr6+/p6+/qrW/p7O/qbO/qbG/qrK9qLG/qLK9qbO/qbG9qbK9qLG9qLK9qbG+qbK9qLK+qLK+qbK+qbG+qLK+qLG+qLK9qbG+qbG9qbK+ArZuLQAAABp0Uk5TABAgMEBQX2BvcH+Aj5CfoK+wv8DP0N/g7/A7lccXAAAAsUlEQVQ4y+3V2Q6CMBCFYdqCCMUVxfF//wf1wp1Ol8SEK8/1F9KTmZaqWiCm71clzgmwLYAHAJo8BACfY/XxDmWwyR57XpF1osfEZ6KNrECRPDGPXskHDtEaGQkhGwW2ikOiE5mnDqGo0MdGlz+k0+EYDvkPU7DTIQHcRaArWTJl2MNELKcmt4vaTroU/Cpu63h+fPPeV9GkYfN0l9wnzw+YfffMCHBtC45Ze9/ZBX4BN4HgPDucryUMAAAAAElFTkSuQmCC"
            alt="消息中心" title="消息中心" class="ico"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// TODO Cyan: pinia or cookie
// const isLogin = ref(false)
const isLogin = ref(true)
</script>

<style lang="scss">
.login-infos {
  &__default {
    color: #666;
    font-family: PingFang SC-Regular, PingFang SC;
    font-size: 12px;
    font-weight: 400;

    span {
      padding-right: 10px;
    }

    a {
      color: #666;
      padding-right: 10px;
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }
  }

  &__done {
    .user-info {
      margin-right: 10px;
      display: flex;
      width: 72px;
      align-items: center;
      justify-content: space-between;

      img {
        background: #fff;
        border-radius: 14px 14px 14px 14px;
        height: 20px;
        width: 20px;
      }

      span {
        color: #666;
        font-family: PingFang SC-Regular, PingFang SC;
        font-size: 12px;
        font-weight: 400;
      }
    }

    .msg-num-box {
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      height: 36px;
      justify-content: center;
      width: 80px;

      &:hover {
        background-color: #fff;
      }

      .img-wrap {
        height: 20px;
        position: relative;
        width: 20px;

        .ico {
          display: block;
          height: 100%;
          width: 100%;
        }
      }
    }
  }


}
</style>