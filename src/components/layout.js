import React from "react"

import GlobalStyles from "../styles/GlobalStyles"
import * as Styles from "./style.js"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <Styles.Container>
      <GlobalStyles />
      <Styles.Content>
        <Header />
        {props.children}
      </Styles.Content>
      <Footer />
    </Styles.Container>
  )
}

export default Layout
