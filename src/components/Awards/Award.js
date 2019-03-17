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

const TitleContainer = styled.div`
  margin: 5px;
  padding: 5px;
  font-size: 10px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
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
    <TitleContainer>{title}</TitleContainer>
  </Container>
)
