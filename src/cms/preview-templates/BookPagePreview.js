import React from 'react'
import PropTypes from 'prop-types'
import { BookPageTemplate } from '../../templates/book-page'

const BookPagePreview = ({ entry, widgetFor }) => (
  <BookPageTemplate
    page={{
      frontmatter: entry.getIn(['data']).toJS(),
      html: entry.getIn(['data', 'body']),
      bodyIsMarkdown: true,
    }}
  />
)

BookPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BookPagePreview
