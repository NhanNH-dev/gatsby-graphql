import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as Styles from "./styles.js"

const IndexPage = () => {
  return (
    <Layout>
      <Styles.H1 hide>
        Hello. <span>Torres</span>
      </Styles.H1>
      <h2>
        I'm Andrew, a full-stack developer living in beautiful Philadelphia.
      </h2>
      <p>
        Need a developer?
        <Link to="/contact">
          <Styles.Button fontSize="20px">Contact me</Styles.Button>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
