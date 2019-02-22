import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`

const videoOnReady = event => {
  event.target.stopVideo()
}

const opts = {
  height: '190',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

const YoutubePlayer = ({ videoID, title, description, date }) => (
  <StyledCard>
    <YouTube videoId={videoID} opts={opts} onReady={videoOnReady} />
    <CardHeader title={title} subheader={date} />
    <CardContent>
      <Typography component="p">{description}</Typography>
    </CardContent>
  </StyledCard>
)

export default YoutubePlayer
