import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  @media (min-width: 750px) {
    justify-content: center;
  }
`

export const Logo = styled.img`
  height: 20px;
  @media (min-width: 500px) {
    height: 30px;
  }
  @media (min-width: 1024px) {
    height: 50px;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  flex: auto;
  min-width: 180px;
  @media (min-width: 500px) {
    min-width: 200px;
  }
`

export const Title = styled.span`
  color: ${props => props.theme.color.orange};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 500;
  font-size: 26px;

  @media (min-width: 500px) {
    font-size: 36px;
  }
  @media (min-width: 1024px) {
    font-size: 48px;
  }
`

export const HamburgerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const HamburgerMenuInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 750px) {
    display: none;
    width: 100%;
  }
`

export const NavbarContainer = styled.div`
  padding-top: 20px;
  display: none;
  @media (min-width: 750px) {
    display: block;
    margin: auto;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1300px) {
    width: 1024px;
  }
`

export const TopNavbarContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`
