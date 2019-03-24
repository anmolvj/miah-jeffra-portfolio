import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
  margin: 30px;
  position: relative;
`

const ImageContainer = styled.div`
  width: 100px;
  margin: auto;
`

const LabelContainer = styled.div`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
`
const ExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
  margin: 30px;
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
