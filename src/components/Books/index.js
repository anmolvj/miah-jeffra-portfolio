import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Book from './Book'

const BookWithReview = props => {
  const { edges: posts } = props.data.allMarkdownRemark

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <Book
            id={post.id}
            bookPageLink={post.fields.slug}
            {...post.frontmatter}
          />
        ))}
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query BookQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "book-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                coverImage {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 526, quality: 92) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                description
                reviews {
                  reviewerName
                  message
                }
                linksToBuy {
                  label
                  linkImage {
                    alt
                    image {
                      childImageSharp {
                        fluid(maxWidth: 300, quality: 92) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  linkURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BookWithReview data={data} {...props} />}
  />
)
