<script setup lang="ts">
import TheSideBar from '@/components/TheSidebar/TheSidebar.vue'
import PostList from '@/features/Post/components/PostList.vue'
</script>

<template>
  <div class="home-view">
    <TheSideBar />
    <PostList />
  </div>
</template>

<style scoped lang="scss">
.home-view {
  display: flex;
  gap: 40px;
  height: calc(100vh - var(--header-height));
  padding: var(--view-padding);
}
</style>
