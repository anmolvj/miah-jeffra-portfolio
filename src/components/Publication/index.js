import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  display: inline-block;
  width: 150px;
  padding: 10px;
  margin: 30px;
`
const ImageContainer = styled.div`
  width: 100px;
  margin: auto;
`

const TitleContainer = styled.div`
  margin: 5px;
  padding: 5px;
  text-align: center;
`

export default ({ title, imageFluid, alt }) => (
  <Container>
    <ImageContainer>
      <Img fluid={imageFluid} alt={alt} />
    </ImageContainer>
    <TitleContainer>{title}</TitleContainer>
  </Container>
)
