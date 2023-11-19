<template>
  <RouterLink to="/notice" class="new-notice-wrap row-flex">
    <div class="left row-flex">
      <img src="https://www.xianzhuanxia.com/_nuxt/img/notice.19927d2.png" alt="公告" title="公告" class="ico" />
      网站公告
    </div>
    <div class="center row-flex">
      <div class="con">
        <div title="【闲赚侠】京东e卡销卡费率调整" class="title one-line-esplise">
          【闲赚侠】京东e卡销卡费率调整
        </div>
        <div class="info one-line-esplise">
          <p style="white-space: normal">尊敬的用户： 您好，京东e卡（有卡号）/京东e卡（单卡密）100-5000面值费率调整为94.5%-95.5%..</p>

          <!-- TODO Cyan: 滚动加载 -->
          <!-- <p style="white-space: normal">
            &nbsp; &nbsp; &nbsp;
            您好，京东e卡（有卡号）/京东e卡（单卡密）100-5000面值费率调整为94.5%-95.5%，欢迎提交订单！！<br />&nbsp;
            &nbsp; &nbsp; 感谢您一直以来对我们闲赚侠平台的支持与理解！！
          </p>
          <p style="white-space: normal; text-align: right">闲赚侠</p>
          <p style="white-space: normal; text-align: right">2023年11月16日</p>
          <p><br /></p> -->
        </div>
      </div>
      <div class="time row-flex">2023 11-16</div>
    </div>
    <span class="right">更多公告&gt;&gt;</span>
  </RouterLink>
</template>


<style lang="scss">
.new-notice-wrap {
  background: #fff;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, .08);
  height: 74px;
  line-height: 74px;
  margin-top: -37px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;

  .left {
    color: #333;
    font-family: PingFang SC-Regular, PingFang SC;
    font-size: 23px;
    font-weight: 400;
    position: relative;
    width: 207px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2CAYAAAACnyOhAAAAAXNSR0IArs4c6QAAAOZJREFUKFNj/P/B/z8DFDD+f++HxHnri8R544PEeeWNxHnphcR57onM8ZgPNxrGANGM/x+770dY+tAVSc8DFyTOPWckzl1kzm0nJJlbjkicmw73cVh61TYBYekVWyQ9l2yQOBeskTjnrZA4Zy2ROGcskDinzJE4xy0UEPYcN0DiHDNBUnbEGIlz2AiJcxCZc8AQSWafARJnrz4yR68eh7d3aCMC5P92bSQ9W7WQOFs0kTibNJA4G9WROOvVkDjrVBHRiBrBa5QRUf9/pRKSnuWKSJxlyJwlCkgyi+WROAvlkDgLZOEcADV/kQz9csgxAAAAAElFTkSuQmCC) no-repeat;
      content: "";
      height: 54px;
      position: absolute;
      right: 0;
      top: 10px;
      width: 3px;
    }

    .ico {
      height: 48px;
      width: 48px;
      margin-right: 16px;
    }
  }

  .center {
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;

    .con {
      flex: 1;
      overflow: hidden;
      padding: 9px 12px 11px;
    }

    .title {
      color: #333;
      font-family: PingFang SC-Regular, PingFang SC;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    }

    .info {
      color: #666;
      font-family: PingFang SC-Regular, PingFang SC;
      font-size: 16px;
      font-weight: 400;
      height: 22px;
      line-height: 22px;
      margin-top: 10px;
      line-height: 22px;

    }



  }

  .time {
    border-left: 1px dashed #d5d8db;
    border-right: 1px dashed #d5d8db;
    box-sizing: border-box;
    color: #666;
    font-family: PingFang SC-Regular, PingFang SC;
    font-size: 14px;
    font-weight: 400;
    height: 54px;
    line-height: 20px;
    padding: 0 17px;
    width: 78px;
    display: flex;
    align-items: center;
  }

  .right {
    box-sizing: border-box;
    color: #666;
    cursor: pointer;
    font-family: PingFang SC-Regular, PingFang SC;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    width: 121px;
  }
}

</style>