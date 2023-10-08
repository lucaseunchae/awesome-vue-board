import axiosInstance from '@/api/config'
import type {
  DeletePostRequest,
  DeletePostResponse,
  PostRequest,
  PostResponse,
  PostsResponse,
  UpdatePostRequest,
  UpdatePostResponse
} from '@/model/Post'

export const fetchPost = async (req: PostRequest) =>
  (await axiosInstance.get<PostResponse>(`/posts/${req.routeParams.id}`)).data

export const updatePost = async (req: UpdatePostRequest) =>
  (await axiosInstance.put<UpdatePostResponse>(`/posts/${req.routeParams.id}`, req.payload)).data

export const deletePost = async (req: DeletePostRequest) =>
  (await axiosInstance.delete<DeletePostResponse>(`/posts/${req.routeParams.id}`)).data

export const fetchPosts = async () =>
  (await axiosInstance.get<PostsResponse>('/posts')).data.slice(0, 10)
