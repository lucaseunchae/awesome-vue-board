import { createComment } from '@/api/comment'
import useAlertDialogStore from '@/composables/useAlertDialogStore'
import useToastMessageStore from '@/composables/useToastMessageStore'
import type { CreateCommentRequest } from '@/model/Comment'
import { useMutation } from '@tanstack/vue-query'
import axios from 'axios'

const useCreateCommentMutation = () => {
  /* Store */
  const { showToastMessage } = useToastMessageStore()
  const { showAlertDialog } = useAlertDialogStore()

  return useMutation({
    mutationFn: (req: CreateCommentRequest) => createComment(req),
    onSuccess: () => {
      showToastMessage('작성되었습니다.', 'Success')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        showAlertDialog(error.message)
      }
    }
  })
}

export default useCreateCommentMutation
