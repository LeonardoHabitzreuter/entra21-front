import React from 'react'

const Form = () => (
  <form>
    <h1>Formulário!</h1>
    <div>
      <label>Nome</label>
      <input name='name' placeholder='João da Silva' />
    </div>
    <div>
      <label>Email</label>
      <input
        type='email'
        name='email'
        placeholder='joão.silva@gmail.com'
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
    <button>Cadastrar</button>
  </form>
)

export default Form
