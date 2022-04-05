import {useCallback, useEffect, useState} from 'react'
import {RootStateOrAny, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {Button, Grid, Input, Label, Menu} from 'semantic-ui-react'
// @ts-ignore
import {getPosts} from '@actions/posts'
import {LoadingScreen, Pager, Post} from 'components'
import {uniqBy, countBy, orderBy, debounce} from 'lodash'
import {highlightString} from 'helpers/strings'
import queryString from 'query-string'

function Posts() {
  const {search} = useLocation()
  const navigate = useNavigate()

  type ParamType = {
    page: number,
    user: string,
    searchName: string,
    searchString: string,
    sortOrder: 'asc' | 'desc'
  }

  type UserType = {
    id: string,
    name: string
  }

  const emptyParams: ParamType = {
    page: 1,
    user: '',
    searchName: '',
    searchString: '',
    sortOrder: 'asc'
  }
  const searchParams = queryString.parse(search)

  const {posts} = useSelector((state: RootStateOrAny) => state.posts)
  const {loader} = useSelector((state: RootStateOrAny) => state.loader)
  // @ts-ignore
  const users: UserType[] = orderBy(uniqBy(posts.map((post: any) => ({id: post.from_id, name: post.from_name})), 'id'), ['name'])
  const count = countBy(posts, 'from_id')

  const [params, setParams] = useState({
    ...emptyParams,
    ...searchParams,
  })
  const [searchPage, setSearchPage] = useState(params.page)

  const loadPosts = (page: number) => {
    getPosts(page)
    setParams({...params, page, searchName: '', searchString: ''})
    setSearchPage(page)
  }

  // eslint-disable-next-line
  const findResults = useCallback(debounce(async page => setParams({...params, page}), 600), [])

  useEffect(() => {
    if (!!users.length && !params.user) searchWith({user: users[0].id})
    // eslint-disable-next-line
  }, [params.user, users])

  useEffect(() => {
    findResults(searchPage)
    // eslint-disable-next-line
  }, [searchPage])

  // eslint-disable-next-line
  useEffect(() => loadPosts(params.page), [params.page])

  useEffect(() => {
    navigate(`?page=${params.page}&user=${params.user}`)
    // eslint-disable-next-line
  }, [params.page, params.user])

  const displayedPosts = orderBy(posts.filter((post: any) =>
    post.from_id === params.user && post.message.toLowerCase().includes(params.searchString.toLowerCase()))
    , ['created_time'], [params.sortOrder])

  const searchWith = (_params: any) => {
    setParams({...params, ..._params})
  }

  return (
    <div className='full-height'>
      <LoadingScreen loader={loader} />
      <Grid
        container
        stackable
      >
        <Grid.Row>
          <Grid.Column
            widescreen={3}
            computer={4}
            tablet={5}
          >
            <Menu vertical>
              <Menu.Item>
                <Input
                  placeholder='Search...'
                  value={params.searchName}
                  onChange={({target}) => searchWith({searchName: target.value})}
                />
              </Menu.Item>
              {!!users.length && users.filter(({name}: any) => !params.searchName || name.toLowerCase().includes(params.searchName.toLowerCase()))
                .map(({id, name}: any) =>
                  <Menu.Item
                    key={id}
                    active={id === params.user}
                    onClick={() => searchWith({user: id})}
                  >
                    {name}
                    <Label>{count[id]}</Label>
                  </Menu.Item>
              )}
            </Menu>
          </Grid.Column>
          <Grid.Column
            className='controlMenu'
            widescreen={13}
            computer={12}
            tablet={11}
          >
            <Input
              className='pageInput'
              value={searchPage}
              onChange={({target}) => setSearchPage(Math.max(1, Math.min(99, parseInt(target.value))))}
            />
            <Pager
              page={params.page}
              searchWith={searchWith}
            />
            <Input
              placeholder='Search...'
              value={params.searchString}
              onChange={({target}) => searchWith({searchString: target.value})}
            />
            <Button.Group>
              <Button
                icon='chevron up'
                disabled={params.sortOrder === 'asc'}
                onClick={() => searchWith({sortOrder: 'asc'})}
              />
              <Button
                icon='chevron down'
                disabled={params.sortOrder === 'desc'}
                onClick={() => searchWith({sortOrder: 'desc'})}
              />
            </Button.Group>
            {!!displayedPosts.length && displayedPosts.map((post: any) =>
              <Post
                key={post.id}
                created_time={post.created_time}
                message={highlightString(post.message, params.searchString)}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Posts