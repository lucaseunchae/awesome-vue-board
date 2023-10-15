<script setup lang="ts">
import BaseIcon from '@/components/Base/BaseIcon.vue'
import IconButton from '@/components/Common/IconButton.vue'
import TextBody2 from '@/components/Text/TextBody2.vue'
import TextCaption from '@/components/Text/TextCaption.vue'
import TextSubheading from '@/components/Text/TextSubheading.vue'
import type { DateString } from '@/model/Time'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

/* Props */
interface Props {
  id: number
  title: string
  writer?: string
  createdAt?: DateString
}
const props = withDefaults(defineProps<Props>(), {
  writer: 'eunchae',
  createdAt: '2023-09-27'
})

/* Router */
const router = useRouter()

/* Local State */
const isCollected = ref(false)
const isLike = ref(false)
const likeCount = computed(() => (isLike.value ? 2 : 1))

/* Event Handler */
const handleClickListItem = () => {
  router.push({
    name: 'posts/detail',
    params: {
      id: props.id
    }
  })
}
const handleClickLikeButton = () => {
  isLike.value = !isLike.value
}
const handleClickCollectButton = () => {
  isCollected.value = !isCollected.value
}
</script>

<template>
  <div @click="handleClickListItem" class="post-list-item">
    <BaseIcon name="account_circle" opsz="40" fill="1" class="post-list-item__avatar" />
    <div class="post-list-item__content-container">
      <TextSubheading weight="600" class="post-list-item__title">{{ title }}</TextSubheading>
      <div class="post-list-item__info-wrapper">
        <TextBody2 weight="550" class="post-list-item__writer">{{ writer }}</TextBody2>
        <TextCaption class="post-list-item__date">{{ createdAt }}</TextCaption>
      </div>
      <div class="post-list-item__buttons-wrapper">
        <IconButton
          @click.stop="handleClickLikeButton"
          shape="rounded"
          name="thumb_up"
          fill="1"
          opsz="18"
          class="post-list-item__button"
          :class="{ 'post-list-item__like-button--active': isLike }"
        />
        <TextCaption weight="600" class="post-list-item__like-count">
          {{ likeCount }} like
        </TextCaption>

        <IconButton
          @click.stop="handleClickCollectButton"
          shape="sharp"
          name="bookmark"
          fill="1"
          opsz="20"
          class="post-list-item__button post-list-item__collect-button"
          :class="{ 'post-list-item__collect-button--active': isCollected }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-list-item {
  display: flex;
  gap: 16px;
  padding-block: 20px;
  border-bottom: solid 1px rgba(var(--gray-200));

  &:hover {
    cursor: pointer;
    border-bottom-color: rgba(var(--blue-200));
  }

  &__avatar {
    color: rgba(var(--gray-500));
  }

  &__content-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
  }

  &__title {
    color: rgba(var(--gray-900));
  }

  &__info-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__writer {
    color: rgba(var(--blue-500));
  }

  &__date {
    color: rgba(var(--gray-400));
  }

  &__buttons-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 14px;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    color: rgba(var(--gray-400));
    background-color: rgba(var(--gray-100));
    border-radius: 50%;
  }

  &__like-button--active {
    color: rgba(var(--blue-500));
    background-color: rgba(var(--blue-100));
  }

  &__collect-button {
    position: absolute;
    right: 0;
  }

  &__collect-button--active {
    color: rgba(var(--yellow-500));
    background-color: rgba(var(--yellow-100));
  }

  &__like-count {
    color: rgba(var(--gray-400));
  }
}
</style>
