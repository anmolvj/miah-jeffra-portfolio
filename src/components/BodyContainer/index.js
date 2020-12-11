import React from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
  display: ${(props) => (Boolean(props.hidden) ? 'hidden' : 'block')};
  font-family: ${(props) => props.theme.font.family.secondary};
  margin: auto;
  font-size: 12px;
  font-weight: bold;
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
