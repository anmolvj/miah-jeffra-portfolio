import React from 'react'
import styled from 'styled-components'
import BuildIcon from '@material-ui/icons/Build'
import BrushIcon from '@material-ui/icons/Brush'

const IconContainer = styled.div`
  display: inline-block;
  position: relative;
  top: 4px;
`

const Container = styled.div`
  margin: auto;
`
const Divider = styled.hr`
  width: 60%;
  margin: auto 10;
  height: 1px;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.color.teal};
  padding: 0;
`
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`

const LinkedInLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.grey};
  padding: 10px;
  text-align: center;
`

const Name = styled.div`
  font-size: 10px;
  font-weight: bold;
  @media (min-width: 750px) {
    font-size: 14px;
  }
`

const Footer = () => (
  <Container>
    <Divider />
    <Content>
      <LinkedInLink
        href="https://www.linkedin.com/in/anmolvijayvargiya"
        target="_blank"
      >
        <Name>Anmol Vijayvargiya</Name>
        <IconContainer>
          {'( '}
          <BrushIcon
            style={{ fontSize: '15px', position: 'relative', top: '4' }}
          />
          {' & '}
          <BuildIcon
            style={{ fontSize: '12px', position: 'relative', top: '2' }}
          />
          {' )'}
        </IconContainer>
      </LinkedInLink>

      <LinkedInLink
        href="https://www.linkedin.com/in/asha-latha-amara"
        target="_blank"
      >
        <Name>Asha Latha Amara</Name>

        <IconContainer>
          {'( '}
          <BrushIcon
            style={{ fontSize: '15px', position: 'relative', top: '4' }}
          />
          {' )'}
        </IconContainer>
      </LinkedInLink>
    </Content>
  </Container>
)

export default Footer
