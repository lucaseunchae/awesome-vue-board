<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseModal from '@/components/Base/BaseModal.vue'
import TextBody2 from '@/components/Text/TextBody2.vue'
import useConfirmDialogStore from '@/composables/useConfirmDialogStore'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

/* Props */
interface Props {
  open: boolean
}
const props = withDefaults(defineProps<Props>(), {})

/* Emits */
interface Emits {
  (e: 'update:open', value: boolean): void
}
const emits = defineEmits<Emits>()

/* Store */
const { body, callback } = storeToRefs(useConfirmDialogStore())
const { initialize } = useConfirmDialogStore()

/* Local State */
const openModelValue = computed({
  get() {
    return props.open
  },
  set(value) {
    emits('update:open', value)
  }
})

/* Helper Function */
const closeConfirmDialog = () => {
  openModelValue.value = false
}

/* Event Handler */
const handleClickCloseButton = () => {
  closeConfirmDialog()
}
const handleClickConfirmButton = () => {
  callback.value()
  closeConfirmDialog()
}

watch(openModelValue, (openModelValue) => {
  if (!openModelValue) {
    initialize()
  }
})
</script>

<template>
  <BaseModal v-model:open="openModelValue" title="Confirm" width="400px" class="confirm-dialog">
    <TextBody2>
      {{ body }}
    </TextBody2>
    <div class="confirm-dialog__buttons">
      <BaseButton @click="handleClickCloseButton" type="outlined" text-color="var(--gray-400)">
        닫기
      </BaseButton>
      <BaseButton @click="handleClickConfirmButton">확인</BaseButton>
    </div>
  </BaseModal>
</template>

<style scoped lang="scss">
.confirm-dialog {
  &__buttons {
    display: flex;
    gap: 10px;
    width: fit-content;
    margin-top: 10px;
    margin-left: auto;
  }
}
</style>
