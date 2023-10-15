<script setup lang="ts">
import CommentContainer from '@/features/Comment/components/CommentContainer.vue'
import PostDetailContent from '@/features/Post/components/PostDetailContent.vue'
</script>

<template>
  <div class="post-detail-view">
    <PostDetailContent />
    <CommentContainer />
  </div>
</template>

<style scoped lang="scss">
.post-detail-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: var(--view-padding);
}
</style>
