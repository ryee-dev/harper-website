import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '../theme/globalStyle';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <GlobalStyle />
        <main>{children}</main>
      </>
    )}
  />
);

export default Layout;
