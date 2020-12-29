import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = ({location}) => (
  <Layout location={location} page="not-found-page" >
    <SEO title="Page not found" />
    <section className="section not-found">
      <h1 className="not-found__title">Hmm... <span role="img" aria-label="Thinking emoji">&#129300;</span></h1>
      <h2 className="not-found__subtitle">The page you're looking for doesn't&nbsp;exist. Yet.</h2>
    </section>
  </Layout>
)

export default NotFoundPage
