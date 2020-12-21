import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CoverContainer = styled.div`
  width: 150px;
`;

export default ({ link, imageFluid, alt }) => (
  <CoverContainer>
    <Link to={link}>
      <Img fluid={imageFluid} alt={alt} />
    </Link>
  </CoverContainer>
);
