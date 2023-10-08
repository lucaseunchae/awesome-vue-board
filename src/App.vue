<script setup lang="ts">
import ToastMessage from '@/components/Common/ToastMessage.vue'
import TheHeader from '@/components/TheHeader.vue'
import useToastMessageStore from '@/composables/useToastMessageStore'
import { storeToRefs } from 'pinia'
import { RouterView } from 'vue-router'

/* Store */
const { messages: toastMessages } = storeToRefs(useToastMessageStore())
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

  <Teleport to="body">
    <div class="toast-messages">
      <ToastMessage
        v-for="({ state, body }, index) in toastMessages"
        :key="index"
        :state="state"
        :body="body"
      />
    </div>
  </Teleport>
</template>

<style lang="scss">
@import './assets/scss/global.scss';

.main-container {
  max-width: 1200px;
  margin: 0 auto;
}

.toast-messages {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
