import React from 'react'
import styled from 'styled-components'
import Layout from '../../layouts/default'
import FormikForm from '../../components/FormikForm'
import FancyMap from '../../img/contact-map.png'

const Container = styled.div`
  border-radius: 3px;
  overflow: hidden;
  width: 50%;
  margin: auto;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(204, 204, 204, 0.3);
  margin: auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const Tiltle = styled.div`
  text-align: center;
  padding: 10px;
  font-family: ${props => props.theme.font.family.secondary};
  font-weight: bold;
`

const Map = styled.img`
  width: 70%;
  margin: auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`

export default () => (
  <Layout>
    <Container>
      {/* <Map src={FancyMap} /> */}
      <Tiltle>Get in Touch With me!</Tiltle>
      <FormContainer>
        <FormikForm />
      </FormContainer>
    </Container>
  </Layout>
)
