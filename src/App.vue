<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import './assets/scss/global.scss';

.main-container {
  max-width: 1200px;
  height: calc(100vh - var(--header-height));
  margin: 0 auto;
  padding: 30px;
}
</style>
