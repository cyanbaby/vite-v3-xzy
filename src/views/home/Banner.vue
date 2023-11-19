<template>
  <div class="banner-wrap">
    <swiper class="swiper">
      <swiper-slide class="slide">
        <RouterLink to="/"><img
            src="https://oss.xianzhuanxia.com/setting/applySet/20230508/f2cdfdc1910d4908995afa604a9b6ca1.png"
            alt="banner0" class="pic"></RouterLink>
      </swiper-slide>
      <swiper-slide class="slide">

        <RouterLink to="/"><img
            src="https://oss.xianzhuanxia.com/setting/applySet/20230508/f2cdfdc1910d4908995afa604a9b6ca1.png"
            alt="banner0" class="pic"></RouterLink>
      </swiper-slide>
      <swiper-slide class="slide">

        <RouterLink to="/"><img
            src="https://oss.xianzhuanxia.com/setting/applySet/20230508/f2cdfdc1910d4908995afa604a9b6ca1.png"
            alt="banner0" class="pic"></RouterLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.banner-wrap {
  // height: 600px;
  width: 100%;

  .swiper {
    width: 100%;

    // height: 100%;
    .swiper-slide {
      height: 600px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .show-menu {
    cursor: pointer;
    height: 33px;
    left: 50%;
    // margin-left: -600px;
    position: absolute;
    top: 0;
    width: 40px;
    z-index: 6;
  }
}
</style>