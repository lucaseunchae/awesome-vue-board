<script setup lang="ts">
interface Props {
  data: unknown
  width?: string
  height?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%'
})
</script>

<template>
  <slot v-if="data"></slot>
  <div v-else class="skeleton-loader"></div>
</template>

<style scoped>
.skeleton-loader {
  width: v-bind(width);
  height: v-bind(height);
  background-color: rgba(var(--gray-50));
  border-radius: 4px;
}
</style>
