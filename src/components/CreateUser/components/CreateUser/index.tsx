import React, { createContext, useContext, useState } from 'react'
import Logo from '/components/Logo'
import Form from '../Form'
import { FirstFormTitle } from '/common/Titles'
import { Main, Resume } from './styles'

type ContextValues = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  // profile: number | undefined
  // nullable syntax
  profile?: number
  setProfile: React.Dispatch<React.SetStateAction<number | undefined>>
}

const emailProps = {
  type: 'email',
  placeholder: 'joão.silva@gmail.com'
}

const CreateUserContext = createContext<ContextValues>({
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  profile: undefined,
  setProfile: () => {}
})

// criado um hook customizado
export const useCreateUserContext = () => {
  // um hook pode chamar outro hook
  return useContext(CreateUserContext)
}

const CreateUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profile, setProfile] = useState<number>()

  return (
    <Main>
      <CreateUserContext.Provider value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        profile,
        setProfile
      }}>
        <section>
          <Logo />
          <Form
            title={`${FirstFormTitle}`}
            buttonText='Cadastrar'
            emailProps={emailProps}
          />
        </section>
        <Resume />
      </CreateUserContext.Provider>
    </Main>
  )
}

export default CreateUser
