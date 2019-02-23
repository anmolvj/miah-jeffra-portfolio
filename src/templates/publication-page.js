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
  text-align: center;
`

const TitleContainer = styled.div`
  text-align: center;
  padding: 30px;
`
const Title = styled.div`
  display: inline-block;
  border-bottom: 2px solid #333333;
  font-size: 32px;
`

const BooksContainer = styled.div`
  margin: auto;
  padding: 20px;
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
