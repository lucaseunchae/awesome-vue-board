import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useAlertDialogStore = defineStore('alertDialog', () => {
  /* State */
  const dialogs = reactive<string[]>([])

  /* Action */
  const showAlertDialog = (body: string) => {
    dialogs.push(body)
  }

  return { dialogs, showAlertDialog }
})

export default useAlertDialogStore
