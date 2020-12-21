import React from 'react';
import styled from 'styled-components';
import PurchaseLink from './PurchaseLink';
import Body from './Body/index';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
  const {
    linksToBuy,
    description,
    coverImage,
    bookPageLink,
  } = post.frontmatter;

  return (
    <Container>
      <CoverContainer>
        <InnerCoverContainer>
          <Link to={bookPageLink}>
            <Img
              fluid={coverImage.image.childImageSharp.fluid}
              alt={coverImage.alt}
            />
          </Link>
        </InnerCoverContainer>
      </CoverContainer>

      <Body link={bookPageLink} description={description} />

      <BuyLinksContainer>
        {linksToBuy.map((link) => (
          <PurchaseLink {...link} />
        ))}
      </BuyLinksContainer>
    </Container>
  );
};
