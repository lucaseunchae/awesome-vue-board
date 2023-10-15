<script setup lang="ts">
interface Props {
  weight?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  weight: 400
})
</script>

<template>
  <div class="text-heading2">
    <slot></slot>
  </div>
</template>

<style scoped>
.text-heading2 {
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.04em;
  font-weight: v-bind(weight);
}
</style>
