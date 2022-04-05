import React from 'react'
import {Pagination} from 'semantic-ui-react'

function Pager({page, searchWith}: {page: number, searchWith: Function}) {

  return (
    <Pagination
      secondary
      activePage={page}
      firstItem={null}
      lastItem={null}
      totalPages={99}
      prevItem={null}
      nextItem={null}
      onPageChange={(e, {activePage}) => searchWith({page: activePage})}
    />
  )
}

export default Pager