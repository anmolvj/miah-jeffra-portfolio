import React from 'react'
import styled from 'styled-components'
import Layout from '../../layouts/default'
import FormikForm from '../../components/FormikForm'
import FancyMap from '../../img/contact-map.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin: auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const Tiltle = styled.h2`
  text-align: center;
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
      <Map src={FancyMap} />
      <Tiltle>Get in Touch With me!</Tiltle>
      <FormContainer>
        <FormikForm />
      </FormContainer>
    </Container>
  </Layout>
)
