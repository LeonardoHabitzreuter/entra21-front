import React from 'react'
import { Wrapper, Header, Content } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

const Sider = ({ open, onClose, children }: Props) => (
  <Wrapper open={open}>
    <Header>
      <FontAwesomeIcon
        icon={faAngleDoubleRight}
        color='white'
        onClick={onClose}
      />
    </Header>
    <Content>
      {children}
    </Content>
  </Wrapper>
)

export default Sider