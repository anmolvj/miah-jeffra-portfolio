import React from 'react'
import styled from 'styled-components'
import Review from './Review'

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 10px;
  max-width: 650px;
  @media (max-width: 750px) {
    width: 90%;
  }
`

export default ({ reviews }) => (
  <ReviewContainer>
    {reviews.map(review => (
      <Review {...review} />
    ))}
  </ReviewContainer>
)
