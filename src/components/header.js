import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { NavItem, Title, Text, UL } from "./style"

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
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "is-current" } : {}
  }
  const [showNavBar, setShowNavBar] = useState(false)
  const LinkUrl = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/blog", text: "Blog" },
    { id: 3, path: "/about", text: "About" },
    { id: 4, path: "/contact", text: "Contact" },
  ]
  const navbarHandler = () => {
    setShowNavBar(!showNavBar)
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link style={{ textDecoration: "none" }} to="/">
          <Title>{data.site.siteMetadata.title}</Title>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${showNavBar ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            {LinkUrl.map(link => (
              <NavItem className="nav-item" key={link.id}>
                <Link
                  className="nav-link text-capitalize"
                  to={link.path}
                  getProps={isActive}
                >
                  {link.text}
                </Link>
              </NavItem>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
