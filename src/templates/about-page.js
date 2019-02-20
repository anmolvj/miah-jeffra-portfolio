import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ content, html, bodyIsMarkdown }) => {
  console.log(content) //TEST CODE
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {content.title}
              </h2>
              <h3>
                MAIN IMAGE: image={content.mainImage.image} AND imageAlt=
                {content.mainImage.imageAlt}
              </h3>
              {content.awards.map(
                ({ awardTitle, awardImage: { image, imageAlt, name } }) => {
                  return (
                    <p>
                      awardTitle={awardTitle} image={image} imageAlt={imageAlt}{' '}
                      name={name}{' '}
                    </p>
                  )
                }
              )}
              <section>
                {bodyIsMarkdown ? (
                  <ReactMarkdown source={html} />
                ) : (
                  <HTMLContent content={html} />
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <AboutPageTemplate
        content={page.frontmatter}
        html={page.html}
        bodyIsMarkdown={page.bodyIsMarkdown}
      />
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
          image
          imageAlt
        }
        awards {
          awardTitle
          awardImage {
            image
            imageAlt
            name
          }
        }
      }
    }
  }
`
