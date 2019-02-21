import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const LinkToBuyContainer = styled(Paper)`
  border: 1px solid lightblue;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BuyLinkImageContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

const BuyLinkLabelContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 20px;
`

export default ({ label, linkImage, linkURL }) => (
  <LinkToBuyContainer>
    <BuyLinkImageContainer />
    <BuyLinkLabelContainer>
      {' '}
      <h3>Label: {label}</h3>
      <h4>LINK: {linkURL}</h4>
    </BuyLinkLabelContainer>
  </LinkToBuyContainer>
)
