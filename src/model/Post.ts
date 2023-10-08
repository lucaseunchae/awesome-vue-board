export type PostRequest = {
  routeParams: {
    id: number
  }
}

export type PostTemplate = {
  userId: number
  id: number
  title: string
  body: string
}

export type PostResponse = PostTemplate

export type UpdatePostPayload = PostTemplate

export type UpdatePostRequest = {
  routeParams: {
    id: number
  }
  payload: UpdatePostPayload
}

export type UpdatePostResponse = {}

export type DeletePostRequest = {
  routeParams: {
    id: number
  }
}

export type DeletePostResponse = {}

export type PostsResponse = PostTemplate[]
