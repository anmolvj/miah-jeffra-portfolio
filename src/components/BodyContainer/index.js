import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const BodyContainer = styled(Paper)`
  display: ${props => (Boolean(props.hidden) ? 'hidden' : 'block')};
  font-family: ${props => props.theme.font.family.secondary};
  font-size: 14px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export default ({ children, hidden }) => (
  <BodyContainer hidden={hidden}>{children}</BodyContainer>
)
