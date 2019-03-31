import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Layout from '../layouts/default'
import YoutubePlayer from '../components/YouTube'
import Interview from '../components/Interview'

const styles = {
  root: {
    padding: 0,
  },
  flexContainer: {
    color: '#333333',
  },
  indicator: {
    background: '#0291b1',
  },
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const InterviewContainer = styled.div`
  text-align: center;
  width: 100%;
`

const YoutubeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1100px) {
    justify-content: space-between;
  }

  @media (min-width: 1300px) {
    width: 1024px;
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
    const { classes, page } = this.props
    const { interviews, youtubeVideos } = page.frontmatter

    return (
      <Container>
        <Tabs
          value={this.state.value}
          onChange={this.handleTabClick}
          classes={{
            root: classes.root,
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
          }}
        >
          <Tab value="interview" label="Interviews / Reviews" />
          <Tab value="youtube" label="Videos" />
        </Tabs>
        {this.state.value === 'interview' ? (
          <InterviewContainer>
            {interviews.map(({ title, url, interviewer, date }) => (
              <Interview
                title={title}
                url={url}
                interviewer={interviewer}
                date={date}
              />
            ))}
          </InterviewContainer>
        ) : (
          <YoutubeContainer>
            {youtubeVideos.map(({ title, description, url }) => (
              <YoutubePlayer
                title={title}
                description={description}
                url={url}
              />
            ))}
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

const MediaPage = ({ data, classes }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <MediaPageTemplate
        page={{ ...page, bodyIsMarkdown: false }}
        classes={classes}
      />
    </Layout>
  )
}

MediaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaPage)
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
