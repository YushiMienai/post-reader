export type PostType = {
  page: number,
  user: string,
  searchName: string,
  searchString: string,
  sortOrder: 'asc' | 'desc'
}

export type UserType = {
  id: string,
  name: string
}