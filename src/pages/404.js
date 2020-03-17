import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404. Not Found" />
    <h1>Lost?</h1>
    <p>The page you're looking for doesn't exist.</p>
  </Layout>
)

export default NotFoundPage
