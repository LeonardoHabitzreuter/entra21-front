import React from 'react'
import StyledButton from './styles'

type Props = {
  children: string
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
}

const Button = ({ children, onClick, type='submit', ...rest }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick} {...rest}>{children}</StyledButton>
  )
}

export default Button
