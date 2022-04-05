import {SearchInput} from 'components/index'
import {countBy, orderBy, uniqBy} from 'lodash'
import {useEffect} from 'react'
import {Label, Menu} from 'semantic-ui-react'
import {PostType} from 'types'

function UserMenu({posts, params, searchWith}: {posts: object[], params: PostType, searchWith: Function}) {

  // @ts-ignore
  const users: UserType[] = orderBy(uniqBy(posts.map((post: any) => ({id: post.from_id, name: post.from_name})), 'id'), ['name'])
  const count = countBy(posts, 'from_id')

  useEffect(() => {
    if (!!users.length && !params.user) searchWith({user: users[0].id})
    // eslint-disable-next-line
  }, [params.user, users])

  return (
    <Menu vertical>
      <Menu.Item>
        <SearchInput
          name='searchName'
          value={params.searchName}
          searchWith={searchWith}
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
  )
}

export default UserMenu