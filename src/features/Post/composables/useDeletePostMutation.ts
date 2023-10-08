import { deletePost } from '@/api/post'
import useAlertDialogStore from '@/composables/useAlertDialogStore'
import useToastMessageStore from '@/composables/useToastMessageStore'
import type { DeletePostRequest } from '@/model/Post'
import { useMutation } from '@tanstack/vue-query'
import axios from 'axios'
import { useRouter } from 'vue-router'

const useDeletePostMutation = () => {
  /* Store */
  const { showToastMessage } = useToastMessageStore()
  const { showAlertDialog } = useAlertDialogStore()

  /* Router */
  const router = useRouter()

  return useMutation({
    mutationFn: (req: DeletePostRequest) => deletePost(req),
    onSuccess: () => {
      router.push({ name: 'home' })
      showToastMessage('삭제되었습니다.', 'Success')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        showAlertDialog(error.message)
      }
    }
  })
}

export default useDeletePostMutation
