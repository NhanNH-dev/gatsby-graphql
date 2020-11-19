import React from "react"
import { Button, Link } from "react-scroll"

import Layout from "../components/layout"

const BlogPage = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <Link
        activeClass="taoNe"
        to="footer"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
        delay={500}
        isDynamic={true}
        ignoreCancelEvents={false}
      >
        Footer
      </Link>
    </Layout>
  )
}

export default BlogPage
