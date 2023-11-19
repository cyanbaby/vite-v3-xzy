<script setup>
import AppTopBar from '@/components/app-top-bar/index.vue'
import AppNavBar from '@/components/app-nav-bar/index.vue'
import AppFooter from '@/components/app-footer/index.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppTopBar />
  <AppNavBar />
  <RouterView style="margin-top: 116px;" />
  <AppFooter />
</template>

<style>
body {
  /* background: #2c3e50; */
  background: #fff;
}
</style>
