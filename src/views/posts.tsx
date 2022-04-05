import {useEffect, useState} from 'react'
import {RootStateOrAny, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'
// @ts-ignore
import {getPosts} from '@actions/posts'
import {LoadingScreen, Post, UserMenu, PostControls} from 'components'
import {orderBy} from 'lodash'
import {highlightString} from 'helpers/strings'
import queryString from 'query-string'
import {PostType} from 'types'

function Posts() {
  const {search} = useLocation()
  const navigate = useNavigate()

  const emptyParams: PostType = {
    page: 1,
    user: '',
    searchName: '',
    searchString: '',
    sortOrder: 'asc'
  }
  const searchParams = queryString.parse(search)

  const {posts} = useSelector((state: RootStateOrAny) => state.posts)
  const {loader} = useSelector((state: RootStateOrAny) => state.loader)

  const [params, setParams] = useState({
    ...emptyParams,
    ...searchParams,
  })

  const loadPosts = (page: number) => {
    getPosts(page)
    setParams({...params, page, searchName: '', searchString: ''})
  }

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
            <UserMenu
              posts={posts}
              params={params}
              searchWith={searchWith}
            />
          </Grid.Column>
          <Grid.Column
            className='controlMenu'
            widescreen={13}
            computer={12}
            tablet={11}
          >
            <PostControls
              params={params}
              searchWith={searchWith}
            />
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