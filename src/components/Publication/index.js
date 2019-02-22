import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  display: inline-block;
  width: 150px;
  padding: 10px;
  margin: 30px;
  border-radius: 10px;
  position: relative;
`
const ImageContainer = styled.div`
  width: 100px;
  height: 150px;
  margin: auto;
  vertical-align: center;
`

const TitleContainer = styled.div`
  margin: 5px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`

export default ({ title, imageFluid, alt }) => (
  <Container>
    <ImageContainer>
      <Img fluid={imageFluid} alt={alt} />
    </ImageContainer>
    <TitleContainer>{title}</TitleContainer>
  </Container>
)
