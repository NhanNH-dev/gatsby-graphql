import React from "react"
import { ThemeProvider } from "styled-components"

import * as Styles from "./style.js"
import Header from "./header"
import Footer from "./footer"
import theme from "../styles/theme"

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Styles.Container>
        <Styles.Content>
          <Header />
          {props.children}
        </Styles.Content>
        <Footer />
      </Styles.Container>
    </ThemeProvider>
  )
}

export default Layout
