import PropTypes from "prop-types"
import React from "react"

const Introduction = ({ summary, skills, language }) => (
  <article
    style={{
      padding: "40px 24px 16px",
      background: "#59625a",
    }}
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
