import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layouts/default'
import Books from '../components/Books'
import Publication from '../components/Publication'

const Container = styled.div``

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  @media (min-width: 575px) {
    justify-content: space-around;
  }
`

const TitleContainer = styled.div`
  text-align: center;
  padding: 10px;
`
const Title = styled.div`
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.color.grey};
`

const BooksContainer = styled.div`
  margin: auto;
`

export const PublicationPageTemplate = ({ page }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>Books</Title>
      </TitleContainer>
      <BooksContainer>
        <Books hideDescription={true} hideLinksToBuy={true} />
      </BooksContainer>

      <TitleContainer>
        <Title>Publications</Title>
      </TitleContainer>
      <PublicationContainer>
        {page.frontmatter.publicationList.map(
          ({ title, publicationImage, link }) => {
            return (
              <Publication
                title={title}
                link={link}
                imageFluid={publicationImage.image.childImageSharp.fluid}
                alt={publicationImage.alt}
              />
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
          link
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
