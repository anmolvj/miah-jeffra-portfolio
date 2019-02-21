import React from 'react'
import styled from 'styled-components'
import BuildIcon from '@material-ui/icons/Build'
import BrushIcon from '@material-ui/icons/Brush'
import { withStyles } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import { relative } from 'path'

const styles = theme => ({
  icon: {
    color: red[800],
    position: relative,
    bottom: '-30px',
  },
})

const Container = styled.div`
  margin: auto;
`
const Divider = styled.hr`
  width: 80%;
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

const Footer = ({ classes }) => (
  <Container>
    <Divider />
    <Content>
      <LinkedInLink
        href="https://www.linkedin.com/in/anmolvijayvargiya"
        target="_blank"
      >
        Anmol Vijayvargiya <BuildIcon className={classes.icon} />
      </LinkedInLink>
      <LinkedInLink
        href="https://www.linkedin.com/in/asha-latha-amara"
        target="_blank"
      >
        Asha Latha Amara <BrushIcon className={classes.icon} />
      </LinkedInLink>
    </Content>
  </Container>
)

export default withStyles(styles)(Footer)
