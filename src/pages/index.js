import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"


import "../assets/css/main.css"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Hero>
        <h1 className="subtitle">
          {data.site.siteMetadata.subtitle.first_line}
          <br></br>
          {data.site.siteMetadata.subtitle.second_line}
        </h1>
      </Hero>
      <Projects />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        subtitle {
          first_line
          second_line
        }
      }
    }
  }
`
