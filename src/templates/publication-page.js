import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Books from '../components/Books'

const Container = styled.div``
const PublicationContainer = styled.div``

export const PublicationPageTemplate = ({ page }) => {
  // console.log(content) //TEST CODE
  return (
    <Container>
      <Books />
      <PublicationContainer>
        {page.frontmatter.publicationList.map(
          ({ title, publicationImage: { image, imageAlt } }) => {
            return (
              <p>
                publicationName={title} image={image} imageAlt={imageAlt}{' '}
              </p>
            )
          }
        )}
      </PublicationContainer>
    </Container>
  )
}

const PublicationPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <PublicationPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  )
}

PublicationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PublicationPage

export const publicationPageQuery = graphql`
  query PublicationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        publicationList {
          title
          publicationImage {
            image
            imageAlt
          }
        }
      }
    }
  }
`
