<template>
  <div class="home-wrap">
    <Banner />
    <div class="banner-navs" @mouseleave="handleMouseLeave">
      <div class="show-menu" @mouseenter="handleMouseEnter">
        <img src="https://www.xianzhuanxia.com/_nuxt/img/show-menu.f024512.png" alt="查看更多-菜单" class="s-img">
      </div>
      <HoverMenu v-show="isHoverMenuVisible" />
    </div>
    <div class="container bg-white">
      <HomeNotice />
      <HotProduct />
      <HomeHelp />
      <HomeAdvantage />
      <HomePartner />
    </div>
    <HomeAbout />

  </div>
</template>

<script setup>
import { ref } from 'vue';

import Banner from '@/views/home/Banner.vue'
import HoverMenu from '@/views/home/HoverMenu.vue'
import HotProduct from '@/views/home/HotProduct.vue'
import HomeNotice from '@/views/home/HomeNotice.vue'
import HomeHelp from '@/views/home/HomeHelp.vue'
import HomeAdvantage from '@/views/home/HomeAdvantage.vue'
import HomePartner from '@/views/home/HomePartner.vue'
import HomeAbout from '@/views/home/HomeAbout.vue'



const isHoverMenuVisible = ref(false);
const handleMouseEnter = () => {
  isHoverMenuVisible.value = true;
};
const handleMouseLeave = () => {
  isHoverMenuVisible.value = false;
};
</script>

<style lang="scss">
.home-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 500px;

  .banner-navs {
    width: 1200px;
    // background-color: rosybrown;
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 1;
    margin-left: -600px;
  }

}
</style>