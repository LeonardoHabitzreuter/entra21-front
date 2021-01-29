import React, { FormEvent, useState } from 'react'
import { CreateButton } from './styles'
import { Label as InputLabel, Typography } from '/ui'
import { login } from '/api'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ email, password })
      .then(() => alert('Deu certo!'))
      .catch(() => alert('Login inválido'))
  }

  return (
    <form onSubmit={onSubmit}>
      <Typography variant='h2'>Login</Typography>
      <div>
        <InputLabel>Email</InputLabel>
        <input
          type='email'
          name='email'
          placeholder='jhon.test@gmail.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <InputLabel>Senha</InputLabel>
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <CreateButton onClick={() => history.push('/counter')}>
        Logar
      </CreateButton>
    </form>
  )
}

export default LoginForm
