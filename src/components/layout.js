import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "./Seo"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ location, page, children }) => { 
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isFixed = location && location.pathname !== '/';

  return (
    <>
      <SEO title={data.site.siteMetadata.title} />
      <Header isFixed={isFixed} name="Robin Jiménez Newman" />
      <main className={page}>{children}</main>
      {page !== "not-found-page" && <Footer />}
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout 
