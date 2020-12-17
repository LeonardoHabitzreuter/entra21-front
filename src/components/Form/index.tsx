import React from 'react'
import { Title } from './styles'

// type EmailProps = {
//   type: string
//   placeholder: string
// }

type Props = {
  title: string
  buttonText: string
  // emailProps: EmailProps
  emailProps: {
    type: string
    placeholder: string
  }
}

// const Form = (props) => (
//   props.title
//   props.buttonText
  
// EcmaScript - Destructuring
const Form = ({ title, buttonText, emailProps }: Props) => (
  <form>
    <Title>{title}</Title>
    <div>
      <label>Nome</label>
      <input name='name' placeholder='João da Silva' />
    </div>
    <div>
      <label>Email</label>
      <input
        type={emailProps.type}
        name='email'
        placeholder={emailProps.placeholder}
      />
    </div>
    <div>
      <label>Data</label>
      <input
        type='date'
        name='date'
      />
    </div>
    <div>
      <label>Preço</label>
      <input
        type='number'
        name='price'
      />
    </div>
    <div>
      <label>Senha</label>
      <input
        type='password'
        name='password'
      />
    </div>
    <div>
      <label>Sim ou não</label>
      <input
        type='checkbox'
        name='yesOrNo'
      />
    </div>
    <div>
      <label>Select</label>
      <select>
        <option value='1'>Test</option>
        <option value='2'>Test2</option>
      </select>
    </div>
    <button>{buttonText}</button>
  </form>
)

export default Form
