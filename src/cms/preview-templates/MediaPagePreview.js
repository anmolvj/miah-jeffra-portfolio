import React from 'react'
import PropTypes from 'prop-types'
import { MediaPageTemplate } from '../../templates/media-page'

const MediaPagePreview = ({ entry }) => (
  <MediaPageTemplate
    page={{
      page: entry.getIn(['data']).toJS(),
    }}
  />
)

MediaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MediaPagePreview
