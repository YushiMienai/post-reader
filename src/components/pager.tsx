import React from 'react'
import {Pagination} from 'semantic-ui-react'
import {MAX_PAGE_NUMBER} from 'types'

function Pager({page, searchWith}: {page: number, searchWith: Function}) {

  return (
    <Pagination
      secondary
      activePage={page}
      firstItem={null}
      lastItem={null}
      totalPages={MAX_PAGE_NUMBER}
      prevItem={null}
      nextItem={null}
      onPageChange={(e, {activePage}) => searchWith({page: activePage})}
    />
  )
}

export default Pager