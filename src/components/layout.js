/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withTrans } from "../i18n/withTrans"

import LanguageMenu from "./languageMenu"
import "./layout.css"

const Layout = ({ children, t, i18n }) => {
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "#414242",
          }}
        >
          <div>
            © {new Date().getFullYear()}, {t("profile.name")}
          </div>
          <div>
            <LanguageMenu />
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
