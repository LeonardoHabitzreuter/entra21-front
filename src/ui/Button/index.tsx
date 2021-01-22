import React from 'react'
import { Colors, colors } from '/theme/colors'
import StyledButton from './styles'

type Props = {
  children: string
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  color: Colors
}

const Button = ({ color, children, type = 'submit', ...rest }: Props) => {
  return (
    <StyledButton type={type} color={colors[color]} {...rest}>{children}</StyledButton>
  )
}

export default Button
