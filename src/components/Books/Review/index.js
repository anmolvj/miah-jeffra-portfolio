import React from 'react'
import styled from 'styled-components'
import Review from './Review'

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    width: 95%;
    margin: auto;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export default ({ reviews }) => (
  <ReviewContainer>
    {reviews.map(review => (
      <Review {...review} />
    ))}
  </ReviewContainer>
)
