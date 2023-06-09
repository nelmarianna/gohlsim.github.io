
import React from 'react'

import '../styles/Layout.css'

const Layout = (props) => {
  return(
    <React.Fragment>
      <main className="main-content">
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default Layout;