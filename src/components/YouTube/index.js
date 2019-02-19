import React from 'react'
import Player from './Player'

const videoId = 'yYm8mKbGRz0'
const title = 'Valley of Wolves'
const description =
  "Now I've never been the one to play it safe I might play a little dirty some day I'm just following fate they say I'm the chosen one I know what it takes to be the kingBe the song everybody wanna sing"
const datePosted = 'September 14, 2016'

export default () => (
  <Player
    videoId={videoId}
    title={title}
    description={description}
    datePosted={datePosted}
  />
)
