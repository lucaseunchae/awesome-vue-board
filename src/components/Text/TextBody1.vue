<script setup lang="ts">
interface Props {
  weight?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  weight: 400
})
</script>

<template>
  <div class="text-body1">
    <slot></slot>
  </div>
</template>

<style scoped>
.text-body1 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-weight: v-bind(weight);
}
</style>
