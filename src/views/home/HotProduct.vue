<template>
  <div class="hot-product">
    <el-tabs v-model="current" @tab-change="handleChangeTab">


      <el-tab-pane v-for="element in tabs" :name="element.name" :key="element.name">
        <template #label>
          <div class="fl hot-bar">
            <div class="higt"></div><span>{{ element.label }}</span>
          </div>
        </template>
        <template v-if="current === element.name">
          <div class="hot-content clear">
            <div class="left fl">
              <RouterLink :to="element.to" class="">
                <img :src="element.src" alt="热门卖卡" title="热门卖卡-查看更多" />
              </RouterLink>
            </div>
            <div class="right fr">
              <ul class="hot-list">
                <li v-for="item in cardList" :key="item.id">
                  <RouterLink :to="`/sell/100_${item.id}.html`" class="">
                    <img :src="item.logo" alt="产品图" title="产品图" class="logo-ico" />
                    <p class="name one-line-esplise">{{ item.name }}</p>
                    <p class="desc one-line-esplise">{{ `最高${item.minDiscount}折` }}</p>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </template>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getSellCard, getBuyCard, getHotQuickCard, getSendChargeCard } from '@/api/home.js'

const current = ref(1)
const tabs = ref([
  {
    label: '热门回收',
    name: 1,
    src: 'https://www.xianzhuanxia.com/_nuxt/img/sell-ico.df124de.png',
    to: "/sell/100.html",
    request: getSellCard
  },
  {
    label: '热门直销',
    name: 2,
    src: 'https://www.xianzhuanxia.com/_nuxt/img/buy-ico.18ba203.png',
    to: "/sell/100.html",
    request: getBuyCard
  },
  {
    label: '热门快充',
    name: 3,
    src: 'https://www.xianzhuanxia.com/_nuxt/img/fast-ico.2796dc6.png',
    to: "/sell/100.html",
    request: getHotQuickCard
  },
  {
    label: '热门代充',
    name: 4,
    src: 'https://www.xianzhuanxia.com/_nuxt/img/recharge-ico.0359323.png',
    to: "/sell/100.html",
    request: getSendChargeCard
  }
]);

const cardList = ref([]);

const handleChangeTab = (TabPaneName) => {
  const element = tabs.value.find(e => e.name === TabPaneName)
  const request = element.request
  request({})
    .then(({ code, result }) => {
      if (code === 0) {
        cardList.value = result.slice(0, 14);
      }
    })
    .catch(err => {})
    .finally(() => {})
}

handleChangeTab(current.value)
</script>

<style lang="scss">
.hot-product {
  margin-top: 35px;
  .el-tabs__nav-wrap::after {
    height: 1px;
    background-color: #e7ebf0;
  }

  .el-tabs__item {
    margin-right: 94px;
    height: 49px;
  }

  .is-active {
    .hot-bar {
      font-size: 24px;
      font-weight: 500;
    }

    .higt {
      display: inline-block;
    }
  }



  .hot-bar {
    color: #333;
    cursor: pointer;
    font-family: PingFang SC-Regular, PingFang SC;
    font-size: 20px;
    font-weight: 400;
    // margin-right: 94px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .higt {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAAXNSR0IArs4c6QAAA09JREFUSEu1lm1sjWccxq/rORVqJsLQRSUn3WmlaI/S1WTStCTI4i3e0mAfkIhsE5Jhk2LLGPGyD3wRL5l+MVHDvJVGNW1SxMxbQ9CeUdZlCLJ02m3ieS55ztEXep5znwbPp/vJ//pfv/u+/89z/2/C8Khh4pewnffhc7aze0mNSf9qnKYE/f1JNmzf+Re6InS2l7NbyT1TXnPcDHgwNgAk1LYYEg2w7U+ZdOJwPBAz4N640QDL2ptpEZNObDFBzID6MStAro5qJGcGk0/uiwUxA/4YUw0hI6oJ8QR4msX+FSEvSEyAQqPz4WN5zG0gjtJfNqHDAAkWfh9VBWKE6UuGnEwGKq5G03muQDV5hQDXmIoYjlM/MLViiTtUbd5sOAhwQMW34VA0A13PnQKyGIIvLgBQw/TKAbqRWwiFJ7WW6ZWFUQG6PDINCbwEoGuc5hGZz5kK29r/YkXfc1DViuiAKx+Xg8zvkHlYrMcAe0aG2MNg1cwWgC4NT2XWuVpdGDEeFo903PzVDD6E9Y+fwerGcA302/AbsJz5kLUaYu7rAwA4Wsycc5up89lZkHURgHugffhGzCMm15jz62DqTPZSkBveoHGrlTSUOj3sIITJbweA5VRllttEUuMENAL4F8B7ceoPUeXBJyDfiTNhE6QiEKcA9o0jJ0SVZT5zf5M4xI2wkcKx1Q90MiMDFk9DeDd2nhqo0sEPAfQyAqTvOO7aN806lQ6aANDU1Z5RJQPPAvzIMJM6JDalM7/uv7Y6HR+4BeLCGLn3qWPp6yEsiw1wJnH8zXaz1UF/D3RKdPu1R9FVSh1IC8LHy54AYhsn3lzgFdfhtK8hrosapz6PHBUHAr8AnNRO5N4g1JTCKX8+8gQU+5OQ0OmvKLmP0PR/agSwP5AMh1cARU7D1mcXp4fmmj4A7Qu42xR4SUfM47TQjy0NR3v8ebCsowBa/wlpGQtubzQC9qacAjCqRSdsZcGtz9z3lzqadifngAk/A+gfFlvYwIK6r4yAn/xuDYNhnbSGs+6sbM5p1zJV3Lsbnia696AvINSg891MzoDtWYOdyT3RxboP4BgsZxVn1le31Xo3/aI+H8DqMh+2E+Kc+h2egF39hgBs5Jz61utlG/Fzu2MgVgvdMoAAAAAASUVORK5CYII=) no-repeat;
    height: 30px;
    width: 24px;
    margin-right: 12px;
    display: none;
  }

  // .el-tabs__item.is-active {
  //   color: #f4b84b;
  // }
  .el-tabs__active-bar {
    background-color: #f4b84b;
    height: 3px;
  }


  .hot-content {
    padding-top: 34px;
    display: flex;

    .left {
      border-radius: 10px 10px 10px 10px;
      height: 328px;
      width: 258px;
    }

    .left img {
      border-radius: 10px 10px 10px 10px;
      height: 100%;
      width: 100%;
    }

    .right {
      flex: 1;
    }

    .right .hot-list li {
      background: #f9fafb;
      border-radius: 10px 10px 10px 10px;
      box-sizing: border-box;
      float: left;
      height: 152px;
      margin-bottom: 24px;
      margin-left: 18px;
      padding: 10px;
      text-align: center;
      width: 116px;

      .logo-ico {
        border-radius: 105px 105px 105px 105px;
        height: 80px;
        width: 80px;
      }

      .name {
        color: #333;
        font-family: PingFang SC-Regular, PingFang SC;
        font-size: 16px;
        font-weight: 400;
        margin-top: 6px;
      }

      .desc {
        color: #ff5800;
        font-family: PingFang SC-Regular, PingFang SC;
        font-size: 12px;
        font-weight: 400;
        margin-top: 6px;
      }
    }
  }
}
</style>

