<script setup lang="ts">
interface Props {
  weight?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  weight: 400
})
</script>

<template>
  <div class="text-heading3">
    <slot></slot>
  </div>
</template>

<style scoped>
.text-heading3 {
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.04em;
  font-weight: v-bind(weight);
}
</style>
