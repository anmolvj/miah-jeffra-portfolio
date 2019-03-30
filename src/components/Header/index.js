import React from 'react'
import { Link } from 'gatsby'
import Hamburger from 'react-hamburger-menu'
import Navbar from './Navbar'
import TopNavbar from './TopNavbar'
import {
  Container,
  NavbarContainer,
  TopNavbarContainer,
  MainContainer,
  LogoContainer,
  Logo,
  TitleContainer,
  Title,
  HamburgerMenuContainer,
  HamburgerMenuInnerContainer,
} from './styled'

import mutedposthorn from '../../img/muted-post-horn.png'
import './styles.sass'

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

        <MainContainer>
          <LogoContainer>
            <Link className="" to="/about">
              <Logo src={mutedposthorn} alt="Muted-Post-Horn" />
            </Link>
          </LogoContainer>

          <TitleContainer>
            <Title>
              <Link className="header" to="/about">
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
        </MainContainer>

        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
      </Container>
    )
  }
}

export default Header
