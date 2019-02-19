import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
})

const videoOnReady = event => {
  event.target.stopVideo()
  console.log(event.target)
}

const opts = {
  height: '190',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

const YoutubePlayer = ({
  classes,
  videoId,
  title,
  description,
  datePosted,
}) => (
  <Card className={classes.card}>
    <YouTube videoId={videoId} opts={opts} onReady={videoOnReady} />
    <CardHeader title={title} subheader={datePosted} />
    <CardContent>
      <Typography component="p">{description}</Typography>
    </CardContent>
  </Card>
)

export default withStyles(styles)(YoutubePlayer)
