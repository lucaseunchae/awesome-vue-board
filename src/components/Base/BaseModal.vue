<script setup lang="ts">
import IconButton from '@/components/Common/IconButton.vue'
import TextSubheading from '@/components/Text/TextSubheading.vue'
import { computed, onMounted, onUpdated, ref } from 'vue'

/* Props */
interface Props {
  title: string
  open: boolean
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: '240px'
})

/* Emits */
interface Emits {
  (e: 'update:open', value: boolean): void
}
const emits = defineEmits<Emits>()

/* Local State */
const modalRef = ref<HTMLDialogElement | null>(null)
const openModelValue = computed({
  get() {
    return props.open
  },
  set(value) {
    emits('update:open', value)
  }
})

/* Helper Function */
const closeModal = () => {
  openModelValue.value = false
}

/* Event Handler */
const handleClickModal = (event: Event) => {
  if ((event.target as HTMLDialogElement).nodeName === 'DIALOG') {
    closeModal()
  }
}
const handleClickCloseButton = () => {
  closeModal()
}

/* Hooks */
onMounted(() => {
  modalRef.value?.showModal()
})
onUpdated(() => {
  if (!modalRef.value?.open) {
    modalRef.value?.showModal()
  }
})
</script>

<template>
  <dialog v-if="props.open" ref="modalRef" @click="handleClickModal" class="base-modal">
    <div class="base-modal__wrapper" :style="{ width: props.width }">
      <div class="base-modal__header">
        <TextSubheading weight="600">{{ title }}</TextSubheading>
        <IconButton
          @click="handleClickCloseButton"
          class="base-modal__close-button"
          name="close"
          opsz="22"
        />
      </div>
      <div class="base-modal__content">
        <slot></slot>
      </div>
    </div>
  </dialog>
</template>

<style scoped lang="scss">
.base-modal {
  padding: 0;
  border: none;
  border-radius: 10px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 14px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__close-button {
    position: relative;
    left: 8px;
  }

  &__content {
    padding-top: 0;
    white-space: pre-wrap;
  }
}
</style>
