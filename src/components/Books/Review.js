import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 20px;
  padding: 0px;
  width: 90%;
  font-family: ${props => props.theme.font.family.secondary};
`

const Review = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-align: left;
`

const Reviewer = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.color.teal};
  padding-bottom: 5px;
`

export default ({ reviewerName, message }) => (
  <Container>
    <Reviewer>{reviewerName}</Reviewer>
    <Review>{message}</Review>
  </Container>
)
