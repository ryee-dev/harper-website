import * as React from 'react';
import '../theme/styles.scss';

const Layout = ({ children }: { children: any }) => (
  <>
    <main>{children}</main>
  </>
);

export default Layout;
