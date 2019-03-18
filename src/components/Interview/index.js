import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const Container = styled.div`
  width: 80%;
  font-family: ${props => props.theme.font.family.secondary};
  padding: 10px;
  margin: 20px auto;
  text-align: left;
  &:hover {
    background-color: rgb(204, 204, 204, 0.3);
    border-radius: 3px;
  }
`

const Link = styled.a`
  text-decoration: none;
`

const Title = styled.div`
  color: ${props => props.theme.color.grey};
  font-size: 25px;
  font-weight: bold;
`

const InterviewerAndDateContainer = styled.div`
  margin-left: 10px;
  color: ${props => props.theme.color.grey};
`

const Interviewer = styled.div`
  font-size: 14px;
`

const Date = styled.div`
  font-size: 10px;
`

export default ({ title, url, interviewer, date }) => (
  <Container>
    <Link href={url} target="_blank">
      <Title>{title}</Title>
      <InterviewerAndDateContainer>
        <Interviewer>{interviewer}</Interviewer>
        <Date>{date}</Date>
      </InterviewerAndDateContainer>
    </Link>
  </Container>
)
