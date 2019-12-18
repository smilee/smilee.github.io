/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withTrans } from "../i18n/withTrans"

import LanguageMenu from "./languageMenu"
import "./layout.css"

const Layout = ({ children, t }) => (
  <>
    <div id="layout">
      <main>{children}</main>
      <footer id="footer">
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
