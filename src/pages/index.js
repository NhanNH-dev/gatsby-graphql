import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Button, H1 } from "./styles"

const IndexPage = () => {
  return (
    <Layout>
      <H1 hide>Hello. <span>Torres</span></H1>
      <h2>
        I'm Andrew, a full-stack developer living in beautiful Philadelphia.
      </h2>
      <p>
        Need a developer?{" "}
        <Link to="/contact">
          <Button fontSize="20px">Contact me</Button>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
