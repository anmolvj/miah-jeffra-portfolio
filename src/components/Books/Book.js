import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import BodyContainer from '../BodyContainer'
import ReviewBox from './Review'
import PurchaseLink from './PurchaseLink'
import Cover from './Cover'

const Container = styled.div`
  margin: auto;
  max-width: 650px;
  @media (min-width: 750px) {
    width: 80%;
  }
`

const CoverAndReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 10px;
`

const DescriptionContainer = styled.div`
  font-weight: bold;
  margin: 10px;
  padding: 20px;
`

const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const BuyLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
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
      <CoverContainer>
        <Cover
          link={bookPageLink}
          imageFluid={coverImage.image.childImageSharp.fluid}
          alt={coverImage.alt}
        />
      </CoverContainer>
      <ReviewContainer>
        {reviews.map(review => (
          <ReviewBox {...review} />
        ))}
      </ReviewContainer>
    </CoverAndReviewContainer>

    <BodyContainer hidden={hideDescription}>
      <p>{description}</p>
    </BodyContainer>

    {!Boolean(hideLinksToBuy) && (
      <BuyLinksContainer>
        {linksToBuy.map(link => (
          <PurchaseLink {...link} />
        ))}
      </BuyLinksContainer>
    )}
  </Container>
)
