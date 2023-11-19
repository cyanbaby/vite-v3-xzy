<template>
    <div class="adv">
        <h5 class="title">我们的优势</h5>
        <ul class="adv-list clear">
            <li class="li-bg fl li-bg1"><img src="https://www.xianzhuanxia.com/_nuxt/img/adv1.42c88aa.png" alt="闲置资源转让"
                    title="闲置资源转让">
                <p class="m-title">闲置资源转让</p>
                <p class="desc">闲置资源可以在这里很方便地转让给其他有需要的朋友。</p>
            </li>
            <li class="li-bg fl li-bg2"><img src="https://www.xianzhuanxia.com/_nuxt/img/adv2.fff0088.png" alt="价值最大化"
                    title="价值最大化">
                <p class="m-title">价值最大化</p>
                <p class="desc">完善的渠道和解决方案，可以帮您将闲置资源的价值最大化！</p>
            </li>
            <li class="li-bg fl li-bg3"><img src="https://www.xianzhuanxia.com/_nuxt/img/adv3.986d572.png" alt="安全便捷"
                    title="安全便捷">
                <p class="m-title">安全便捷</p>
                <p class="desc">实名认证更好地保证您交易和资金的安全，交易操作简单快捷。</p>
            </li>
            <li class="li-bg fl li-bg4"><img src="https://www.xianzhuanxia.com/_nuxt/img/adv4.56cbc93.png" alt="提现秒到账"
                    title="提现秒到账">
                <p class="m-title">提现秒到账</p>
                <p class="desc">多种渠道供您随时提现交易获得的资金，基本秒到账。</p>
            </li>
            <li class="li-bg fl li-bg5"><img src="https://www.xianzhuanxia.com/_nuxt/img/adv5.c38e6d3.png" alt="售后完善"
                    title="售后完善">
                <p class="m-title">售后完善</p>
                <p class="desc">我们有完善的售前售后客服团队有需要可以随时给您协助。</p>
            </li>
        </ul>
    </div>
</template>
  
<style lang="scss">
@keyframes slide-top-data-v-3db7e81a {
    0% {
        margin: 55px 0 18px
    }

    to {
        margin: 36px 0 10px
    }
}

.com-main-wrap .adv .title[data-v-3db7e81a]:before {
    margin-left: -98px
}

.com-main-wrap .adv .title[data-v-3db7e81a]:after {
    margin-left: 16px;
    transform: rotate(180deg)
}

.com-main-wrap .adv .adv-list[data-v-3db7e81a] {
    padding-top: 40px
}

@keyframes slide-top-data-v-3db7e81a {
    0% {
        margin: 55px 0 18px
    }

    to {
        margin: 36px 0 10px
    }
}

.adv {
    background: url(https://www.xianzhuanxia.com/_nuxt/img/adv-bg.010856b.png) no-repeat;
    background-size: 100% 100%;
    border-radius: 10px 10px 10px 10px;
    box-sizing: border-box;
    height: 240px;
    margin-bottom: 106px;
    margin-top: 57px;
    opacity: .74;
    padding-top: 30px;

    .adv-list {
        padding-top: 40px;
        display: flex;

        .li-bg {
            background-size: 224px 260px;
            border-radius: 10px 10px 10px 10px;
            box-sizing: border-box;
            cursor: pointer;
            display: inline-block;
            height: 260px;
            margin-right: 20px;
            padding: 0 23px 0 25px;
            text-align: center;
            width: 224px;

            &:hover img {
                animation: slide-top-data-v-3db7e81a .3s forwards
            }

            &:hover .desc {
                display: block
            }

            img {
                height: 90px;
                margin: 55px 0 18px;
                width: 90px;
            }

            .m-title {
                color: #333;
                font-family: PingFang SC-Medium, PingFang SC;
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 18px;
            }

            .desc {
                color: #333;
                display: none;
                font-family: PingFang SC-Regular, PingFang SC;
                font-size: 12px;
                font-weight: 400;
                line-height: 18px;
            }
        }

        .li-bg1 {
            background: url(https://www.xianzhuanxia.com/_nuxt/img/bg1.f069b01.png) no-repeat;
            background-size: 224px 260px
        }

        .li-bg2 {
            background: url(https://www.xianzhuanxia.com/_nuxt/img/bg2.35fd7cc.png) no-repeat;
            background-size: 224px 260px
        }

        .li-bg3 {
            background: url(https://www.xianzhuanxia.com/_nuxt/img/bg3.7a11fbc.png) no-repeat;
            background-size: 224px 260px
        }

        .li-bg4 {
            background: url(https://www.xianzhuanxia.com/_nuxt/img/bg4.6dc1baa.png) no-repeat;
            background-size: 224px 260px
        }

        .li-bg5 {
            background: url(https://www.xianzhuanxia.com/_nuxt/img/bg5.598e651.png) no-repeat;
            background-size: 224px 260px
        }

    }

    .title {
        color: #fff;
        font-family: PingFang SC-Medium, PingFang SC;
        font-size: 26px;
        font-weight: 500;
        position: relative;
        text-align: center;
    }




}
</style>