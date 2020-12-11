import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  font-family: ${(props) => props.theme.font.family.secondary};
  padding: 10px;
  margin: 0 auto;
  text-align: left;
  &:hover {
    background-color: rgb(204, 204, 204, 0.3);
    border-radius: 3px;
  }
  @media (min-width: 430px) {
    margin: 20px auto;
  }
`

const Link = styled.a`
  text-decoration: none;
`

const Title = styled.div`
  color: ${(props) => props.theme.color.grey};
  font-size: 16px;
  font-weight: bold;
  @media (min-width: 430px) {
    font-size: 25px;
  }
`

const InterviewerAndDateContainer = styled.div`
  margin-left: 7px;
  color: ${(props) => props.theme.color.grey};
  @media (min-width: 430px) {
    margin-left: 10px;
  }
`

const Interviewer = styled.div`
  font-size: 12px;
  @media (min-width: 430px) {
    font-size: 14px;
  }
`

const Date = styled.div`
  font-size: 8px;
  @media (min-width: 430px) {
    font-size: 10px;
  }
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
