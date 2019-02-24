import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Img from 'gatsby-image'

const Container = styled(Paper)`
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  width: 100px;
  margin: auto;
`

const LabelContainer = styled.div`
  padding: 5px;
`
const ExternalLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`

export default ({ label, linkImage, linkURL }) => (
  <Container>
    <ExternalLink href={linkURL} target="_blank">
      <ImageContainer>
        <Img
          fluid={linkImage.image.childImageSharp.fluid}
          alt={linkImage.alt}
        />
      </ImageContainer>
      <LabelContainer>{label}</LabelContainer>
    </ExternalLink>
  </Container>
)
