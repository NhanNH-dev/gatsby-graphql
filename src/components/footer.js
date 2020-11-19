import React from "react"
import { graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer style={{ height: "50vh" }}>
      <p id="footer" style={{ paddingBottom: "100vh" }}>
        Created by {site.siteMetadata.author}, © 2019
      </p>
    </footer>
  )
}

export default Footer
