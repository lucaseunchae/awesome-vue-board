<script setup lang="ts">
import AppSpinner from '@/components/Common/AppSpinner.vue'
import { computed } from 'vue'

/* Props */
interface Props {
  backgroundColor?: string
  textColor?: string
  type?: 'filled' | 'outlined' | 'text'
  disabled?: boolean
  isLoading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'filled',
  disabled: false,
  isLoading: false
})

/* Local State */
const textColor = computed(() => {
  if (props.textColor) return `${props.textColor}`

  return props.type === 'filled' ? 'var(--white)' : 'var(--black)'
})
const backgroundColor = computed(() =>
  props.type === 'filled' ? props.backgroundColor ?? 'var(--blue)' : 'var(--white)'
)
const hoverBackgroundColor = computed(() =>
  props.type === 'filled' ? `${backgroundColor.value} / 0.9` : `${textColor.value} / 0.05`
)
const border = computed(() =>
  props.type === 'outlined' ? `solid 1px rgba(${textColor.value})` : 'none'
)
</script>

<template>
  <button class="base-button" :disabled="props.disabled || props.isLoading">
    <AppSpinner v-if="isLoading" size="8px" width="2px" />
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 32px;
  padding-inline: 10px;
  border: none;
  border: v-bind(border);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(v-bind(textColor) / 1);
  background-color: rgba(v-bind(backgroundColor));
  cursor: pointer;
}

.base-button:hover {
  background-color: rgba(v-bind(hoverBackgroundColor));
}

.base-button:focus {
  outline: none;
}

.base-button:disabled {
  background-color: rgba(var(--gray-200));
  color: rgba(var(--gray-300));
  border: none;
  cursor: auto;
}
</style>
