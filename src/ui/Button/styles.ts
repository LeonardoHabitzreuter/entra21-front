import styled from 'styled-components'

type Props = {
  color: string
}

const Button = styled.button<Props>`
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: ${({ color }) => color};
  color: white;
  cursor: pointer;

  /* hover > quando o mouse está em cima do elemento */
  &:active, &:hover {
    background-color: #09de53;
  }
`

export default Button
