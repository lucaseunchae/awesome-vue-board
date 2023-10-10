import { fetchComments } from '@/api/comment'
import type { CommentsRequest } from '@/model/Comment'
import { useQuery } from '@tanstack/vue-query'

const useFetchCommentsQuery = (req: CommentsRequest) => {
  return useQuery({
    queryKey: ['fetchCommentsQuery', req.queryParams],
    queryFn: () => fetchComments(req)
  })
}

export default useFetchCommentsQuery
