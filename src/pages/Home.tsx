import React, { useState } from 'react'
import Texts from '../components/Texts'
import Form from '../components/Form'
import { FirstFormTitle, SecondFormTitle } from '../common/Titles'
import Logo from '../components/Logo'

const myNumber = 6

const emailProps = {
  type: 'email',
  placeholder: 'joão.silva@gmail.com'
}

// Com return (quando temos mais código além de apenas um retorno)
// Esta função retorna HTML (JSX), então logo ela é um COMPONENTE
export const Home = () => {
  const [counter, setCounter] = useState(1)
  
  return (
    <main>
      <Logo />
      {/* <Texts /> */}
      <Form
        title={`${FirstFormTitle} ${counter}`}
        buttonText='Cadastrar'
        emailProps={emailProps}
        setCounter={() => setCounter(counter + 1)}
      />
      {/* <Form title={SecondFormTitle} buttonText='Enviar' emailProps={emailProps} /> */}
    </main>
  )
}

export default Home