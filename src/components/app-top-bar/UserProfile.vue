<template>
  <div class="user-profile app-top-bar__item">
    <el-dropdown popper-class="user-profile-dropdown">
      <span class="el-dropdown-link">
        个人中心<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <dl class="nav-child cus-scroll-bar" data-v-2ab9bd10="">
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">交易订单</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/trade/buycard" class="sitem" data-v-2ab9bd10="">
                直销订单
              </a><a href="/user/trade/pickup" class="sitem" data-v-2ab9bd10="">
                提货订单
              </a><a href="/user/trade/sellcard" class="sitem" data-v-2ab9bd10="">
                回收订单
              </a><a href="/user/disccharge/fast" class="sitem" data-v-2ab9bd10="">
                快充订单
              </a><a href="/user/disccharge/card" class="sitem" data-v-2ab9bd10="">
                直充订单
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">代充订单</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/subrecharge/send" class="sitem"
                data-v-2ab9bd10="">
                放单订单
              </a><a href="/user/subrecharge/accept" class="sitem" data-v-2ab9bd10="">
                接单订单
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">平台任务</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/task/childaco" class="sitem" data-v-2ab9bd10="">
                子账号
              </a><a href="/user/task/send" class="sitem" data-v-2ab9bd10="">
                放单订单
              </a><a href="/user/task/list" class="sitem" data-v-2ab9bd10="">
                做单订单
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">组合支付</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/grpay/card" class="sitem" data-v-2ab9bd10="">
                组合支付
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">资金管理</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/recharge" class="sitem" data-v-2ab9bd10="">
                充值
              </a><a href="/user/funds/detail" class="sitem" data-v-2ab9bd10="">
                资金明细
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">提现管理</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/withdraw" class="sitem" data-v-2ab9bd10="">
                申请提现
              </a><a href="/user/withdraw/account/alipay" class="sitem" data-v-2ab9bd10="">
                提现账号
              </a><a href="/user/withdraw/record" class="sitem" data-v-2ab9bd10="">
                提现记录
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">资料管理</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/phone" class="sitem" data-v-2ab9bd10="">
                修改手机
              </a><a href="/user/pwd" class="sitem" data-v-2ab9bd10="">
                登录密码
              </a><a href="/user/tradepwd" class="sitem" data-v-2ab9bd10="">
                交易密码
              </a><a href="/user/wx" class="sitem" data-v-2ab9bd10="">
                修改微信
              </a><a href="/user/logoff" class="sitem" data-v-2ab9bd10="">
                注销账号
              </a><a href="/user/apply" class="sitem" data-v-2ab9bd10="">
                买卡申请记录
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">数据管理</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/dataset/export" class="sitem" data-v-2ab9bd10="">
                导出记录
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">通知设置</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/notice/wechat" class="sitem" data-v-2ab9bd10="">
                微信通知
              </a><a href="/user/notice/sms" class="sitem" data-v-2ab9bd10="">
                短信通知
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">分享反馈</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/sharefeed/invite" class="sitem"
                data-v-2ab9bd10="">
                邀请好友
              </a><a href="/user/sharefeed/feedback" class="sitem" data-v-2ab9bd10="">
                意见反馈
              </a><a href="/user/sharefeed/feedrecord" class="sitem" data-v-2ab9bd10="">
                反馈记录
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""><span class="child-tit fl" data-v-2ab9bd10="">商务合作</span>
            <div class="link-item fl" data-v-2ab9bd10=""><a href="/user/busicooperate/consult" class="sitem"
                data-v-2ab9bd10="">
                合作咨询
              </a><a href="/user/busicooperate/applyapi" class="sitem" data-v-2ab9bd10="">
                申请API
              </a></div>
          </dd>
          <dd class="child-dd clear" data-v-2ab9bd10=""></dd> <button class="login-out btn" data-v-2ab9bd10="">
            退出登录
          </button>
        </dl>
      </template>
    </el-dropdown>
  </div>
</template>

  
<style lang="scss" scoped>

.user-profile-dropdown {
  // width: 540px;
  .nav-child {
    background: #fff;
    // box-shadow: 0 3px 12px 1px rgba(0, 0, 0, .1);
    box-sizing: border-box;

    // display: none;
    padding: 12px 0 13px 20px;
    // position: absolute;
    // right: 0;
    // width: 540px;
    // z-index: 100;

    .child-dd {
      margin-inline-start: 0px;
      color: #666;
      font-family: PingFang SC-Regular, PingFang SC;
      font-size: 12px;
      font-weight: 400;
      line-height: 30px;
      text-align: center;

      .child-tit {
        float: left;
        color: #333;
        font-family: PingFang SC-Regular, PingFang SC;
        font-size: 14px;
        font-weight: 400;
        margin-right: 26px;
        min-width: 56px;
        text-align: left;
      }

      .link-item {
        font-family: PingFang SC-Regular, PingFang SC;
        font-size: 12px;
        font-weight: 400;

        a {
          color: #666;
          padding-right: 20px;
          -webkit-text-decoration: underline;
          text-decoration: underline;

          &:hover {
            color: var(--link-active);
          }
        }
      }
    }


    .login-out {
      background: #efefef;
      border: 1px solid #e0e0e0;
      bottom: 18px;
      color: #666;
      height: 30px;
      position: absolute;
      right: 16px;
      width: 86px;
      border-radius: 17px 17px 17px 17px;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: -webkit-gradient(linear, left top, left bottom, from(#fbc470), to(#f88929));
        background: -webkit-linear-gradient(top, #fbc470, #f88929);
        background: linear-gradient(180deg, #fbc470, #f88929);
        border: 1px solid #fabf6b;
      }
    }
  }

}
</style>
  