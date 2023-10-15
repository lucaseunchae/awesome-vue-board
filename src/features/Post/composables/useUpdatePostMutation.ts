import { updatePost } from '@/api/post'
import useAlertDialogStore from '@/composables/useAlertDialogStore'
import useToastMessageStore from '@/composables/useToastMessageStore'
import type { UpdatePostRequest } from '@/model/Post'
import { useMutation } from '@tanstack/vue-query'
import axios from 'axios'

const useUpdatePostMutation = () => {
  /* Store */
  const { showToastMessage } = useToastMessageStore()
  const { showAlertDialog } = useAlertDialogStore()

  return useMutation({
    mutationFn: (req: UpdatePostRequest) => updatePost(req),
    onSuccess: () => {
      showToastMessage('수정되었습니다.', 'Success')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        showAlertDialog(error.message)
      }
    }
  })
}

export default useUpdatePostMutation
