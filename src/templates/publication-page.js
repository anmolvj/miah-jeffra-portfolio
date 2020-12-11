import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Layout from '../layouts/default'
import Books from '../components/Books'
import Publication from '../components/Publication'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  max-width: 900px;
  margin: auto;
  @media (min-width: 575px) {
    justify-content: space-around;
  }
`

const TitleContainer = styled.div`
  text-align: center;
  padding: 10px;
`
const Title = styled.div`
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.grey};
`

const BooksContainer = styled.div`
  margin: auto;
`

const styles = {
  root: {
    padding: 0,
  },
  flexContainer: {
    color: '#333333',
  },
  indicator: {
    background: '#0291b1',
  },
}

export const PublicationPageTemplate = ({ page, classes }) => {
  const [tab, setTab] = useState('books')
  return (
    <Container>
      <Tabs
        value={tab}
        onChange={(event, value) => setTab(value)}
        classes={{
          root: classes.root,
          flexContainer: classes.flexContainer,
          indicator: classes.indicator,
        }}
      >
        <Tab value="books" label={'Books'} />
        <Tab
          value="publications"
          label={page.frontmatter.publicationsSection.sectionName}
        />
      </Tabs>

      {tab === 'books' ? (
        <>
          <TitleContainer>
            <Title>{page.frontmatter.bookSectionTitle}</Title>
          </TitleContainer>
          <BooksContainer>
            <Books hideLinksToBuy hideReviews/>
          </BooksContainer>
        </>
      ) : (
        <>
          <TitleContainer>
            <Title>{page.frontmatter.publicationsSection.sectionName}</Title>
          </TitleContainer>
          <PublicationContainer>
            {page.frontmatter.publicationsSection.publicationList.map(
              ({ title, publicationImage, link }) => {
                return (
                  <Publication
                    title={title}
                    link={link}
                    imageFluid={publicationImage.image.childImageSharp.fluid}
                    alt={publicationImage.alt}
                  />
                )
              }
            )}
          </PublicationContainer>
        </>
      )}
    </Container>
  )
}

const PublicationPage = ({ data, classes }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <PublicationPageTemplate
        page={{ ...page, bodyIsMarkdown: false }}
        classes={classes}
      />
    </Layout>
  )
}

PublicationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default withStyles(styles)(PublicationPage)

export const publicationPageQuery = graphql`
  query PublicationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        publicationsSection {
          sectionName
          publicationList {
            title
            link
            publicationImage {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 526, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
