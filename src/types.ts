export type ParamsType = {
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

export type PostType = {
  created_time: string,
  from_id: string,
  from_name: string,
  id: string,
  message: string,
  type: string
}
