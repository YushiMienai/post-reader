import {useState} from 'react'
import {Button, Card, Form} from 'semantic-ui-react'
// @ts-ignore
import {register} from '@actions/register'

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onSignIn = async function () {
    await register({email, name})
  }

  const formParams = [
    {value: email, label: 'Email', onChange: setEmail},
    {value: name, label: 'Name', onChange: setName}
  ]

  return (
    <Card className='center'>
      <Card.Content header='LOGIN'/>
      <Card.Content>
        <Form>
          {formParams.map(({value, label, onChange}, idx) =>
            <Form.Input
              key={idx}
              label={label}
              value={value}
              onChange={({target}) => onChange(target.value)}
            />
          )}
          <Form.Field>
            <Button
              disabled={!name || !email}
              content='GO'
              onClick={onSignIn}
            />
          </Form.Field>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default Login