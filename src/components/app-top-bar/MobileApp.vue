<template>
  <div class="mobile-app app-top-bar__item">
    <el-dropdown popper-class="mobile-app-dropdown">
      <span class="el-dropdown-link">
        手机APP<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <dl class="nav-child cus-scroll-bar phone" data-v-2ab9bd10="">
          <div class="code-wrap" data-v-2ab9bd10=""><img
              src="https://oss.xianzhuanxia.com/setting/applySet/20230630/9ff4faaf2c63468fb82dac8e8a6ccf21.png" alt="二维码"
              title="二维码" class="code-img" data-v-2ab9bd10=""></div>
          <p class="download" data-v-2ab9bd10="">下载闲赚侠APP</p>
          <p class="sub-tip" data-v-2ab9bd10="">安卓、IOS手机均可下载</p>
        </dl>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss">
.mobile-app-dropdown {
  .phone {

    border-radius: 0 0 10px 10px;
    padding: 20px 0 16px;
    text-align: center;
    width: 180px;

    .code-wrap {
      background: #fff;
      border: 1px solid rgba(169, 178, 190, .6);
      height: 140px;
      margin: 0 auto;
      width: 140px;

      .code-img {
        height: 100%;
        width: 100%;
      }
    }

    .download {
      color: var(--down-active);
      font-family: PingFang SC-Regular, PingFang SC;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 10px;
    }

    .sub-tip {
      color: #333;
      font-family: PingFang SC-Regular, PingFang SC;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: 8px;
    }
  }

}
</style>