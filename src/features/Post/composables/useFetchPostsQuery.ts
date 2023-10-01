import { fetchPosts } from '@/api/post'
import { useQuery } from '@tanstack/vue-query'

const   useFetchPostsQuery = () => {
  return useQuery({
    queryKey: ['fetchPostsQuery'],
    queryFn: fetchPosts
  })
}

export default useFetchPostsQuery
