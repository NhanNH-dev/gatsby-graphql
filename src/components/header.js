import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { NavItem, Title, Text, UL } from "./style"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {w
        siteMetadata {
          title
        }
      }
    }
  `)
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "is-current" } : {}
  }
  return (
    <>
      <h1>
        <Link style={{ textDecoration: "none" }} to="/">
          <Title>{data.site.siteMetadata.title}</Title>
        </Link>
      </h1>
      <nav>
        <UL>
          <NavItem>
            <Link getProps={isActive} to="/">
              <Text upper>Home</Text>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/blog" getProps={isActive}>
              <Text upper>Blog</Text>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" getProps={isActive}>
              <Text upper>About</Text>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" getProps={isActive}>
              <Text upper>Contact</Text>
            </Link>
          </NavItem>
        </UL>
      </nav>
    </>
  )
}

export default Header
