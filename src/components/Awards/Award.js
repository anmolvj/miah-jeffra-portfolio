import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
  margin: 30px;
`

const Title = styled.h1`
  font-size: 10px;
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
