import React, { FormEvent, useState } from 'react'
import { CreateButton } from './styles'
import { Label as InputLabel, Typography, Sider } from '/ui'
import { login } from '/api'
import Logo from '../Logo'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [showSider, setShowSider] = useState(false)
  const [password, setPassword] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ email, password })
      .then(() => alert('Deu certo!'))
      .catch(() => alert('Login inválido'))
  }

  return (
    <>
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
        <CreateButton type='submit'>
          Logar
        </CreateButton>
      </form>
      <Sider open={showSider} onClose={() => setShowSider(false)}>
        <Logo />
      </Sider>
    </>
  )
}

export default LoginForm
