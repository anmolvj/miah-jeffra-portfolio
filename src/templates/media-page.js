import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import YoutubePlayer from '../components/YouTube'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

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
const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-direction: row;
    justify-content: center;
  }
`

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
  },
})

export class MediaPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'interview',
    }
  }

  handleChange = (event, value) => {
    this.setState({ value: value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <Container className="section section--gradient">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          classes={classes.root}
        >
          <Tab value="interview" label="Interview" />
          <Tab value="youtube" label="Youtube" />
        </Tabs>
        {this.state.value === 'interview' ? (
          <div>This is Interviews</div>
        ) : (
          <VideoContainer>
            {this.props.page.frontmatter.youtubeVideos.map(
              ({ title, description, url }) => (
                <YoutubePlayer
                  title={title}
                  description={description}
                  url={url}
                />
              )
            )}
          </VideoContainer>
        )}
      </Container>
    )
  }
}

const MediaPage = props => {
  const { markdownRemark: page } = props.data
  const { classes } = props

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
      }
    }
  }
`
