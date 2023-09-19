<script setup lang="ts">
interface Props {
  weight?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  weight: 400
})
</script>

<template>
  <div class="text-subheading">
    <slot></slot>
  </div>
</template>

<style scoped>
.text-subheading {
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  font-weight: v-bind(weight);
}
</style>
