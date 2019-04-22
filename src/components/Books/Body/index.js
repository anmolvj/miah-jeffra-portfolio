import React from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
  font-family: ${props => props.theme.font.family.secondary};
  margin: auto;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
`

export default ({ description, hidden }) =>
  !Boolean(hidden) && (
    <BodyContainer>
      <p>{description}</p>
    </BodyContainer>
  )
