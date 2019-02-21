import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Navbar = () => {
  return (
    <Container>
      <Link className="navbar-item" to="/about">
        About
      </Link>
      <Link className="navbar-item" to="/publication">
        Publication
      </Link>
      <Link className="navbar-item" to="/media">
        Media
      </Link>
      <Link className="navbar-item" to="/contact">
        Contact
      </Link>
      {/* <Link className="navbar-item" to="/products">
        Products
      </Link>
      <Link className="navbar-item" to="/blog">
        Blog
      </Link> */}
    </Container>
  )
}

export default Navbar
