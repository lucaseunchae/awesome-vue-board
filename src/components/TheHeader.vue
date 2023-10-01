<script setup lang="ts">
import BaseIcon from '@/components/Base/BaseIcon.vue'
import TextHeading3 from '@/components/Text/TextHeading3.vue'
import { useRouter } from 'vue-router'

/* Router */
const router = useRouter()

/* Event Handler */
const handleClickLogo = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <header class="the-header">
    <div @click="handleClickLogo" class="the-header__logo">
      <BaseIcon name="web" opsz="22" />
      <TextHeading3 weight="600">뷰보드</TextHeading3>
    </div>
  </header>
</template>

<style scoped lang="scss">
.the-header {
  display: flex;
  align-items: center;
  height: var(--header-height);
  padding-inline: 10px;
  border-bottom: solid 1px rgba(var(--gray-100));

  &__logo {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px;
    color: rgba(var(--gray-700));
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
