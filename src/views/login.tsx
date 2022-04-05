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

  return (
    <Card className='center'>
      <Card.Content header='LOGIN'/>
      <Card.Content>
        <Form>
          <Form.Input
            label='Email'
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
          <Form.Input
            label='Name'
            value={name}
            onChange={({target}) => setName(target.value)}
          />
          <Form.Field>
            <div><Button
              disabled={!name || !email}
              content='GO'
              onClick={onSignIn}
            /></div>
          </Form.Field>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default Login