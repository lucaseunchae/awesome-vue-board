<script setup lang="ts">
import type { CommentsResponse } from '@/model/Comment'
import CommentListItem from './CommentListItem.vue'

/* Props */
interface Props {
  comments: CommentsResponse
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="comment-list">
    <CommentListItem v-for="comment in props.comments" :key="comment.id" v-bind="comment" />
  </div>
</template>

<style scoped lang="scss">
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
