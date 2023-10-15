<script setup lang="ts">
import AlertDialog from '@/components/Common/AlertDialog.vue'
import ConfirmDialog from '@/components/Common/ConfirmDialog.vue'
import ToastMessage from '@/components/Common/ToastMessage.vue'
import TheHeader from '@/components/TheHeader.vue'
import useAlertDialogStore from '@/composables/useAlertDialogStore'
import useConfirmDialogStore from '@/composables/useConfirmDialogStore'
import useToastMessageStore from '@/composables/useToastMessageStore'
import { storeToRefs } from 'pinia'
import { RouterView } from 'vue-router'

/* Store */
const { isShow: isShowConfirmDialog } = storeToRefs(useConfirmDialogStore())
const { dialogs: alertDialogs } = storeToRefs(useAlertDialogStore())
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
    <ConfirmDialog v-model:open="isShowConfirmDialog" />
    <AlertDialog v-for="(body, index) in alertDialogs" :key="index" :body="body" />
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
