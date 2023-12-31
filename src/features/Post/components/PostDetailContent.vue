<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'
import TextBody1 from '@/components/Text/TextBody1.vue'
import TextCaption from '@/components/Text/TextCaption.vue'
import TextHeading1 from '@/components/Text/TextHeading1.vue'
import useConfirmDialogStore from '@/composables/useConfirmDialogStore'
import useDeletePostMutation from '@/features/Post/composables/useDeletePostMutation'
import useFetchPostQuery from '@/features/Post/composables/useFetchPostQuery'
import { useRoute, useRouter } from 'vue-router'

/* Router */
const router = useRouter()
const route = useRoute()
const id = Number(route.params.id)

/* Store */
const { showConfirmDialog } = useConfirmDialogStore()

/* Server State */
const { data } = useFetchPostQuery({
  routeParams: { id }
})
const { mutate: deleteMutate, isLoading: isLoadingDelete } = useDeletePostMutation()

/* Event Handler */
const handleClickDeleteButton = () => {
  showConfirmDialog('정말 삭제하시겠습니까?', () => {
    deleteMutate({ routeParams: { id } })
  })
}
const handleClickUpdateButton = () => {
  router.push({
    name: 'posts/update',
    params: { id }
  })
}
</script>

<template>
  <div v-if="data" class="post-detail-content">
    <TextCaption weight="500" class="post-detail-content__category">전체 게시글</TextCaption>
    <TextHeading1 weight="700" class="post-detail-content__title">{{ data.title }}</TextHeading1>
    <div class="post-detail-content__infoes">
      <TextCaption>eunchae</TextCaption>
      <span>|</span>
      <TextCaption>2023-09-27</TextCaption>
    </div>
    <TextBody1 class="post-detail-content__body">{{ data.body }}</TextBody1>
    <div class="post-detail-content__buttons">
      <BaseButton
        @click="handleClickDeleteButton"
        :is-loading="isLoadingDelete"
        type="outlined"
        text-color="var(--gray-400)"
      >
        <BaseIcon name="delete" />
        삭제하기
      </BaseButton>
      <BaseButton @click="handleClickUpdateButton" background-color="var(--update)">
        <BaseIcon name="edit" />
        수정하기
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-detail-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &__category {
    color: rgba(var(--gray-900));
  }

  &__title {
    text-align: center;
    max-width: 800px;
  }

  &__infoes {
    display: flex;
    justify-content: space-between;
    width: 140px;
    color: rgba(var(--gray-400));
  }

  &__body {
    margin-top: 10px;
    width: 90%;
    white-space: pre-wrap;
  }

  &__buttons {
    display: flex;
    gap: 10px;
    margin-left: auto;
  }
}
</style>
