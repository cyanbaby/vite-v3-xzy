<template>
  <footer class="com-footer-wrap">
    <div class="container">
      <ul class="footer-bar clear">
        <li>
          <h5>
            <img src="https://www.xianzhuanxia.com/_nuxt/img/footer-logo.cb453d3.png" alt="logo" title="logo" />
          </h5>
        </li>
        <li>
          <div class="menu-target">
            <div class="desc clear">
              <div class="fl tit">相关链接：</div>
              <div class="fr links">
                <RouterLink to="/aboutus">关于我们
                </RouterLink>
                <RouterLink to="javascript:;">意见反馈
                </RouterLink>
                <RouterLink to="/faq">常见问题
                </RouterLink>
              </div>
            </div>
            <div class="desc clear">
              <div class="fl tit">网站协议：</div>
              <div class="fr links">
                <RouterLink to="/agreement?type=1">用户协议
                </RouterLink>
                <RouterLink to="/agreement?type=2">交易协议
                </RouterLink>
                <RouterLink to="/agreement?type=3">充值协议
                </RouterLink>
                <RouterLink to="/agreement?type=4">代充协议
                </RouterLink>
                <RouterLink to="/agreement?type=5">隐私协议
                </RouterLink>
                <RouterLink to="/agreement?type=6">平台任务协议
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="desc clear">
            <div class="fl tit">工作时间：</div>
            <div class="fr links">每天 08:00-23:00</div>
          </div>
          <div class="desc clear">
            <div class="fl tit">客服电话：</div>
            <div class="fr links">400-888-9259</div>
          </div>
        </li>
        <li class="clear">
          <div title="微信公众号" class="qcode fl">
            <div class="img-wrap">
              <img src="https://www.xianzhuanxia.com/_nuxt/img/wx_public.782e869.jpg" alt="微信公众号" title="微信公众号" />
            </div>
            <p class="name">微信公众号</p>
          </div>
          <div title="微信交流群" class="qcode fl">
            <div class="img-wrap">
              <img src="https://oss.kaquan51.com/setting/applySet/20230222/05bf4fa67ab9499ab3193b022a1350b3.png"
                alt="微信交流群" title="微信交流群" />
            </div>
            <p class="name">微信交流群</p>
          </div>
        </li>
      </ul>
      <div class="provide-list row-flex">
        <RouterLink to="https://beian.miit.gov.cn/" class="item row-flex"><img src="https://www.xianzhuanxia.com/_nuxt/img/img1.a82f2f0.png"
            alt="工信部ICP域名备案" title="工信部ICP域名备案" class="ico" />
          <p title="工信部ICP域名备案" class="txt">
            工信部ICP域名备案
          </p>
        </RouterLink>
        <RouterLink to="http://scjgj.gz.gov.cn/" class="item row-flex"><img src="https://www.xianzhuanxia.com/_nuxt/img/img2.e30925d.png"
            alt="广州市市场监督管理局" title="广州市市场监督管理局" class="ico" />
          <p title="广州市市场监督管理局" class="txt">
            广州市市场监督管理局
          </p>
        </RouterLink>
        <RouterLink to="https://www.12377.cn/" class="item row-flex"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAAAXNSR0IArs4c6QAAAztJREFUaEPtmk9rE1EUxe99GaWKCzeCyyQgSagbFy6EBCbQLvIBdO1SqFhFsYiihaqICm0Rcem+foAuGzqBCi7URbSJQkIXUrC4Cig6mSeJpoQ0Se/7m5CZ2ebOvPmdc9+5M0MQQnxgiNkhgg+r+5HzkfMhVCBq+xCa3kaOnI+cD6EC9tv+4lqskDvnULVev3bmNwBwar1InVV492X5BAbOOwRIU26SA2xz5p8vzk03KPWiNdbg2+BNZx0RspSbbIP/9PPF29O7lHqZGivw4whuZdSNK7hxeFVwL5OYgyaUctXaR5m2PuwcY22vDJ6KzwNjK5zDHgZ8xoQARuB1gXec48B3WQButlKrHOamyO/a4d2n5dN4zNkQGmddqe79d7wXoi3An+ZM9utOWQRwWK1WeFPg+x3AYY8x381+0iOANnjdrT7IMZ0ZoAVeFbwFuplOPEPEW5SW1pUByvA6wDvAm6nkMjK4ThKgtQV831XJACV4neBSAihOAWl4E+C2BZCCb6f6lPPG5EtKKZ18zREuk7aAZAcIw7vL70+ic3xLdo5TYPY7IJN8hQBXKOe0QrDJ+YX8dr1OqZd6ts+vVu4gg8eUBVRfSzcAnFg6sYyIVynrYcCXspXafUqtFLz7ojrPgK9QFuAc3vKYP6vyMcJLJe4Cw4eU9QD4o9zn2j1arcTX239Bd2QLkZ+lLMI5lHjML8gI4KWTDwBhkbIOADR8P8jlv9Q/EOvlPl0LP8ZKCCDmODT8pl/IV3dKVHCptu9c3KQAwo5LgCvBt042IcCgt7oBjko53rmW8KjrvQmdAtgEV3ZeaQv8+DZbXMz/6lzDSyduAuJz4p5Vclyb8zICtCdAF7yNcOsnqnLbd1+UsgV6R5+XiS8AsCc2HdfuPKUDDoCPoNW7Rdbq/DABDoAP+FZnItUHdZUR+N4xOI7g2tJ+kLKtDGBTzlIQ8290Hm9tj7NhWWLM+X6LepnkAgCMJNyMp/0wlcfJcWNp39fxMQi3kTg/jo5bc34N4OipeJxRHmK+1+vBJYDW31CsHFYDzwqRwCIRvIBYE1UaOT9RdgrARM4LiDVRpZHzE2WnAEzkvIBYE1Uaauf/AuxFUVtGJx8yAAAAAElFTkSuQmCC"
            alt="不良信息举报中心" title="不良信息举报中心" class="ico" />
          <p title="不良信息举报中心" class="txt">不良信息举报中心</p>
        </RouterLink>
        <RouterLink to="http://cyberpolice.mps.gov.cn/wfjb/" class="item row-flex">
          <img src="https://www.xianzhuanxia.com/_nuxt/img/img4.8f01b62.png" alt="网络违法犯罪举报中心" title="网络违法犯罪举报中心" class="ico" />
          <p title="网络违法犯罪举报中心" class="txt">
            网络违法犯罪举报中心
          </p>
        </RouterLink>
      </div>
      <p class="copy-right m-b-6">
        Copyright © 2022-2023 广州快猫科技有限公司 版权所有
      </p>
      <p class="copy-right">
        <RouterLink to="https://beian.miit.gov.cn/" class="a">
          ICP备案:粤ICP备2022144236号-4</RouterLink>
        <RouterLink
          to="https://tsm.miit.gov.cn/dxxzsp/xkz/xkzgl/resource/qiyesearch.jsp?num=%25E7%25B2%25A4B2-20230523%2520%2520&amp;type=xuke"
          class="a">增值电信业务经营许可证 粤B2-20230523
          粤公网安备44010602011568号</RouterLink>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
