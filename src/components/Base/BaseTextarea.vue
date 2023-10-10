<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

/* Props */
interface Props {
  modelValue: string
  width?: string
  height?: string
  label?: string | null
  labelPosition?: 'vertical' | 'horizontal'
}
const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '300px',
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
  <div class="base-textarea-wrapper" :style="wrapperStyle">
    <label v-if="label" class="base-textarea-label">{{ label }}</label>
    <textarea v-model="modelValue" class="base-textarea"></textarea>
  </div>
</template>

<style scoped>
.base-textarea-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  width: v-bind(width);
  height: v-bind(height);
}

.base-textarea-label {
  font-size: 14px;
  font-weight: 450;
  letter-spacing: -0.02rem;
  line-height: 1;
  white-space: nowrap;
}

.base-textarea {
  width: 100%;
  height: 100%;
  padding-inline: 6px;
  font-size: 14px;
  line-height: 1.8;
  resize: none;
}

.base-textarea:focus {
  outline: none;
}
</style>
