import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import FormikForm from '../../components/FormikForm'

const Container = styled.div``

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

export default () => (
  <Layout>
    <Container>
      <Tiltle>Get in Touch With me!</Tiltle>
      <FormContainer>
        <FormikForm />
      </FormContainer>
    </Container>
  </Layout>
)
