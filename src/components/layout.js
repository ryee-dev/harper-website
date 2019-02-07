import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
// import Header from "./header"
import './layout.scss';

const GlobalStyle = createGlobalStyle`
  h1 {
    font-family: Montserrat, sans-serif;
  }
`;

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
    render={data => (
      <>
        <GlobalStyle />
        {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
        {/*<div*/}
        {/*style={{*/}
        {/*margin: `0 auto`,*/}
        {/*maxWidth: 960,*/}
        {/*padding: `0px 1.0875rem 1.45rem`,*/}
        {/*paddingTop: 0,*/}
        {/*}}*/}
        {/*>*/}
        <main>{children}</main>
        {/*<footer>*/}
        {/*© {new Date().getFullYear()}, Built with*/}
        {/*{` `}*/}
        {/*<a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*</footer>*/}
        {/*</div>*/}
      </>
    )}
  />
);

export default Layout;
