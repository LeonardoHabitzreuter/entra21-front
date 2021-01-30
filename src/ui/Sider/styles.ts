import styled from 'styled-components'

export const Header = styled.div`
  background-color: #74778f;
  padding: 10px;
`

export const Wrapper = styled.div<{open: boolean}>`
  max-width: ${({ open }) => open ? '100%' : '0%'};;
  background-color: #9196b8;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  transition: max-width 0.7s ease-out;
`

export const Content = styled.div`
  padding: 20px;
`
