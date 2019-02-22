import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from './Navbar'
import Hamburger from 'react-hamburger-menu'
import mutedposthorn from '../../img/muted-post-horn.png'
import './styles.sass'

const Container = styled.div`
  text-align: center;
  padding: 20px;
`

const LogoAndTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

const Logo = styled.img`
  height: 70px;
  width: 70px;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Title = styled.h1`
  font-size: 32px;
`

const NavbarContainer = styled.div`
  width: 80%;
  margin: auto;
`

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <Hamburger
        isOpen={this.state.isOpen}
        menuClicked={this.handleClick}
        width={18}
        height={15}
        strokeWidth={1.5}
        rotate={0}
        color="#333333"
        borderRadius={0}
        animationDuration={0.2}
      />
    )
  }
}

export default ({ title }) => (
  <Container>
    <LogoAndTitleContainer>
      <LogoContainer>
        <Logo src={mutedposthorn} alt="Muted-Post-Horn" />
      </LogoContainer>
      <TitleContainer>
        <Title>
          <Link className="header" to="/">
            {title}
          </Link>
        </Title>
      </TitleContainer>

      <HamburgerMenuContainer>
        <HamburgerMenu />
      </HamburgerMenuContainer>
    </LogoAndTitleContainer>

    <NavbarContainer>
      <Navbar />
    </NavbarContainer>
  </Container>
)
