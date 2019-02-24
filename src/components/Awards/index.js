import React from 'react'
import styled from 'styled-components'
import Award from './Award'
import Paper from '@material-ui/core/Paper'

const Container = styled(Paper)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
