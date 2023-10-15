<script setup lang="ts">
import BaseIcon from '@/components/Base/BaseIcon.vue'
import TextBody2 from '@/components/Text/TextBody2.vue'
import { computed } from 'vue'

/* Props */
interface Props {
  active: boolean
  name: string
}
const props = withDefaults(defineProps<Props>(), {})

/* Local State */
const symbolColor = computed(() => (props.active ? 'var(--blue-500)' : 'var(--gray-200)'))
const nameColor = computed(() => (props.active ? 'var(--blue-500)' : 'var(--gray-700)'))
</script>

<template>
  <div class="sidebar-navigation" :class="{ 'sidebar-navigation--active': active }">
    <BaseIcon class="sidebar-navigation__symbol" name="circle" fill="1" />
    <TextBody2 class="sidebar-navigation__name" weight="500">{{ name }}</TextBody2>
  </div>
</template>

<style scoped>
.sidebar-navigation {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-inline: 14px;
  height: 40px;
}

.sidebar-navigation--active {
  background-color: rgba(var(--gray-100));
  border-radius: 14px;
}

.sidebar-navigation__symbol {
  color: rgba(v-bind(symbolColor));
}

.sidebar-navigation__name {
  color: rgba(v-bind(nameColor));
}
</style>
