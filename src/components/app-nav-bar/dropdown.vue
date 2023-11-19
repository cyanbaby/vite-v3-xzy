<template>
  <el-dropdown class="nav-bar__dropdown" popper-class="nav-bar__popper" :hide-on-click="false">
    <span class="el-dropdown-link">
      手机APP<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>

    </template>
  </el-dropdown>
</template>


<style lang="scss">
.nav-bar {
  &__dropdown {}

  &__popper {}
}
</style>