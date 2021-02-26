import styled, { css } from 'styled-components'
import { desktop, tablet } from '/theme'

export type StyledProps = {
  color: string
}

export const H1 = styled.h1<StyledProps>`
  font-size: 32px;
  color: ${({ color }) => color};
`

export const H2 = styled.h2<StyledProps>`
  font-size: 22px;
  color: ${({ color }) => color};

  ${tablet(css`
    font-size: 28px;
  `)}

  ${desktop(css`
    font-size: 32px;
  `)}
`

export const H3 = styled.h3<StyledProps>`
  font-size: 24px;
  ${({ color }) => css`color: ${color};`};
`

export const Text = styled.p<StyledProps>`
  font-size: 16px;
  ${({ color }) => `color: ${color};`};
`
