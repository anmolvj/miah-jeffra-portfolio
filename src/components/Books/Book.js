import React from 'react'
import styled from 'styled-components'
import PurchaseLink from './PurchaseLink'
import Cover from './Cover'
import ReviewBox from './Review/index'

const Container = styled.div`
  margin: auto;
  max-width: 650px;
  @media (min-width: 750px) {
    width: 80%;
  }
`
const BodyContainer = styled.div`
  display: ${props => (Boolean(props.hidden) ? 'hidden' : 'block')};
  font-family: ${props => props.theme.font.family.secondary};
  margin: auto;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
`

const CoverAndBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }
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
    <CoverAndBodyContainer>
      <CoverContainer>
        <Cover
          link={bookPageLink}
          imageFluid={coverImage.image.childImageSharp.fluid}
          alt={coverImage.alt}
        />
      </CoverContainer>
      <BodyContainer hidden={hideDescription}>
        <p>{description}</p>
      </BodyContainer>
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
