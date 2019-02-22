import React from 'react'
import styled from 'styled-components'
import Award from './Award'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: green;
  padding: 10px;
  margin: 10px;
`

export default ({ awards }) => (
  <Container>
    {awards.map(({ awardTitle, awardImage }) => (
      <Award
        title={awardTitle}
        alt={awardImage.alt}
        imageFluid={awardImage.image.childImageSharp.fluid}
      />
    ))}
  </Container>
)