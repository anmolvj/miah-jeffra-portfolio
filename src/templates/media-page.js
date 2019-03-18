import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import YoutubePlayer from '../components/YouTube'
import Interview from '../components/Interview'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const MediaPageTemplate = ({ page }) => (
  <Container className="section section--gradient">
    {page.frontmatter.youtubeVideos.map(({ title, description, url }) => (
      <YoutubePlayer title={title} description={description} url={url} />
    ))}
    <br />
    {page.frontmatter.interviews.map(({ title, url, interviewer, date }) => (
      <Interview
        title={title}
        url={url}
        interviewer={interviewer}
        date={date}
      />
    ))}
  </Container>
)

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
        interviews {
          title
          url
          interviewer
          date
        }
      }
    }
  }
`
