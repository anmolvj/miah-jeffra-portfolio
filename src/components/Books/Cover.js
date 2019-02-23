import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CoverContainer = styled.div`
  margin-left: 7vw;
  width: 300px;
  @media (max-width: 700px) {
    width: 200px;
    margin-left: 5vw;
  }
`

export default ({ link, imageFluid, alt }) => (
  <Link to={link}>
    <CoverContainer>
      <Img fluid={imageFluid} alt={alt} />
    </CoverContainer>
  </Link>
)
