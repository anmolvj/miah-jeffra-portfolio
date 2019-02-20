import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import YoutubePlayer from '../components/YouTube'
export const MediaPageTemplate = ({ page }) => {
  // console.log(content) //TEST CODE
  return (
    <section className="section section--gradient">
      {page.frontmatter.youtubeVideos.map(({ title, description, url }) => (
        <YoutubePlayer title={title} description={description} url={url} />
      ))}
    </section>
  )
}

const MediaPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <MediaPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  )
}

MediaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MediaPage

export const mediaPageQuery = graphql`
  query MediaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        youtubeVideos {
          title
          description
          url
        }
      }
    }
  }
`
