<template>
    <div class="app-top-bar">
        <div class="nav-wrap">
            <LoginInfos />
            <UserProfile />
            <WebsiteNavigation />
            <MobileApp />
        </div>
    </div>
</template>
  
<script setup>
import UserProfile from '@/components/app-top-bar/UserProfile.vue'
import WebsiteNavigation from '@/components/app-top-bar/WebsiteNavigation.vue'
import MobileApp from '@/components/app-top-bar/MobileApp.vue'
import LoginInfos from '@/components/app-top-bar/LoginInfos.vue'
</script>
  
<style lang="scss">
@import '@/components/app-top-bar/index.scss';
</style>
  
  