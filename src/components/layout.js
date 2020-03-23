import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "./Seo"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => { 
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={data.site.siteMetadata.title} />
      <Header name="Robin Jiménez Newman" />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout 
