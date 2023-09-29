<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TheHeader />
  <main class="main-container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </main>
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
