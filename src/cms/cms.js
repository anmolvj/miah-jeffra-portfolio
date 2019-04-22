import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BookPagePreview from './preview-templates/BookPagePreview'
import MediaPagePreview from './preview-templates/MediaPagePreview'

CMS.registerPreviewTemplate('book', BookPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('media', MediaPagePreview)
