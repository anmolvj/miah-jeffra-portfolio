import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import './styles-topnav.sass'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
`

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'is-active-topnav' }
    : { className: 'is-not-active-topnav' }
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
