import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import './styles.sass'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: 'Neoteric', sans-serif;
  font-weight: bold;
  /* font-family: 'Hind', sans-serif; */

  font-size: 20px;
`

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'is-active' } : { className: 'is-not-active' }
}

export default () => {
  return (
    <Container>
      <Link className="navbar-item" getProps={isActive} to="/about">
        About
      </Link>
      <Link className="navbar-item" getProps={isActive} to="/publication">
        Publication
      </Link>
      <Link className="navbar-item" getProps={isActive} to="/media">
        Media
      </Link>
      <Link className="navbar-item" getProps={isActive} to="/contact">
        Contact
      </Link>
    </Container>
  )
}
