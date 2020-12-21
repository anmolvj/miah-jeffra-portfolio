import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube'

const videoOnReady = (event) => {
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

const styles = (theme) => ({
  card: {
    width: '95%',
    maxWidth: '400px',
    margin: '20px',
  },
  cardHeader: {
    paddingBottom: 0,
  },
  title: {
    color: '#333333',
    fontWight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
  },
  subheader: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 12,
    },
  },
  content: {
    color: '#333333',
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
  cardContent: {
    color: '#333333',
  },
})

const YoutubePlayer = ({ videoID, title, description, date, classes }) => (
  <Card className={classes.card}>
    <YouTube videoId={videoID} opts={opts} onReady={videoOnReady} />
    <CardHeader
      classes={{
        root: classes.cardHeader,
        title: classes.title,
        subheader: classes.subheader,
      }}
      title={title}
      subheader={date}
    />
    <CardContent className={classes.cardContent}>
      <Typography className={classes.content} component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>
)

export default withStyles(styles)(YoutubePlayer)
