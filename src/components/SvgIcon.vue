<template>
  <svg aria-hidden="true" class="icon-svg-tpl" :width="props.size" :height="props.size">
    <use :href="symbolId" :fill="props.color" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: String,
    default: '30px'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
