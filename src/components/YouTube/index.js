import React from 'react'
import YouTube from 'simple-youtube-api'
import { format } from 'date-fns'
import Player from './Player'
import parseVideoID from './parseVideoID'

const YOUTUBE_API_KEY = 'AIzaSyC6XNnCKFT7yTZzs4XL6VXKs7nwjK9WdE4'
const youtube = new YouTube(`${YOUTUBE_API_KEY}`)

class YoutubeVideoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      error: '',
    }
  }

  componentDidMount() {
    youtube.getVideo(this.props.url).then(data => this.setState({ data: data }))
  }

  render() {
    const { title, description, url } = this.props
    const videoID = parseVideoID(url)
    const publishedAt = format(
      new Date(this.state.data.publishedAt),
      'MMM DD, YYYY'
    )
    return (
      <Player
        title={title ? title : this.state.data.title}
        description={description ? description : this.state.data.description}
        date={publishedAt}
        videoID={videoID}
      />
    )
  }
}

export default YoutubeVideoComponent
