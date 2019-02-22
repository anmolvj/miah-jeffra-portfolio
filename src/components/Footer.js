import React from 'react'
import styled from 'styled-components'
import BuildIcon from '@material-ui/icons/Build'
import BrushIcon from '@material-ui/icons/Brush'

const Container = styled.div`
  margin: auto;
`
const Divider = styled.hr`
  width: 60%;
  height: 2px;
  background-color: black;
  margin: auto;
`
const Content = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
`

const LinkedInLink = styled.a`
  color: inherit;
  padding: 10px;
  &:hover {
    color: inherit;
  }
`

// const Footer = ({ classes }) => (
const Footer = () => (
  <Container>
    <Divider />
    <Content>
      <LinkedInLink
        href="https://www.linkedin.com/in/anmolvijayvargiya"
        target="_blank"
      >
        Anmol Vijayvargiya <BuildIcon />
      </LinkedInLink>
      <LinkedInLink
        href="https://www.linkedin.com/in/asha-latha-amara"
        target="_blank"
      >
        Asha Latha Amara <BrushIcon />
      </LinkedInLink>
    </Content>
  </Container>
)

export default Footer
