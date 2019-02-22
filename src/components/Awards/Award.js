import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  flex: 1 0 21%;
  margin: 5px;
  height: 100px;
  background-color: lightpink;
  padding: 10px;
  margin: 10px;
`

const Title = styled.h1`
  font-size: 14px;
`

const ImageContainer = styled.div`
  width: 100px;
  margin: auto;
`

export default ({ title, imageFluid, alt }) => (
  <Container>
    <ImageContainer>
      <Img fluid={imageFluid} alt={alt} />
    </ImageContainer>
    <Title>{title}</Title>
  </Container>
)
