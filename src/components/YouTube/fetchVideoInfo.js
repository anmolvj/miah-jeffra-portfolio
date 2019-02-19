const YouTube = require('simple-youtube-api')
const YOUTUBE_API_KEY = 'AIzaSyC6XNnCKFT7yTZzs4XL6VXKs7nwjK9WdE4'

export default videoID => {
  const youtube = new YouTube(`${YOUTUBE_API_KEY}`)
  youtube.getVideoByID()
  return youtube
    .getVideoByID(videoID)
    .then(results => console.log(''))
    .catch(console.error)
}
