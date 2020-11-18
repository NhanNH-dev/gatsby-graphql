import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as Styles from "./style"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <h1>
        <Link style={{ textDecoration: "none" }} to="/">
          <Styles.Title>{data.site.siteMetadata.title}</Styles.Title>
        </Link>
      </h1>
      <nav>
        <Styles.UL>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              activeClassName="active"
              activeStyle={{ color: "red" }}
              to="/"
            >
              <Styles.LI>Home</Styles.LI>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              activeClassName="active"
              activeStyle={{ color: "red" }}
              to="/blog"
            >
              <Styles.LI>Blog</Styles.LI>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              activeClassName="active"
              activeStyle={{ color: "blue" }}
              to="/about"
            >
              <Styles.LI>About</Styles.LI>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              activeClassName="active"
              activeStyle={{ color: "red" }}
              to="/contact"
            >
              <Styles.LI>Contact</Styles.LI>
            </Link>
          </li>
        </Styles.UL>
      </nav>
    </>
  )
}

export default Header
