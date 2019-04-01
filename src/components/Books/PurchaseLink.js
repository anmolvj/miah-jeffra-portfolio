import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
`

const ImageContainer = styled.div`
  width: 50px;
  height: 70px;

  margin: auto;
`

const LabelContainer = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.theme.color.grey};
`
const ExternalLink = styled.a`
  text-decoration: none;
`

export default ({ label, linkImage, linkURL }) => (
  <ExternalLink href={linkURL} target="_blank">
    <Container>
      <ImageContainer>
        <Img
          fluid={linkImage.image.childImageSharp.fluid}
          alt={linkImage.alt}
        />
      </ImageContainer>
      <LabelContainer>{label}</LabelContainer>
    </Container>
  </ExternalLink>
)
