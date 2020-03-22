import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/projects/Projects"
import ContactContainer from "../components/contact/ContactContainer"
import AboutContainer from "../components/about/AboutContainer"

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
      <AboutContainer />
      <ContactContainer />
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
