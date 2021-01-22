import styled, { css } from 'styled-components'

const commonStyles = css`
  border: 2px solid #7d7c7a;
  padding: 4px;
`

export const UL = styled.ul`
  list-style: none;
`

export const TH = styled.th`
  ${commonStyles}
`

export const TD = styled.td`
  ${commonStyles}
  
`
