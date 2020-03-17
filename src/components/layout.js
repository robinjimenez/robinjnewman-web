import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "./Seo"
import MovingHeader from "./MovingHeader"

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
      <MovingHeader name="Robin Jiménez Newman"></MovingHeader>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout 
