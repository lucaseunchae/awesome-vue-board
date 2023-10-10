<script setup lang="ts">
import TextBody2 from '@/components/Text/TextBody2.vue'
import TextCaption from '@/components/Text/TextCaption.vue'
import TextSubheading from '@/components/Text/TextSubheading.vue'
import type { CommentTemplate } from '@/model/Comment'
import { computed } from 'vue'

/* Props */
const props = withDefaults(defineProps<CommentTemplate>(), {})

/* Local State */
const shortName = computed(() => props.name.split(' ')[0])
</script>

<template>
  <div class="comment-list-item">
    <div class="comment-list-item__header">
      <TextSubheading weight="550" class="comment-list-item__writer">
        {{ shortName }}
      </TextSubheading>
      <TextCaption class="comment-list-item__created">1시간 전</TextCaption>
    </div>
    <TextBody2 class="comment-list-item__body">{{ body }}</TextBody2>
  </div>
</template>

<style scoped lang="scss">
.comment-list-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  background-color: rgba(var(--gray-100));

  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 30px;
  }

  &__created {
    color: rgba(var(--gray-400));
  }

  &__body {
    white-space: pre-wrap;
  }
}
</style>
