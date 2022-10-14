<template>
  <div>
    <SvgIcon name="star" size="30px"></SvgIcon>
    <SvgIcon name="twitter" size="80px"></SvgIcon>
  </div>
  <router-view />
</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
const testa = ref('1')
window.webkit.test('xxx')
</script>
<style scoped lang="scss">
.icon-svg {
  width: 30px;
  height: 30px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.app-banner {
  width: 800px;
}
</style>
