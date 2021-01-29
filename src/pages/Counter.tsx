import React, { useEffect, useState } from 'react'
import { useEffectOnce } from 'react-use'
import withPage from './withPage'

const MyButton = ({ onClick }: { onClick: () => void }) => {
  console.log('botão renderizou')

  return (
    <button onClick={onClick}>Click me</button>
  )
}

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  useEffectOnce(() => {
    console.log('Counter renderizou')
  })
  // array de dependencias

  return (
    <>
      <Title>Counter Title</Title>
      <p>{counter}</p>
      <MyButton onClick={() => setCounter(counter + 1)} />
    </>
  )
}

const Title = ({ children }: { children: string }) => {
  useEffect(() => {
    console.log(`titulo ${children} renderizou`)
  })

  return (
    <h3>{children}</h3>
  )
}

const Page = () => {
  useEffect(() => {
    console.log('Page renderizou')
  })

  return (
    <main>
      <Title>Counter page</Title>
      <Counter />
    </main>
  )
}

export default withPage('Counter', Page)
