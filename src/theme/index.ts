import { css, FlattenInterpolation, FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components'

type Style = FlattenSimpleInterpolation | FlattenInterpolation<ThemedStyledProps<any, any>>

const minWidth = (breakpoint: number) => (styles: Style) => css`
  @media (min-width: ${breakpoint}px) {
    ${styles}
  }
`

export const tablet = minWidth(768)
export const desktop = minWidth(1024)
