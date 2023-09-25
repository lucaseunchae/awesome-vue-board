<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
import type { BaseIconProps } from '@/components/Base/BaseIcon.vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'

const props = defineProps<BaseIconProps>()
</script>

<template>
  <BaseButton type="text">
    <BaseIcon v-bind="props" />
  </BaseButton>
</template>

<style scoped lang="scss"></style>