.com-footer-wrap {
  background: #242831;
  height: 390px;
}

.com-footer-wrap .footer-bar {
  box-sizing: border-box;
  padding: 50px 0 30px;
}

.com-footer-wrap .footer-bar li {
  box-sizing: border-box;
  color: #fff;
  float: left;
  font-family: PingFang SC-Regular, PingFang SC;
  font-size: 14px;
  font-weight: 400;
  height: 150px;
  position: relative;
}

.com-footer-wrap .footer-bar li:after {
  background-color: #5c6068;
  content: "";
  height: 150px;
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
}

.com-footer-wrap .footer-bar li:first-child {
  box-sizing: border-box;
  padding: 12px 60px 11px 0;
}

.com-footer-wrap .footer-bar li:first-child img {
  height: 127px;
  width: 82px;
}

.com-footer-wrap .footer-bar li:nth-child(2) {
  box-sizing: border-box;
  padding: 0 72px 0 80px;
  width: 708px;
}

.com-footer-wrap .footer-bar li:nth-child(3) {
  padding: 4px 0 4px 88px;
}

.com-footer-wrap .footer-bar li:nth-child(3):after {
  width: 0;
}

.com-footer-wrap .footer-bar li .menu-target {
  margin-bottom: 20px;
}

.com-footer-wrap .footer-bar li .links {
  line-height: 24px;
}

.com-footer-wrap .footer-bar li .desc {
  align-items: center;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-family: PingFang SC-Regular, PingFang SC;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
}

.com-footer-wrap .footer-bar li .desc .links {
  color: #d1d1d1;
}

.com-footer-wrap .footer-bar li .desc .links:hover {
  color: #fff;
}

.com-footer-wrap .footer-bar li .desc a {
  color: #d1d1d1;
  padding-right: 14px;
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.com-footer-wrap .footer-bar li .desc a:hover {
  color: #fff;
}

.com-footer-wrap .footer-bar li .desc .tit {
  height: auto;
  min-width: 84px;
}

.com-footer-wrap .footer-bar li .qcode {
  cursor: pointer;
  margin-right: 30px;
}

.com-footer-wrap .footer-bar li .qcode:last-child {
  margin-right: 0;
}

.com-footer-wrap .footer-bar li .qcode .img-wrap {
  background: #fff;
  border: 1px solid #707070;
  box-sizing: border-box;
  height: 114px;
  width: 114px;
}

.com-footer-wrap .footer-bar li .qcode .img-wrap img {
  height: 114px;
  width: 114px;
}

.com-footer-wrap .footer-bar li .qcode .name {
  color: #fff;
  font-family: PingFang SC-Regular, PingFang SC;
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  text-align: center;
}

.com-footer-wrap .provide-list {
  box-sizing: border-box;
  justify-content: center;
  padding: 20px 0;
  position: relative;
  display: flex;
}

.com-footer-wrap .provide-list:before {
  background: #5c6068;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.com-footer-wrap .provide-list .item {
  background: #fff;
  border-radius: 6px 6px 6px 6px;
  box-sizing: border-box;
  cursor: pointer;
  height: 60px;
  margin-right: 40px;
  padding: 11px 27px 11px 0;
  width: 150px;
  display: flex;
  align-items: center;
}

.com-footer-wrap .provide-list .item:nth-child(3) {
  padding-right: 39px;
}

.com-footer-wrap .provide-list .item:nth-child(4) {
  padding-right: 11px;
}

.com-footer-wrap .provide-list .item .ico {
  height: 60px;
  width: 63px;
}

.com-footer-wrap .provide-list .item .txt {
  color: #666;
  font-family: PingFang SC-Medium, PingFang SC;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

.com-footer-wrap .copy-right {
  color: #929498;
  font-family: PingFang SC-Regular, PingFang SC;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
}

.com-footer-wrap .copy-right .a {
  color: #929498;
}

.com-footer-wrap .copy-right .a:hover {
  color: #fff;
}

.com-footer-wrap .m-b-6 {
  margin-bottom: 6px;
}

</style>