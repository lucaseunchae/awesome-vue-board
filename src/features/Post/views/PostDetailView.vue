<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
import TextBody1 from '@/components/Text/TextBody1.vue'
import TextCaption from '@/components/Text/TextCaption.vue'
import TextHeading1 from '@/components/Text/TextHeading1.vue'
import useFetchPostQuery from '@/features/Post/composables/useFetchPostQuery'
import { useRoute, useRouter } from 'vue-router'

/* Router */
const router = useRouter()
const route = useRoute()
const id = Number(route.params.id)

/* Server State */
const { data } = useFetchPostQuery({
  routeParams: { id }
})

/* Event Handler */
const handleClickUpdateButton = () => {
  router.push({
    name: 'posts/update',
    params: { id }
  })
}
</script>

<template>
  <div v-if="data" class="post-detail-view">
    <TextCaption weight="500" class="post-detail-view__category">전체 게시글</TextCaption>
    <TextHeading1 weight="700" class="post-detail-view__title">{{ data.title }}</TextHeading1>
    <div class="post-detail-view__infoes">
      <TextCaption>eunchae</TextCaption>
      <span>|</span>
      <TextCaption>2023-09-27</TextCaption>
    </div>
    <TextBody1 class="post-detail-view__body">{{ data.body }}</TextBody1>
    <BaseButton
      @click="handleClickUpdateButton"
      background-color="var(--update)"
      class="post-detail-view__update-button"
    >
      수정하기
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.post-detail-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: var(--view-padding);

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

  &__update-button {
    margin-left: auto;
  }
}
</style>
