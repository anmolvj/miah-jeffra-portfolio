import React from 'react'
import styled from 'styled-components'
import Award from './Award'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
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
