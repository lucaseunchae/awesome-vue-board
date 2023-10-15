<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseTextarea from '@/components/Base/BaseTextarea.vue'
import useCreateCommentMutation from '@/features/Comment/composables/useCreateCommentMutation'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

/* Router */
const route = useRoute()
const postId = Number(route.params.postId)

/* Local State */
const body = ref('')

/* Server State */
const { mutate, isLoading } = useCreateCommentMutation()

/* Event Handler */
const handleClickCreateButton = () => {
  mutate({
    queryParams: { postId },
    payload: { body: body.value }
  })
}
</script>

<template>
  <form class="comment-create-form">
    <BaseTextarea v-model="body" class="comment-create-form__textarea" />
    <BaseButton
      @click.prevent="handleClickCreateButton"
      :is-loading="isLoading"
      class="comment-create-form__create-button"
      background-color="var(--create)"
    >
      작성하기
    </BaseButton>
  </form>
</template>

<style scoped lang="scss">
.comment-create-form {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__textarea {
    height: 60px;
  }

  &__create-button {
    margin-left: auto;
  }
}
</style>
