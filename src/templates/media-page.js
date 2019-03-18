import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Layout from '../components/Layout'
import YoutubePlayer from '../components/YouTube'
import Interview from '../components/Interview'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: row;
    justify-content: center;
  }
`

const InterviewContainer = styled.div`
  text-align: center;
  width: 100%;
`

const YoutubeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-direction: row;
    justify-content: center;
  }
`
class MediaPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'interview' }
    this.handleTabClick = this.handleTabClick.bind(this)
  }
  handleTabClick = (event, value) => {
    this.setState({ value })
  }

  render() {
    return (
      <Container>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabClick}
        >
          <Tab value="interview" label="Interview" />
          <Tab value="youtube" label="Youtube" />
        </Tabs>
        {this.state.value === 'interview' ? (
          <InterviewContainer>
            {this.props.page.frontmatter.interviews.map(
              ({ title, url, interviewer, date }) => (
                <Interview
                  title={title}
                  url={url}
                  interviewer={interviewer}
                  date={date}
                />
              )
            )}
          </InterviewContainer>
        ) : (
          <YoutubeContainer>
            {this.props.page.frontmatter.youtubeVideos.map(
              ({ title, description, url }) => (
                <YoutubePlayer
                  title={title}
                  description={description}
                  url={url}
                />
              )
            )}
          </YoutubeContainer>
        )}
      </Container>
    )
  }
}

// export const MediaPageTemplate = ({ page }) => (
//   <Container className="section section--gradient">
//     {page.frontmatter.youtubeVideos.map(({ title, description, url }) => (
//       <YoutubePlayer title={title} description={description} url={url} />
//     ))}
//     <br />

//   </Container>
// )

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
