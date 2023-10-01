import axiosInstance from '@/api/config'
import type { PostsResponse } from '@/model/Post'

export const fetchPosts = async () => (await axiosInstance.get<PostsResponse>('/posts')).data
