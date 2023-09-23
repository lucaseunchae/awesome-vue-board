<script setup lang="ts">
interface Props {
  size?: string
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  size: '24px',
  width: '4px'
})
</script>

<template>
  <div class="app-spinner"></div>
</template>

<style scoped lang="scss">
.app-spinner {
  display: inline-block;
  aspect-ratio: 1;
  width: v-bind(size);
  border: solid v-bind(width) rgba(var(--gray-400));
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
