import {Dimmer, Loader} from 'semantic-ui-react'

const LoadingScreen = ({loader}: {loader: boolean}) => {

  return (
    <Dimmer active={loader}>
      <Loader inverted>
        Loading
      </Loader>
    </Dimmer>
  )
}

export default LoadingScreen