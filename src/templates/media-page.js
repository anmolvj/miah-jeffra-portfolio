import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import YoutubeCard from '../components/YouTube'
export const MediaPageTemplate = ({ content: { youtubeVideos } }) => {
  console.log(youtubeVideos) //TEST CODE
  return (
    <section className="section section--gradient">
      {youtubeVideos.map(({ title, description, youtubeURL }) => {
        return (
          <div>
            <YoutubeCard
              url={youtubeURL}
              title={title}
              description={description}
            />
          </div>
        )
      })}
    </section>
  )
}

const MediaPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <MediaPageTemplate content={page.frontmatter} />
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
