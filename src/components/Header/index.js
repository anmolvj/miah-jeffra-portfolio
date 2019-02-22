import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from 'react-hamburger-menu'
import Navbar from './Navbar'
import TopNavbar from './TopNavbar'

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
  justify-content: center;
  width: 100%;
`

const HamburgerMenuInnerContainer = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  font-size: 48px;
`

const NavbarContainer = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 700px) {
    display: none;
  }
`

const TopNavbarContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showTopNavbar: false }
    this.setTopNavBar = this.setTopNavBar.bind(this)
  }

  setTopNavBar = () => {
    this.setState({
      showTopNavbar: !this.state.showTopNavbar,
    })
  }

  render() {
    return (
      <Container>
        <TopNavbarContainer show={this.state.showTopNavbar}>
          <TopNavbar />
        </TopNavbarContainer>
        <LogoAndTitleContainer>
          <LogoContainer>
            <Logo src={mutedposthorn} alt="Muted-Post-Horn" />
          </LogoContainer>
          <TitleContainer>
            <Title>
              <Link className="header" to="/">
                {this.props.title}
              </Link>
            </Title>
          </TitleContainer>

          <HamburgerMenuContainer>
            <HamburgerMenuInnerContainer>
              <Hamburger
                isOpen={this.state.showTopNavbar}
                menuClicked={this.setTopNavBar}
                width={18}
                height={15}
                strokeWidth={1.5}
                rotate={0}
                color="#333333"
                borderRadius={0}
                animationDuration={0.2}
              />
            </HamburgerMenuInnerContainer>
          </HamburgerMenuContainer>
        </LogoAndTitleContainer>

        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
      </Container>
    )
  }
}

export default Header
