import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts/default';
import FormikForm from '../components/FormikForm';

const Container = styled.div`
  border-radius: 3px;
  overflow: hidden;
  margin: auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(204, 204, 204, 0.3);
  margin: auto;
  width: 90%;
  @media (min-width: 1200px) {
    width: 70%;
  }
`;

const Tiltle = styled.div`
  text-align: center;
  padding: 10px;
  font-family: ${(props) => props.theme.font.family.secondary};
  font-weight: bold;
  font-size: 16px;

  @media (min-width: 500px) {
    font-size: 20px;
  }
`;

export const ContactPageTemplate = ({ page }) => {
  return (
    <Container>
      <Container>
        <Tiltle>{page.frontmatter.callToActionMessage}</Tiltle>
        <FormContainer>
          <FormikForm />
        </FormContainer>
      </Container>
    </Container>
  );
};

const ContactPage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <ContactPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        callToActionMessage
      }
    }
  }
`;
