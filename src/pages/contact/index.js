import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import FormikForm from '../../components/FormikForm'

const Container = styled.div``

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Tiltle = styled.h1`
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
