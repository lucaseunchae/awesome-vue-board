<script setup lang="ts">
interface Props {
  weight?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  weight: 400
})
</script>

<template>
  <div class="text-caption">
    <slot></slot>
  </div>
</template>

<style scoped>
.text-caption {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  font-weight: v-bind(weight);
}
</style>
