import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  background-color: lightsalmon;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  margin: 10px;
  position: relative;
  @media (min-width: 400px) {
    margin: 5vw;
  }
  @media (min-width: 575px) {
    width: 150px;
    padding: 10px;
    margin: 30px;
  }
`
const ImageContainer = styled.div`
  width: 100px;
  margin: auto;
`

const TitleContainer = styled.div`
  margin: 5px;
  padding: 5px;
  font-size: 10px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const Publication = ({ title, link, imageFluid, alt }) =>
  Boolean(link) ? (
    <Container>
      <ImageContainer>
        <Link href={link} target="_blank">
          <Img fluid={imageFluid} alt={alt} />
        </Link>
      </ImageContainer>

      <TitleContainer>{title}</TitleContainer>
    </Container>
  ) : (
    <Container>
      <ImageContainer>
        <Img fluid={imageFluid} alt={alt} />
      </ImageContainer>
      <TitleContainer>{title}</TitleContainer>
    </Container>
  )

export default Publication
