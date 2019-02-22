import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

import ReviewBox from './Review'
import PurchaseLink from './PurchaseLink'
import Cover from './Cover'

const Container = styled(Paper)`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

const CoverAndReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 20px;
  font-size: 10px;
`

const DescriptionContainer = styled.div`
  font-weight: bold;
  margin: 10px;
  padding: 20px;
`
const BuyLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin: 10px;
  padding: 20px;
`

export default ({
  id,
  bookPageLink,
  title,
  date,
  coverImage,
  description,
  reviews,
  linksToBuy,
  hideDescription = false,
  hideLinksToBuy = false,
}) => (
  <Container>
    <CoverAndReviewContainer>
      <Cover
        link={bookPageLink}
        imageFluid={coverImage.image.childImageSharp.fluid}
        alt={coverImage.alt}
      />
      <ReviewContainer>
        {reviews.map(review => (
          <ReviewBox {...review} />
        ))}
      </ReviewContainer>
    </CoverAndReviewContainer>

    <DescriptionContainer>
      {!Boolean(hideDescription) && <p>{description}</p>}
    </DescriptionContainer>

    {!Boolean(hideLinksToBuy) && (
      <BuyLinksContainer>
        {linksToBuy.map(link => (
          <PurchaseLink {...link} />
        ))}
      </BuyLinksContainer>
    )}
  </Container>
)
