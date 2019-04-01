import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const BodyContainer = styled(Paper)`
  display: ${props => (Boolean(props.hidden) ? 'hidden' : 'block')};
  font-family: ${props => props.theme.font.family.secondary};
  margin: auto;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 650px;
  @media (max-width: 750px) {
    width: 90%;
  }
`

export default ({ children, hidden }) => (
  <BodyContainer hidden={hidden}>{children}</BodyContainer>
)
