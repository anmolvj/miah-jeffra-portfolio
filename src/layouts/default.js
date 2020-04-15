import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CoverImage from '../img/cover.jpg';
import GlobalTheme from './GlobalTheme';

import './layout.sass';

const SiteContainer = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${CoverImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.font.family.secondary};
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  color: #333333;
  /* @media (max-width: 900px) {
    width: 100%;
  } */
`;

const Content = styled.div`
  flex: 1 0 auto;
`;

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
    render={(data) => (
      <GlobalTheme>
        <SiteContainer>
          <Helmet>
            <html lang="en" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <meta name="theme-color" content="#fff" />

            <link
              href="https://fonts.googleapis.com/css?family=Nunito+Sans"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Josefin+Sans"
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
);

export default TemplateWrapper;
