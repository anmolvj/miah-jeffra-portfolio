import React from 'react'
import styled from 'styled-components'
import PurchaseLink from './PurchaseLink'
import Cover from './Cover'
import ReviewBox from './Review/index'
import Body from './Body/index'

const Container = styled.div`
  margin: auto;
  max-width: 650px;
  @media (min-width: 750px) {
    width: 80%;
  }
`

const CoverAndBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: red;
  margin: auto;
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
    <CoverAndBodyContainer>
      <CoverContainer>
        <Cover
          link={bookPageLink}
          imageFluid={coverImage.image.childImageSharp.fluid}
          alt={coverImage.alt}
        />
      </CoverContainer>

      <Body hidden={hideDescription} description={description} />
    </CoverAndBodyContainer>

    <ReviewBox reviews={reviews} />

    {!Boolean(hideLinksToBuy) && (
      <BuyLinksContainer>
        {linksToBuy.map(link => (
          <PurchaseLink {...link} />
        ))}
      </BuyLinksContainer>
    )}
  </Container>
)
