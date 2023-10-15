<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

/* Props */
interface Props {
  modelValue: string
  width?: string
  label?: string | null
  labelPosition?: 'vertical' | 'horizontal'
}
const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  label: null,
  labelPosition: 'vertical'
})

/* Emits */
interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emits = defineEmits<Emits>()

/* Local State */
const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})
const wrapperStyle = computed<CSSProperties>(() =>
  props.labelPosition === 'horizontal'
    ? {
        flexDirection: 'row',
        alignItems: 'center'
      }
    : {
        flexDirection: 'column'
      }
)
</script>

<template>
  <div class="base-input-wrapper" :style="wrapperStyle">
    <label v-if="label" class="base-input-label">{{ label }}</label>
    <input v-model="modelValue" type="text" class="base-input" />
  </div>
</template>

<style scoped>
.base-input-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  width: v-bind(width);
}

.base-input-label {
  font-size: 14px;
  font-weight: 450;
  letter-spacing: -0.02rem;
  line-height: 1;
  white-space: nowrap;
}

.base-input {
  width: 100%;
  height: 32px;
  padding-inline: 6px;
  font-size: 14px;
}

.base-input:focus {
  outline: none;
}
</style>
