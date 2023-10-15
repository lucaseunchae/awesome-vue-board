import type { ToastMessageProps, ToastMessageState } from '@/components/Common/ToastMessage.vue'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useToastMessageStore = defineStore('toastMessage', () => {
  /* State */
  const messages = reactive<ToastMessageProps[]>([])

  /* Action */
  const showToastMessage = (body: string, state: ToastMessageState) => {
    messages.push({ body, state })
  }

  return { messages, showToastMessage }
})

export default useToastMessageStore
