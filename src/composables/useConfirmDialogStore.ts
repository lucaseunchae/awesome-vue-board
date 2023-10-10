import { defineStore } from 'pinia'
import { ref } from 'vue'

const useConfirmDialogStore = defineStore('confirmDialog', () => {
  /* State */
  const isShow = ref(false)
  const body = ref('')
  const callback = ref<Function>(() => {})

  /* Action */
  const showConfirmDialog = (bodyArg: string, callbackArg: Function) => {
    body.value = bodyArg
    callback.value = callbackArg
    isShow.value = true
  }
  const initialize = () => {
    body.value = ''
    callback.value = () => {}
  }

  return { isShow, body, callback, showConfirmDialog, initialize }
})

export default useConfirmDialogStore
