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

export type PostsResponse = PostTemplate[]
