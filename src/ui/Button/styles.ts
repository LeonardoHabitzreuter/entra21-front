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

  &:active {
    background-color: #09de53;
  }
`

export default Button
