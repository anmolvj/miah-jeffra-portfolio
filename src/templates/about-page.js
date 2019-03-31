import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../layouts/default'
import { HTMLContent } from '../components/Content'
import Awards from '../components/Awards'
import Img from 'gatsby-image'
import BodyContainer from '../components/BodyContainer'

const Container = styled.div`
  margin: 10px;
`
const AwardsContainer = styled.div`
  text-align: center;
  margin-top: 70px;
`

const MainImageContainer = styled.div`
  margin: auto;
`
const Title = styled.div`
  display: inline-block;
  font-size: 24px;
  text-transform: uppercase;
  color: ${props => props.theme.color.grey};
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
      <BodyContainer>
        {page.bodyIsMarkdown ? (
          <ReactMarkdown source={page.html} />
        ) : (
          <HTMLContent content={page.html} />
        )}
      </BodyContainer>
      <AwardsContainer>
        <Title>Awards</Title>
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
