import axiosInstance from '@/api/config'
import type {
  CommentRequest,
  CommentResponse,
  CommentsRequest,
  CommentsResponse,
  DeleteCommentRequest,
  DeleteCommentResponse,
  UpdateCommentRequest,
  UpdateCommentResponse
} from '@/model/Comment'

export const fetchComment = async (req: CommentRequest) =>
  (await axiosInstance.get<CommentResponse>(`/comments/${req.routeParams.id}`)).data

export const updateComment = async (req: UpdateCommentRequest) =>
  (await axiosInstance.put<UpdateCommentResponse>(`/comments/${req.routeParams.id}`, req.payload))
    .data

export const deleteComment = async (req: DeleteCommentRequest) =>
  (await axiosInstance.delete<DeleteCommentResponse>(`/comments/${req.routeParams.id}`)).data

export const fetchComments = async ({ queryParams: { postId } }: CommentsRequest) =>
  (await axiosInstance.get<CommentsResponse>('/comments', { params: { postId } })).data
