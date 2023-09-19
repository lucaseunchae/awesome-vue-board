<script setup lang="ts">
interface Props {
  weight?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  weight: 400
})
</script>

<template>
  <div class="text-hero">
    <slot></slot>
  </div>
</template>

<style scoped>
.text-hero {
  font-size: 50px;
  line-height: 65px;
  letter-spacing: -0.04em;
  font-weight: v-bind(weight);
}
</style>
