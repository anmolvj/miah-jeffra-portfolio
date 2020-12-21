import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import PurchaseLink from './PurchaseLink';
import ReviewBox from './Review/index';

const Container = styled.div`
  margin: auto;
  max-width: 650px;
  @media (min-width: 750px) {
    width: 80%;
  }
`;

const InnerCoverContainer = styled.div`
  width: 300px;
`;

const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin: auto;
`;

const BuyLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export default ({ post }) => {
  const { linksToBuy, description, coverImage, reviews } = post.frontmatter;

  return (
    <Container>
      <CoverContainer>
        <InnerCoverContainer>
          <Img
            fluid={coverImage.image.childImageSharp.fluid}
            alt={coverImage.alt}
          />
        </InnerCoverContainer>
      </CoverContainer>
      <p>{description}</p>
      <ReviewBox reviews={reviews} />
      <BuyLinksContainer>
        {linksToBuy.map((link) => (
          <PurchaseLink {...link} />
        ))}
      </BuyLinksContainer>
    </Container>
  );
};
