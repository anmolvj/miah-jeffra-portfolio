import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const BookPageTemplate = ({ content, html, bodyIsMarkdown }) => {
  const { title, coverImage, description, reviews, linksToBuy } = content
  console.log(content) //TEST CODE
  return (
    <section className="section section--gradient">
      <h1>{title}</h1>
      <h3>{coverImage}</h3>
      <h4>{description}</h4>
      {reviews.map(({ reviewerName, message }) => {
        return (
          <h3>
            {reviewerName} said: "{message}"
          </h3>
        )
      })}
      {linksToBuy.map(({ label, image, linkURL }) => {
        return (
          <h3>
            Buy from {label} @ "{linkURL}". Image - {image}
          </h3>
        )
      })}
      <section>
        {bodyIsMarkdown ? (
          <ReactMarkdown source={html} />
        ) : (
          <HTMLContent content={html} />
        )}
      </section>
    </section>
  )
}

const BookPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <BookPageTemplate
        content={page.frontmatter}
        html={page.html}
        bodyIsMarkdown={page.bodyIsMarkdown}
      />
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
