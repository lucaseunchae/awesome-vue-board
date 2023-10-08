<script lang="ts">
export type ToastMessageState = 'Success' | 'Info' | 'Warning' | 'Error'

export interface ToastMessageProps {
  state: ToastMessageState
  body: string
}
</script>

<script setup lang="ts">
import IconButton from '@/components/Common/IconButton.vue'
import TextBody2 from '@/components/Text/TextBody2.vue'
import TextSubheading from '@/components/Text/TextSubheading.vue'
import { computed, onMounted, ref } from 'vue'

/* Props */
const props = withDefaults(defineProps<ToastMessageProps>(), {})

/* Local State */
const isShow = ref(false)
const stateColor = computed(() => {
  switch (props.state) {
    case 'Success':
      return 'var(--green-400)'
    case 'Info':
      return 'var(--blue-400)'
    case 'Warning':
      return 'var(--amber-400)'
    case 'Error':
      return 'var(--red-400)'
    default:
      return ''
  }
})
const msOnClose = computed(() => (props.state === 'Success' ? 2000 : 3000))

/* Helper Function */
const showToastMessage = () => {
  isShow.value = true
}
const closeToastMessage = () => {
  isShow.value = false
}

/* Event Handler */
const handleClickCloseButton = () => {
  closeToastMessage()
}

/* Hook */
onMounted(() => {
  showToastMessage()
  setTimeout(() => {
    closeToastMessage()
  }, msOnClose.value)
})
</script>

<template>
  <Transition name="toast-message" mode="out-in">
    <div v-if="isShow" class="toast-message">
      <div class="toast-message__left-bar"></div>
      <div class="toast-message__content">
        <div class="toast-message__header">
          <TextSubheading weight="550" class="toast-message__title">{{ state }}</TextSubheading>
          <IconButton
            @click="handleClickCloseButton"
            opsz="18"
            name="close"
            class="toast-message__close-button"
          />
        </div>
        <TextBody2 class="toast-message__body">{{ body }}</TextBody2>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.toast-message {
  display: flex;
  gap: 12px;
  width: 300px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: rgba(var(--white));
  box-shadow:
    0 3px 6px rgba(var(--black) / 0.16),
    0 3px 6px rgba(var(--black) / 0.23);
}

.toast-message__left-bar {
  width: 4px;
  border-radius: 10px;
  background-color: rgba(v-bind(stateColor));
}

.toast-message__content {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  padding-block: 2px;
}

.toast-message__header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toast-message__title {
  color: rgba(v-bind(stateColor));
  line-height: 1;
}

.toast-message__close-button {
  position: absolute;
  right: -8px;
}

.toast-message__body {
  width: 100%;
  white-space: pre-wrap;
}

/*
Transition 
*/
.toast-message-enter-active,
.toast-message-leave-active {
  transition: all 0.8s ease;
}

.toast-message-enter-from,
.toast-message-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
