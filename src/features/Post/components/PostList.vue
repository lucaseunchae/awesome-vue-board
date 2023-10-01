<script setup lang="ts">
import SkeletonLoader from '@/components/Common/SkeletonLoader.vue'
import useFetchPostsQuery from '@/features/Post/composables/useFetchPostsQuery'
import PostListItem from './PostListItem.vue'

const { data } = useFetchPostsQuery()
</script>

<template>
  <div class="post-list">
    <SkeletonLoader :data="data">
      <PostListItem v-for="post in data" :key="post.id" :id="post.id" :title="post.title" />
    </SkeletonLoader>
  </div>
</template>

<style scoped lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
  width: 630px;
  min-width: 400px;
  height: 100%;
  padding-right: 20px;
  overflow-y: auto;
}
</style>
