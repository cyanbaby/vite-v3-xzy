<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div data-v-2ab9bd10="" class="app-nav-bar com-head-wrap" style="left: 0px;">
    <div data-v-2ab9bd10="" class="container clear">
      <h5 data-v-2ab9bd10="" class="logo-h">
        <RouterLink to="/">
          <img data-v-2ab9bd10="" src="https://www.xianzhuanxia.com/_nuxt/img/logo.e7faa15.png" alt="logo" title="闲赚侠logo"
            class="logo" />
        </RouterLink>
      </h5>
      <div class="navs">
        <el-dropdown class="nav-bar__dropdown card-purchase" popper-class="nav-bar__popper" :hide-on-click="false">
          <span class="el-dropdown-link">
            <RouterLink to="/sell/aaa.html"><span class="link-text">我要买卡</span></RouterLink><el-icon
              class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-item>
              <RouterLink to="/cardrecharge.html">卡券直充</RouterLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <RouterLink to="/buy/100.html">卡券直销</RouterLink>
            </el-dropdown-item>
          </template>
        </el-dropdown>


        <el-dropdown class="nav-bar__dropdown card-recovery" popper-class="nav-bar__popper nav-bar__popper--hide"
          :hide-on-click="false">
          <span class="el-dropdown-link">
            <RouterLink to="/sell/100.html"><span class="link-text">卡券回收</span></RouterLink>
          </span>
        </el-dropdown>


        <el-dropdown class="nav-bar__dropdown official-flash" popper-class="nav-bar__popper nav-bar__popper--hide"
          :hide-on-click="false">
          <span class="el-dropdown-link">
            <RouterLink to="/discounts/100.html"><span class="link-text">官方快充</span></RouterLink>
          </span>
        </el-dropdown>


        <el-dropdown class="nav-bar__dropdown substitute" popper-class="nav-bar__popper" :hide-on-click="false">
          <span class="el-dropdown-link">
            <RouterLink to="/chargesending/100.html"><span class="link-text">我要代充</span></RouterLink><el-icon
              class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-item>
              <RouterLink to="/chargesending/100.html">代充放单</RouterLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <RouterLink to="/chargerecive/100.html">卡券直销</RouterLink>
            </el-dropdown-item>
          </template>
        </el-dropdown>


        <el-dropdown class="nav-bar__dropdown platform-task" popper-class="nav-bar__popper" :hide-on-click="false">
          <span class="el-dropdown-link">
            <RouterLink to="/taskmoney"><span class="link-text">平台任务</span></RouterLink><el-icon
              class="el-icon--right"><arrow-down /></el-icon>
            <span><img
              data-v-2ab9bd10=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAANCAYAAACzbK7QAAAAAXNSR0IArs4c6QAAAg1JREFUOE+tlD1IW1EUx38nptrEGJdWipMoQokWCnYoWtHNFkQ6dOiQih9D6hs7d3V1qZBRMUIR65TBMaARRzfRQXDQwQRJ0qT1afLeLffmJU0citC86d57zv3/zte7wr0vNTnpH45EvimICoTu2x+6V1Bqg6/SeCFjWVpwW+DtQ4X+5achdYAnvivwphXiNQ0DyFjWM4Fd4GXdEArh6+7Gubw0R/6+Pirn5zwaHMQXDpszJ5OB9nYqZ2dNMYm+29mJc3WFeOIp4Hmjl7+/n/D8PLnlZZRtE5qdpbSxQdfiIvbeXhWQzxMYH+cmlULd3BC2LAorK3SMjuLm85SPj5Hs0lJKwbC47jtHxPaJJEWkTwM6RkaM0K/t7b+AuTmKm5vVWByH9qEhJBBAlcsEJiYoJhIEp6Yo7ezA3R2StSyFUptP4/FP+k7WsuLAZw3w9/aactydnvJ4bKyaQSyGe31t9O3DQ7MOzsyA63J7dIS/pwf/wAAlLwgN0LV/7XPdj66IreCHiDypAbRI18ICVCoU19bo0hmsrzfVPBSNGntpa8v46t78TiaNT60Hevfqfg90BnY6bRocnJ7m5+oq4VgMp1AwrpWLC27TaZOBm8th7+9Xe3RwQPnkpArwpijkTVFLR7QOaIAkgPct/w9qgvqZeBGJfFfwoUWQfNNToUU9yBdXqRmg7T9AjigV/wN5Hs9hhMsP3AAAAABJRU5ErkJggg=="
              alt="新" srcset="" class="new-tag"></span>
          </span>
          <template #dropdown>
            <el-dropdown-item>
              <RouterLink to="/taskmoney.html">平台任务</RouterLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <RouterLink to="/tasksending.html">我要放单</RouterLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <RouterLink to="/">查看库存</RouterLink>
            </el-dropdown-item>
          </template>
        </el-dropdown>



        <el-dropdown class="nav-bar__dropdown make-money" popper-class="nav-bar__popper" :hide-on-click="false">
          <span class="el-dropdown-link">
            <RouterLink to="/"><span class="link-text">赚钱攻略</span></RouterLink><el-icon
              class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-item>
              <RouterLink to="/makemoney/doclist">赚钱攻略</RouterLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <RouterLink to="/user/sharefeed/invite">邀请赚钱</RouterLink>
            </el-dropdown-item>
          </template>
        </el-dropdown>


        <el-dropdown class="nav-bar__dropdown mr-0 open-platform" popper-class="nav-bar__popper nav-bar__popper--hide"
          :hide-on-click="false">
          <span class="el-dropdown-link">
            <RouterLink to="/platform/open"><span class="link-text">开放平台</span></RouterLink>
          </span>
        </el-dropdown>

      </div>
    </div>
  </div>
</template>

<style lang="scss">@import '@/components/app-nav-bar/index.scss';</style>
  