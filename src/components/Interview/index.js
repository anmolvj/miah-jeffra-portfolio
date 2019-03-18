import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const Container = styled(Paper)`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: 14px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export default ({ title, url, interviewer, date }) => (
  <Container>
    <h3>Title: {title}</h3>
    <h3>URL: {url}</h3>
    <h3>Interviewer: {interviewer}</h3>
    <h3>Date: {date}</h3>
  </Container>
)
