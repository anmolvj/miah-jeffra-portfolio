import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Books from '../components/Books'
import Publication from '../components/Publication'
const Container = styled.div``

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  &:after {
    content: '';
    flex: auto;
  }
`

export const PublicationPageTemplate = ({ page }) => {
  return (
    <Container>
      <h1>Books</h1>
      <Books />
      <h1>Publications</h1>
      <PublicationContainer>
        {page.frontmatter.publicationList.map(({ title, publicationImage }) => {
          console.log(title)
          return (
            <Publication
              title={title}
              imageFluid={publicationImage.image.childImageSharp.fluid}
              alt={publicationImage.alt}
            />
          )
        })}
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
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
