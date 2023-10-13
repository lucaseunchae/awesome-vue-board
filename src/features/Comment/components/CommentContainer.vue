<script setup lang="ts">
import TextSubheading from '@/components/Text/TextSubheading.vue'
import useFetchCommentsQuery from '@/features/Comment/composables/useFetchCommentsQuery'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CommentCreateForm from './CommentCreateForm.vue'
import CommentList from './CommentList.vue'

/* Router */
const route = useRoute()
const postId = Number(route.params.id)

/* Local State */
const commentTitle = computed(() => `댓글(${data.value?.length})`)

/* Server State */
const { data } = useFetchCommentsQuery({ queryParams: { postId } })
</script>

<template>
  <div v-if="data" class="comment-container">
    <TextSubheading weight="500" class="comment-container__title">
      {{ commentTitle }}
    </TextSubheading>
    <CommentCreateForm />
    <CommentList :comments="data" />
  </div>
</template>

<style scoped lang="scss">
.comment-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    border-bottom: solid 1px rgba(var(--gray-200));
    padding-bottom: 8px;
  }
}
</style>
