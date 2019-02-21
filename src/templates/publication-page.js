import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Books from '../components/Books'

export const PublicationPageTemplate = ({ page }) => {
  // console.log(content) //TEST CODE
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <Books />
              {page.frontmatter.publicationList.map(
                ({ title, publicationImage: { image, imageAlt } }) => {
                  return (
                    <p>
                      publicationName={title} image={image} imageAlt={imageAlt}{' '}
                    </p>
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
          </div>
        </div>
      </div>
    </section>
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
