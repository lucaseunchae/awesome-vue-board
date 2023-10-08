<script setup lang="ts">
import BaseModal from '@/components/Base/BaseModal.vue'
import TextBody2 from '@/components/Text/TextBody2.vue'
import { ref } from 'vue'

/* Props */
interface Props {
  body: string
}
const props = withDefaults(defineProps<Props>(), {})

/* Local State */
const open = ref(true)
</script>

<template>
  <BaseModal v-model:open="open" title="에러 발생" width="400px">
    <TextBody2>
      {{ body }}
    </TextBody2>
  </BaseModal>
</template>

<style scoped></style>
