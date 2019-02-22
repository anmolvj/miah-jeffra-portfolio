import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// import './styles-topnav.sass'

const Container = styled.div``

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'is-not-active' }
    : { className: 'is-not-active' }
}

export default () => {
  return (
    <Container>
      <Link className="" getProps={isActive} to="/about">
        About
      </Link>
      <Link className="" getProps={isActive} to="/publication">
        Publication
      </Link>
      <Link className="" getProps={isActive} to="/media">
        Media
      </Link>
      <Link className="" getProps={isActive} to="/contact">
        Contact
      </Link>
    </Container>
  )
}
