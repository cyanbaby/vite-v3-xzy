<template>
  <div class="website-navigation app-top-bar__item">
    <el-dropdown popper-class="website-navigation-dropdown">
      <span class="el-dropdown-link">
        网址导航<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <dl class="nav-child cus-scroll-bar website" data-v-2ab9bd10="">
          <dd class="fl website-wrap" data-v-2ab9bd10="">
            <p data-v-2ab9bd10="">交易导航</p>
            <div class="website-item" data-v-2ab9bd10=""><a href="/buy/100.html" target="_self" data-v-2ab9bd10=""
                class="">
                卡券直销
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/sell/100.html" target="_self" data-v-2ab9bd10=""
                class="">
                卡券回收
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/discounts/100.html" target="_self" data-v-2ab9bd10=""
                class="">
                官方快充
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/cardrecharge.html" target="_self" data-v-2ab9bd10=""
                class="">
                卡券直充
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/chargesending/100.html" target="_self"
                data-v-2ab9bd10="" class="">
                代充放单
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/chargerecive/100.html" target="_self"
                data-v-2ab9bd10="" class="">
                代充接单
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/taskmoney.html" target="_self" data-v-2ab9bd10=""
                class="">
                平台任务
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/tasksending.html" target="_self" data-v-2ab9bd10=""
                class="">
                我要放单
              </a></div>
          </dd>
          <dd class="fl website-wrap" data-v-2ab9bd10="">
            <p data-v-2ab9bd10="">功能导航</p>
            <div class="website-item" data-v-2ab9bd10=""><a href="javascript:;" data-v-2ab9bd10="">个人中心</a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/forget" target="_self" data-v-2ab9bd10="" class="">
                找回账号
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="javascript:;" data-v-2ab9bd10="">邀请好友</a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="javascript:;" data-v-2ab9bd10="">意见反馈</a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="javascript:;" data-v-2ab9bd10="">联系客服</a></div>
          </dd>
          <dd class="fl website-wrap" data-v-2ab9bd10="">
            <p data-v-2ab9bd10="">网站协议</p>
            <div class="website-item" data-v-2ab9bd10=""><a href="/agreement?type=1" target="_blank" data-v-2ab9bd10=""
                class="">
                用户协议
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/agreement?type=2" target="_blank" data-v-2ab9bd10=""
                class="">
                交易协议
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/agreement?type=3" target="_blank" data-v-2ab9bd10=""
                class="">
                充值协议
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/agreement?type=4" target="_blank" data-v-2ab9bd10=""
                class="">
                代充协议
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/agreement?type=5" target="_blank" data-v-2ab9bd10=""
                class="">
                隐私协议
              </a></div>
            <div class="website-item" data-v-2ab9bd10=""><a href="/agreement?type=6" target="_blank" data-v-2ab9bd10=""
                class="">
                平台任务协议
              </a></div>
          </dd>
        </dl>
      </template>
    </el-dropdown>
  </div>
</template>
  
<script>
export default {
  name: 'WebsiteNavigation',
  // 组件逻辑
}
</script>
  
<style lang="scss">
.website-navigation-dropdown {
  .el-scrollbar {
    width: 348px;

    .el-scrollbar__view {
      display: inline-block;
    }
  }

  .nav-child {
    background: #fff;
    // box-shadow: 0 3px 12px 1px rgba(0, 0, 0, .1);
    box-sizing: border-box;

    // padding: 12px 0 13px 20px;
    display: inline-block;

  }

  .website {
    padding: 20px 0;

    &-wrap {
      box-sizing: border-box;
      font-family: PingFang SC-Medium, PingFang SC;
      font-size: 14px;
      line-height: 16px;
      position: relative;
      text-align: center;
      width: 116px;

      &:after {
        background: #b1b1b1;
        content: "";
        display: block;
        height: 221px;
        position: absolute;
        right: 0;
        top: 0;
        transform: scaleX(.6);
        width: 1px;
      }

      p {
        line-height: 16px;
        text-align: center;
        color: #222;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        height: 20px;
        margin-bottom: 4px;
      }

      .website-item {
        color: #666;
        font-size: 12px;
        font-weight: 400;
        line-height: 32px;

        &:hover {
          color: var(--link-active);

        }
      }
    }
  }
}</style>