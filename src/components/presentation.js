import PropTypes from "prop-types"
import React from "react"

const Presentation = ({ fontColor, date, host, title, subject }) => {
  return (
    <article className="presentation">
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
          {subject}
        </h3>
        <span
          style={{
            display: "block",
            fontSize: "13px",
            fontWeight: "300",
            lineHeight: "1.4em",
            color: "#80786d",
          }}
        >
          {date} ∙ {title} / {host}
        </span>
      </header>
    </article>
  )
}

Presentation.propTypes = {
  fontColor: PropTypes.string,
  date: PropTypes.string,
  host: PropTypes.string,
  title: PropTypes.string,
  subject: PropTypes.string,
}

Presentation.defaultProps = {
  fontColor: `#414242`,
  date: "",
  host: "",
  title: "",
  subject: "",
}

export default Presentation
