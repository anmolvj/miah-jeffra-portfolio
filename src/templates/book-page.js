import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Layout from '../layouts/default';
import { HTMLContent } from '../components/Content';
import BookPageContent from '../components/Books/BookPage';
import BodyContainer from '../components/BodyContainer';

const Container = styled.div``;
const BookContainer = styled.div``;

export const BookPageTemplate = ({ page }) => {
  return (
    <Container>
      <BookContainer>
        <BookPageContent post={page} />
      </BookContainer>
      <BodyContainer>
        {page.bodyIsMarkdown ? (
          <ReactMarkdown source={page.html} />
        ) : (
          <HTMLContent content={page.html} />
        )}
      </BodyContainer>
    </Container>
  );
};

const BookPage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <BookPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

BookPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BookPage;

export const bookPageQuery = graphql`
  query BookPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        coverImage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        description
        reviews {
          reviewerName
          message
        }
        linksToBuy {
          label
          linkImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          linkURL
        }
      }
    }
  }
`;
