import {Input} from 'semantic-ui-react'

function SearchInput({name, value, searchWith}: {name: string, value: string, searchWith: Function}) {

  return(
    <Input
      placeholder='Search...'
      value={value}
      onChange={({target}) => searchWith({[name]: target.value})}
    />
  )
}

export default SearchInput