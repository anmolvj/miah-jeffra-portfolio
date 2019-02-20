import React from 'react'
import PropTypes from 'prop-types'
import { PublicationPageTemplate } from '../../templates/about-page'

const PublicationPagePreview = ({ entry }) => (
  <PublicationPageTemplate
    page={{
      frontmatter: entry.getIn(['data']).toJS(),
      html: entry.getIn(['data', 'body']),
      bodyIsMarkdown: true,
    }}
  />
)

PublicationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PublicationPagePreview
