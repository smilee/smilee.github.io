import PropTypes from "prop-types"
import React from "react"

import "./education.css"

const Education = ({
  fontColor,
  school,
  degree,
  department,
  years,
  description,
}) => {
  return (
    <article className="education">
      <header style={{ marginBottom: "0.2em" }}>
        <h3
          style={{
            marginBottom: "0.2em",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "1.4em",
            color: fontColor,
            textTransform: "uppercase",
          }}
        >
          {school}
        </h3>
        <span
          style={{
            display: "block",
            // marginBottom: "0.5em",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "1.2em",
            color: fontColor,
          }}
        >
          {degree}, {department}
        </span>
        <span
          style={{
            display: "block",
            fontSize: "13px",
            fontWeight: "300",
            lineHeight: "1.4em",
            color: "#80786d",
          }}
        >
          {years}
        </span>
      </header>
      <main>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "300",
            lineHeight: "1.4em",
            color: fontColor,
          }}
        >
          {description}
        </p>
      </main>
    </article>
  )
}

Education.propTypes = {
  fontColor: PropTypes.string,
  school: PropTypes.string,
  degree: PropTypes.string,
  department: PropTypes.string,
  years: PropTypes.string,
  description: PropTypes.string,
}

Education.defaultProps = {
  fontColor: `#414242`,
  school: ``,
  degree: ``,
  department: ``,
  years: ``,
  description: ``,
}

export default Education
