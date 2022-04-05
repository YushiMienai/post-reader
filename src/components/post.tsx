import React from 'react'
import {Grid} from 'semantic-ui-react'
import moment from 'moment'

function Post({created_time, message = []}: {created_time: string, message: object[]}) {

  return (
    <Grid
      celled
    >
      <Grid.Row>
        <Grid.Column>{moment(created_time).format('MMMM DD, YYYY HH:mm:ss')}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          {!!message.length && message.map(({ text, highlighted}: any, idx: number) =>
            <label
              key={idx}
              className={highlighted ? 'highlighted' : ''}
            >
              {text}
            </label>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default Post