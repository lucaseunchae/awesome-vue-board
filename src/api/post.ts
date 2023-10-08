import axiosInstance from '@/api/config'
import type { PostRequest, PostResponse, PostsResponse, UpdatePostRequest } from '@/model/Post'

export const fetchPost = async (req: PostRequest) =>
  (await axiosInstance.get<PostResponse>(`/posts/${req.routeParams.id}`)).data

export const updatePost = async (req: UpdatePostRequest) =>
  (await axiosInstance.put<UpdatePostRequest>(`/posts/${req.routeParams.id}`, req.payload)).data

export const fetchPosts = async () =>
  (await axiosInstance.get<PostsResponse>('/posts')).data.slice(0, 10)
