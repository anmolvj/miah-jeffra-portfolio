import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 10px;
  padding: 0px;
`

const Review = styled.div`
  font-size: 12px;
  text-align: left;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`

const Reviewer = styled.div`
  font-size: 12px;
  text-align: right;
`

export default ({ reviewerName, message }) => (
  <Container>
    <Review>{message}</Review>
    <Reviewer> - {reviewerName}</Reviewer>
  </Container>
)
