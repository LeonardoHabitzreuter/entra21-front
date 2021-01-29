import styled from 'styled-components'
import { Button, Typography } from '/ui'

export const CheckboxAndSelect = styled.div`
  display: flex;
  /* column | row */
  flex-direction: column;
  /* center | flex-start | flex-end */
  justify-content: flex-end;
  /* center | flex-start | flex-end */
  align-items: flex-start;

  background-color: yellow;
  height: 140px;
`

export const CreateButton = styled(Button).attrs({
  color: 'primary'
})`
  margin-top: 16px;
`
