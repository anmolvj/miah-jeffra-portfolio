import getVideoId from 'get-video-id'

export default (url) => {
  // let videoID = url.split('v=')[1]
  // let ampersandPosition = videoID.indexOf('&')
  // if (ampersandPosition !== -1) {
  //   videoID = videoID.substring(0, ampersandPosition)
  // }
  return getVideoId(url).id
}
