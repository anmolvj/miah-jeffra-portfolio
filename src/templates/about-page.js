import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

export const AboutPageTemplate = ({ page }) => {
  // console.log(content) //TEST CODE
  return (
    <div>
      <Img
        fluid={page.frontmatter.mainImage.image.childImageSharp.fluid}
        alt={page.frontmatter.mainImage.imageAlt}
      />

      {page.frontmatter.awards.map(
        ({ awardTitle, awardImage: { image, imageAlt, name } }) => {
          return (
            <div>
              awardTitle={awardTitle}{' '}
              <Img fluid={image.childImageSharp.fluid} alt={imageAlt} />{' '}
              imageAlt={imageAlt} name={name}{' '}
            </div>
          )
        }
      )}
      <section>
        {page.bodyIsMarkdown ? (
          <ReactMarkdown source={page.html} />
        ) : (
          <HTMLContent content={page.html} />
        )}
      </section>
    </div>
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
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
        awards {
          awardTitle
          awardImage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageAlt
            name
          }
        }
      }
    }
  }
`
