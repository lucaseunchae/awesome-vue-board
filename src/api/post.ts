import axiosInstance from '@/api/config'
import type { PostRequest, PostResponse, PostsResponse } from '@/model/Post'

export const fetchPost = async (req: PostRequest) =>
  (await axiosInstance.get<PostResponse>(`/posts/${req.routeParams.id}`)).data

export const fetchPosts = async () => (await axiosInstance.get<PostsResponse>('/posts')).data
