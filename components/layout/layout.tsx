import { Fragment, FC } from 'react';

import Headers from './Header';

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <Fragment>
      <Headers />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
