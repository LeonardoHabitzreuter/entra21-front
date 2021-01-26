import React from 'react'
import { Title, CreateButton } from './styles'
import { Label as InputLabel } from '/ui'
import { useCreateUserContext } from '../CreateUser'
import useSendUser from '../../hooks/useSendUser'

type Props = {
  title: string
  buttonText: string
  emailProps: {
    type: string
    placeholder: string
  }
}

const CreateUserForm = (props: Props) => {
  // ecmascript destructuring
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    profile,
    setProfile
  } = useCreateUserContext()

  const onSubmit = useSendUser()

  return (
    // Prevenindo que a página sofra um reload
    <form onSubmit={onSubmit}>
      <Title>{props.title}</Title>
      <div>
        <InputLabel>Nome</InputLabel>
        <input
          name='name'
          placeholder='João da Silva'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
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
      <div>
        <InputLabel>Perfil</InputLabel>
        <select
          value={profile}
          onChange={e => setProfile(parseInt(e.target.value))}
        >
          <option></option>
          <option value={0}>CBF</option>
          <option value={1}>Torcedor</option>
        </select>
      </div>
      <CreateButton color='primary'>{props.buttonText}</CreateButton>
    </form>
  )
}

export default CreateUserForm
