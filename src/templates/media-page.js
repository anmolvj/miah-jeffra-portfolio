import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import YoutubeCard from '../components/YouTube'
export const MediaPageTemplate = ({ page }) => {
  return (
    <section className="section section--gradient">
      {page.frontmatter.youtubeVideos.map(
        ({ title, description, youtubeURL }) => {
          return (
            <div>
              <YoutubeCard
                url={youtubeURL}
                title={title}
                description={description}
              />
            </div>
          )
        }
      )}
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
          youtubeURL
        }
      }
    }
  }
`
