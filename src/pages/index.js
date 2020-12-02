import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as Styles from "./styles.js"
import BackgroundSection from "../components/background"
import Info from "../components/info"
import ListItem from "../components/listItem"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Styles.H1 hide>
        Hello. <span>Torres</span>
      </Styles.H1>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="title in here?"
        styleClass="default-background"
      />
      <Info />
      <ListItem file={data.file} />
      <p>
        Need a developer?
        <Link to="/contact">
          <Styles.Button fontSize="20px">Contact me</Styles.Button>
        </Link>
      </p>
    </Layout>
  )
}
export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    file: allContentfulProductItem {
      edges {
        node {
          title
          id
          prices
          category
          images {
            fixed(width: 80, height: 80) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          descriptions {
            descriptions
          }
        }
      }
    }
  }
`
export default IndexPage
