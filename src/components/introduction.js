import PropTypes from "prop-types"
import React from "react"

import "./introduction.css"

const Introduction = ({ summary, skills, language }) => (
  <article class="introduction"
  >
    {summary}
    {skills}
    {language}
  </article>
)

Introduction.propTypes = {
  summary: PropTypes.element,
  skills: PropTypes.element,
  language: PropTypes.element,
}

Introduction.defaultProps = {
  summary: <></>,
  skills: <></>,
  language: <></>,
}

export default Introduction
