import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CoverImage from '../img/cover.jpg'
import GlobalTheme from './GlobalTheme'

import './layout.sass'

const SiteContainer = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${CoverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font.family.secondary};
  min-height: 100vh;
  width: 960px;
  overflow: hidden;
  margin: 0 auto;
  color: #333333;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const Content = styled.div`
  flex: 1 0 auto;
`

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <GlobalTheme>
        <SiteContainer>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
            <link
              href="https://fonts.googleapis.com/css?family=Nunito+Sans"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Josefin+Sans:300"
              rel="stylesheet"
            />
          </Helmet>
          <Body>
            <Header title={data.site.siteMetadata.title} />
            <Content>{children}</Content>
            <Footer />
          </Body>
        </SiteContainer>
      </GlobalTheme>
    )}
  />
)

export default TemplateWrapper
