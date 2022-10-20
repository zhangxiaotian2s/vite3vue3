<template>
  <div>
    <SvgIcon name="star" size="80px"></SvgIcon>
    <SvgIcon name="twitter" size="80px"></SvgIcon>
  </div>

  <router-link to="home">首页</router-link> &nbsp;&nbsp;&nbsp;
  <router-link to="about">关于我们</router-link>
  <br />
  <router-view />
</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>
<style scoped lang="scss"></style>
