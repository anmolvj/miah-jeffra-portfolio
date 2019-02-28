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
  position: relative;
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

const Publication = ({ title, imageFluid, alt }) => (
  <Container>
    <ImageContainer>
      <Img fluid={imageFluid} alt={alt} />
    </ImageContainer>
    <TitleContainer>{title}</TitleContainer>
  </Container>
)

export default ({ link }) =>
  Boolean(link) ? (
    <Link href={link}>
      <Publication {...props} />
    </Link>
  ) : (
    <Publication {...props} />
  )
