import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from 'gatsby-theme-material-ui'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { AiOutlineRead } from 'react-icons/ai'

const ButtonLink = styled(Link)`
  text-decoration: none;
`

const StyledButton = styled(Button)`
  font-family: ${(props) => props.theme.font.family.secondary};
`

const BodyContainer = styled.div`
  font-family: ${(props) => props.theme.font.family.secondary};
  margin: auto;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
`

export default ({ description, hidden, link }) =>
  !Boolean(hidden) && (
    <BodyContainer>
      <p>{description}</p>
      <ButtonLink to={link}>
        <StyledButton
          variant="text"
          startIcon={<AiOutlineRead />}
          endIcon={<IoMdArrowRoundForward />}
          size="small"
        >
          Read more
        </StyledButton>
      </ButtonLink>
    </BodyContainer>
  )
