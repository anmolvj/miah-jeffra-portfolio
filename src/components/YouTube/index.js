import React from 'react'
import YouTube from 'simple-youtube-api'
import Player from './Player'
import parseVideoID from './parseVideoID'

const YOUTUBE_API_KEY = 'AIzaSyC6XNnCKFT7yTZzs4XL6VXKs7nwjK9WdE4'
const datePublished = 'September 14, 1996'

export default ({ title, description, url }) => {
  const videoID = parseVideoID(url)
  const API = new YouTube(`${YOUTUBE_API_KEY}`)

  //THE BUGGY CODE STARTS HERE

  return (
    <Player
      title={title}
      description={description}
      date={datePublished}
      videoID={videoID}
    />
  )
}

// if (!Boolean(title) || !Boolean(description)) {
//   API.getVideoByID(videoID)
//     .then(res => JSON.parse(res) )
//     .then(results =>{
//       console.log(results)
//       let data = {
//         title: title ? title : results[0].title,
//         description: description ? description : results[0].description,
//         videoID: videoID,
//         date: datePublished,
//       }
//       return <Player {...data} />
//     })
//     .catch(console.error)
// }
