<script setup lang="ts">
import BaseIcon from '@/components/Base/BaseIcon.vue'
import TextBody2 from '@/components/Text/TextBody2.vue'
import SidebarNavigation from '@/components/TheSidebar/SidebarNavigation.vue'
import { ref } from 'vue'

/* Constant */
const navigations = ['전체 게시글', 'Vue', 'Javascript', 'Typescript'] as const
type Navigations = (typeof navigations)[number]

/* Local State */
const activeNavigation = ref<Navigations>('전체 게시글')
</script>

<template>
  <div class="the-sidebar">
    <SidebarNavigation
      v-for="navigation in navigations"
      :key="navigation"
      :name="navigation"
      :active="navigation === activeNavigation"
    >
      <BaseIcon class="the-sidebar__navigation-symbol" name="circle" fill="1" />
      <TextBody2 class="the-sidebar__navigation-name" weight="500">{{ navigation }}</TextBody2>
    </SidebarNavigation>
  </div>
</template>

<style scoped lang="scss">
.the-sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
}
</style>
