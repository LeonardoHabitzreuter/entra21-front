import React from 'react'
import StyledButton from './styles'

type Props = {
  children: string,
  onClick: () => void
}

const Button = ({ children, onClick, ...rest }: Props) => {
  console.log(rest)
  return (
    <StyledButton onClick={onClick} {...rest}>{children}</StyledButton>
  )
}

export default Button
