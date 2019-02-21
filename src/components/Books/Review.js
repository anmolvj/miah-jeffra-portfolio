import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
`

const Review = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
`

const Reviewer = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
`

export default ({ reviewerName, message }) => (
  <Container>
    <Review>{message}</Review>
    <Reviewer> - {reviewerName}</Reviewer>
  </Container>
)
