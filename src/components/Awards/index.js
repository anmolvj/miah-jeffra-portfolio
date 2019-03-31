import React from 'react'
import styled from 'styled-components'
import Award from './Award'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  @media (min-width: 375px) {
    justify-content: space-around;
  }
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
