import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Awards from '../components/Awards'
import Img from 'gatsby-image'
import Paper from '@material-ui/core/Paper'

const Container = styled.div`
  margin: 10px;
  padding: 20px;
`
const AwardsContainer = styled.div`
  text-align: center;
`

const MainImageContainer = styled.div`
  width: 100%;
  margin: auto;
`
const BodyContainer = styled(Paper)`
  font-family: 'nunito', sans-serif;
  font-size: 14px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  /* font-family: 'Hind', sans-serif; */
`

const AuthorName = styled.h1`
  text-align: center;
`
const Divider = styled.hr`
  width: 60%;
  height: 2px;
  background-color: black;
  margin: auto;
`

export const AboutPageTemplate = ({ page }) => {
  return (
    <Container>
      <MainImageContainer>
        <Img
          fluid={page.frontmatter.mainImage.image.childImageSharp.fluid}
          alt={page.frontmatter.mainImage.alt}
        />
      </MainImageContainer>
      {/* <AuthorName className="title is-size-3 has-text-weight-bold is-bold-light">
        {page.frontmatter.title}
      </AuthorName> */}
      <BodyContainer>
        {page.bodyIsMarkdown ? (
          <ReactMarkdown source={page.html} />
        ) : (
          <HTMLContent content={page.html} />
        )}
      </BodyContainer>
      <Divider />
      <AwardsContainer>
        <h2>Awards</h2>
        <Awards awards={page.frontmatter.awards} />
      </AwardsContainer>
    </Container>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <AboutPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainImage {
          image {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        awards {
          awardTitle
          awardImage {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`
