export type Post = {
  databaseId: number
  title: string
  date: string
  content: string
  featuredImage: {
    node: {
      mediaItemUrl: string
    }
  }
  categories: {
    nodes: Array<{
      databaseId: number
      name: string
    }>
  }
  tags: {
    nodes: Array<{
      databaseId: number
      name: string
    }>
  }
}

export type ViewPost = Post & {
  dateDiff: string,
  formattedDate: string,
  clippedTitle: string
}