import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const BookPageTemplate = ({ page }) => {
  return (
    <section className="section section--gradient">
      <h1>{page.frontmatter.title}</h1>
      <h3>{page.frontmatter.coverImage}</h3>
      <h4>{page.frontmatter.description}</h4>
      {page.frontmatter.reviews.map(({ reviewerName, message }) => {
        return (
          <h3>
            {reviewerName} said: "{message}"
          </h3>
        )
      })}
      {page.frontmatter.linksToBuy.map(({ label, image, linkURL }) => {
        return (
          <h3>
            Buy from {label} @ "{linkURL}". Image - {image}
          </h3>
        )
      })}
      <section>
        {page.bodyIsMarkdown ? (
          <ReactMarkdown source={page.html} />
        ) : (
          <HTMLContent content={page.html} />
        )}
      </section>
    </section>
  )
}

const BookPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <BookPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  )
}

BookPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BookPage

export const bookPageQuery = graphql`
  query BookPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        coverImage
        description
        reviews {
          reviewerName
          message
        }
        linksToBuy {
          label
          image
          linkURL
        }
      }
    }
  }
`
