<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseTextarea from '@/components/Base/BaseTextarea.vue'
import TextHeading2 from '@/components/Text/TextHeading2.vue'
import useToastMessageStore from '@/composables/useToastMessageStore'
import useFetchPostQuery from '@/features/Post/composables/useFetchPostQuery'
import useUpdatePostMutation from '@/features/Post/composables/useUpdatePostMutation'
import type { UpdatePostPayload } from '@/model/Post'
import { reactive, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

/* Store */
const { showToastMessage } = useToastMessageStore()

/* Router */
const route = useRoute()
const id = Number(route.params.id)

/* Local State */
const formData = reactive<UpdatePostPayload>({
  userId: 0,
  id,
  title: '',
  body: ''
})

/* Server State */
const { data } = useFetchPostQuery({
  routeParams: { id }
})
const { mutate, isLoading } = useUpdatePostMutation()

/* Helper Function */
const validate = () => {
  if (!formData.title) {
    showToastMessage('제목을 입력해 주세요.', 'Warning')
    return false
  }
  if (!formData.body) {
    showToastMessage('내용을 입력해 주세요.', 'Warning')
    return false
  }

  return true
}

/* Event Handler */
const handleClickSaveButton = () => {
  if (validate()) {
    mutate({
      routeParams: { id },
      payload: formData
    })
  }
}

watchEffect(() => {
  if (data.value) {
    formData.userId = data.value.userId
    formData.title = data.value.title
    formData.body = data.value.body
  }
})
</script>

<template>
  <div v-if="data" class="post-update-view">
    <TextHeading2 weight="600" class="post-update-view__view-title">게시글 수정</TextHeading2>
    <BaseInput v-model="formData.title" label="제목" />
    <BaseTextarea v-model="formData.body" label="내용" />
    <BaseButton
      @click="handleClickSaveButton"
      :is-loading="isLoading"
      background-color="var(--save)"
      class="post-update-view__save-button"
    >
      <BaseIcon name="save" fill="1" />
      저장하기
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.post-update-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: var(--view-padding);
  padding-top: 50px;

  &__view-title {
    margin-bottom: 10px;
  }

  &__save-button {
    margin-left: auto;
  }
}
</style>
