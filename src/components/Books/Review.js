import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 10px;
  padding: 0px;
  width: 400px;
  font-family: ${props => props.theme.font.family.secondary};
  @media (max-width: 650px) {
    width: 300px;
  }
  @media (max-width: 550px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 150px;
  }
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
  color: ${props => props.theme.color.teal};
`

export default ({ reviewerName, message }) => (
  <Container>
    <Review>{message}</Review>
    <Reviewer> - {reviewerName}</Reviewer>
  </Container>
)
