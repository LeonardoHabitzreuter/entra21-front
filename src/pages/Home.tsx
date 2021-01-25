import React from 'react'
import Form from '../components/CreateUserForm'
import { FirstFormTitle } from '../common/Titles'
import Logo from '../components/Logo'

const emailProps = {
  type: 'email',
  placeholder: 'joão.silva@gmail.com'
}

// Com return (quando temos mais código além de apenas um retorno)
// Esta função retorna HTML (JSX), então logo ela é um COMPONENTE
export const Home = () => {
  return (
    <main>
      <Logo />
      {/* <Texts /> */}
      <Form
        title={`${FirstFormTitle}`}
        buttonText='Cadastrar'
        emailProps={emailProps}
      />
      {/* <Form title={SecondFormTitle} buttonText='Enviar' emailProps={emailProps} /> */}
    </main>
  )
}

export default Home
