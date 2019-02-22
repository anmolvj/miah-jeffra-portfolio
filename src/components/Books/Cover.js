import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CoverContainer = styled.div`
  width: 300px;
  @media (max-width: 700px) {
    width: 70px;
  }
`

export default ({ link, imageFluid, alt }) => (
  <Link to={link}>
    <CoverContainer>
      <Img fluid={imageFluid} alt={alt} />
    </CoverContainer>
  </Link>
)
