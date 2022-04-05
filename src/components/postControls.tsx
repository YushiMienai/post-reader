import {Pager, SearchInput} from 'components'
import {debounce} from 'lodash'
import {useCallback, useEffect, useState} from 'react'
import {Button, Input} from 'semantic-ui-react'
import {ParamsType} from 'types'

function PostControls({params, searchWith}: {params: ParamsType, searchWith: Function}) {
  const [searchPage, setSearchPage] = useState(params.page.toString())

  // eslint-disable-next-line
  const findResults = useCallback(debounce(async page => {
    page = Math.max(1, Math.min(99, parseInt(page)))
    !isNaN(page) && searchWith({page})
  }, 600), [])

  useEffect(() => {
    findResults(searchPage)
    // eslint-disable-next-line
  }, [searchPage])

  useEffect(() => setSearchPage(params.page.toString()), [params.page])

  return (
    <>
      <Input
        className='pageInput'
        value={searchPage}
        onChange={({target}) => setSearchPage(target.value)}
      />
      <Pager
        page={params.page}
        searchWith={searchWith}
      />
      <SearchInput
        name='searchString'
        value={params.searchString}
        searchWith={searchWith}
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
    </>
  )
}

export default PostControls