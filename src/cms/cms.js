import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import AboutPagePreview from './preview-templates/AboutPagePreview'
CMS.registerPreviewTemplate('about', AboutPagePreview)

CMS.registerPreviewTemplate('index', IndexPagePreview)

CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
