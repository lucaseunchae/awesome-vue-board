import { fetchPost } from '@/api/post'
import type { PostRequest } from '@/model/Post'
import { useQuery } from '@tanstack/vue-query'

const useFetchPostQuery = (req: PostRequest) => {
  return useQuery({
    queryKey: ['fetchPostQuery', req.routeParams.id],
    queryFn: () => fetchPost(req)
  })
}

export default useFetchPostQuery
