import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../theme/styles.scss';

const Layout = ({ children }: { children: any }) => (
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
        <main>{children}</main>
      </>
    )}
  />
);

export default Layout;
