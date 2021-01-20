import React, { FormEvent, useState } from 'react'
import { Title, CreateButton } from './styles'
import { Label as InputLabel } from '../../ui'
import { login } from '../../api'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ email, password })
      .then(() => alert('Deu certo!'))
      .catch(() => alert('Login inválido'))
  }

  return (
    <form onSubmit={onSubmit}>
      <Title>Login</Title>
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
      <CreateButton color='primary'>Logar</CreateButton>
    </form>
  )
}

export default LoginForm
