<script lang="ts">
export interface BaseIconProps {
  name: string
  fill?: number | string
  wght?: number | string
  grad?: number | string
  opsz?: number | string
  shape?: 'outlined' | 'rounded' | 'sharp'
  color?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

/* Props */
const props = withDefaults(defineProps<BaseIconProps>(), {
  fill: 0,
  wght: 400,
  grad: 0,
  opsz: 16,
  shape: 'outlined',
  color: 'black'
})

/* Local State */
const shapeClassName = computed(() => `material-symbols-${props.shape}`)
const fontSize = computed(() => `${props.opsz}px`)
const color = computed(() => `var(--${props.color})`)
</script>

<template>
  <span class="base-icon" :class="shapeClassName">{{ props.name }}</span>
</template>

<style scoped>
.base-icon {
  font-variation-settings:
    'FILL' v-bind(fill),
    'wght' v-bind(wght),
    'GRAD' v-bind(grad),
    'opsz' v-bind(opsz);
  font-size: v-bind(fontSize);
  color: v-bind(color);
}
</style>
