import PropTypes from "prop-types"
import React from "react"

const Publication = ({ fontColor, title, date, publication, publisher }) => {
  return (
    <article class="publication">
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
          {title}
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
          {date} ∙ {publication} / {publisher}
        </span>
      </header>
    </article>
  )
}

Publication.propTypes = {
  fontColor: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  publication: PropTypes.string,
  publisher: PropTypes.string,
}

Publication.defaultProps = {
  fontColor: `#414242`,
  title: "",
  date: "",
  publication: "",
  publisher: "",
}

export default Publication
