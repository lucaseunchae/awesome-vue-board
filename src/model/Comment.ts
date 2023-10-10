export type CommentRequest = {
  routeParams: {
    id: number
  }
}

export type CommentTemplate = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type CommentResponse = CommentTemplate

export interface UpdateCommentPayload {
  body: string
}

export type UpdateCommentRequest = {
  routeParams: {
    id: number
  }
  payload: UpdateCommentPayload
}

export type UpdateCommentResponse = {}

export type DeleteCommentRequest = {
  routeParams: {
    id: number
  }
}

export type DeleteCommentResponse = {}

export interface CommentsRequest {
  queryParams: {
    postId: number
  }
}

export type CommentsResponse = CommentTemplate[]
