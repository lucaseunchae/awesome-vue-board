<script setup lang="ts">
interface Props {
  weight?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  weight: 400
})
</script>

<template>
  <div class="text-body2">
    <slot></slot>
  </div>
</template>

<style scoped>
.text-body2 {
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  font-weight: v-bind(weight);
}
</style>
