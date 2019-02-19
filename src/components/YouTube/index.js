import React from 'react'
import Player from './Player'
import parseVideoID from './parseVideoID'

const datePublished = 'September 14, 1996'

export default ({ title, description, url }) => {
  let data
  const videoID = parseVideoID(url)

  data = {
    title: title ? title : 'No Title Given',
    description: description ? description : 'No Description Given',
    videoID: videoID,
    date: datePublished,
  }
  return <Player {...data} />
}
