import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

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

const CoverContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

const ReviewContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

const DescriptionContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`
const BuyLinksContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

const LinkToBuyContainer = styled(Paper)`
  border: 1px solid lightblue;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BuyLinkImageContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

const BuyLinkLabelContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

const LinkToBuy = ({ label, image, linkURL }) => (
  <LinkToBuyContainer>
    <BuyLinkImageContainer>Image: {image}</BuyLinkImageContainer>
    <BuyLinkLabelContainer>
      {' '}
      <h3>Label: {label}</h3>
      <h4>LINK: {linkURL}</h4>
    </BuyLinkLabelContainer>
  </LinkToBuyContainer>
)

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
    <Link to={bookPageLink}>
      <CoverAndReviewContainer>
        <CoverContainer>{coverImage}</CoverContainer>
        <ReviewContainer>
          {reviews.map(({ reviewerName, message }) => (
            <h3>{`${reviewerName} says: "${message}"`}</h3>
          ))}
        </ReviewContainer>
      </CoverAndReviewContainer>
    </Link>
    <DescriptionContainer>
      {!Boolean(hideDescription) && <p>{description}</p>}
    </DescriptionContainer>

    {!Boolean(hideLinksToBuy) && (
      <BuyLinksContainer>
        {linksToBuy.map(link => (
          <LinkToBuy {...link} />
        ))}
      </BuyLinksContainer>
    )}
  </Container>
)

{
  /* <div className="is-parent column is-6" key={id}>
    <article className="tile is-child box notification">
      <p>
        <Link className="title has-text-primary is-size-4" to={bookPageLink}>
          {title} {coverImage} {description}
        </Link>
        <span> &bull; </span>
        <span className="subtitle is-size-5 is-block">{date}</span>
      </p>
      <p>
        <Link className="button" to={bookPageLink}>
          Keep Reading →
        </Link>
      </p>
    </article>
  </div> */
}
